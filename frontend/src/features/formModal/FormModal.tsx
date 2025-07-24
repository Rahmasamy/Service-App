// components/FormModal.tsx
import React, { useReducer } from "react";
import axios from "axios";

type FormState = {
  name: string;
  phone_number: string;
  email: string;
  loading: boolean;
  success: string | null;
  error: string | null;
};

type Action =
  | { type: "SET_FIELD"; field: keyof FormState; value: string }
  | { type: "SET_LOADING"; value: boolean }
  | { type: "SET_SUCCESS"; value: string | null }
  | { type: "SET_ERROR"; value: string | null }
  | { type: "RESET" };

const initialState: FormState = {
  name: "",
  phone_number: "",
  email: "",
  loading: false,
  success: null,
  error: null,
};

function reducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_LOADING":
      return { ...state, loading: action.value };
    case "SET_SUCCESS":
      return { ...state, success: action.value };
    case "SET_ERROR":
      return { ...state, error: action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

type FormModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const FormModal: React.FC<FormModalProps> = ({ isOpen, onClose }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_FIELD", field: e.target.name as keyof FormState, value: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADING", value: true });
    dispatch({ type: "SET_ERROR", value: null });
    dispatch({ type: "SET_SUCCESS", value: null });

    try {
        const apiUrl = import.meta.env.VITE_API_URL;
      await axios.post(`${apiUrl}/forms`, {
        name: state.name,
        phone_number: state.phone_number,
        email: state.email,
      });
      dispatch({ type: "SET_SUCCESS", value: "🎉 Form submitted successfully!" });
      setTimeout(() => {
        dispatch({ type: "RESET" });
        onClose(); // close after reset
      }, 2000);
    } catch (err: any) {
      const message =
        err.response?.data?.message || "Something went wrong. Please try again.";
      dispatch({ type: "SET_ERROR", value: message });
    } finally {
      dispatch({ type: "SET_LOADING", value: false });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-xl w-full max-w-md p-6 relative">
        <button
          className="absolute top-3 right-3 text-white bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="bg-[#1C7A80] rounded-lg text-white p-4 mb-6">
          <h2 className="text-lg font-bold">Discount</h2>
          <p className="text-4xl font-extrabold text-yellow-400">25%</p>
          <p className="text-sm">
            Sign up with your data and get a 25% discount on your order on our store,
            and subscribe to get our updates.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={state.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-full bg-gray-100 border"
            required
          />
          <input
            type="text"
            name="phone_number"
            placeholder="Enter Your Phone Number"
            value={state.phone_number}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-full bg-gray-100 border"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
            value={state.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-full bg-gray-100 border"
            required
          />
          <button
            type="submit"
            disabled={state.loading}
            className="w-full bg-[#1C7A80] text-white font-bold py-2 rounded-full hover:opacity-90"
          >
            {state.loading ? "Submitting..." : "Get 25% Discount"}
          </button>
        </form>

        {state.success && (
          <p className="text-green-600 mt-4 text-sm">{state.success}</p>
        )}
        {state.error && (
          <p className="text-red-600 mt-4 text-sm">{state.error}</p>
        )}
      </div>
    </div>
  );
};

export default FormModal;
