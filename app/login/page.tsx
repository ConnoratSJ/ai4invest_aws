'use client';
import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import { useUser } from '@/app/UserContext'
import Link from "next/link";


export default function CreateFormPage() {
    const router = useRouter();
    const { login } = useUser();
    const handleSubmit = async () => {
     
        try {
            localStorage.setItem("risk_bucket", 'medium');
            login(formData.username); // ← 在這裡用 context 更新狀態
            router.push('/dashboard');
          } catch (error) {
            console.error(error);
            alert("Login failed");
          }

      };
      
      
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
  <div className="flex justify-center"> 
    <div className="w-full max-w-md bg-white p-6 border rounded-lg shadow-md text-black mt-16">
      <h2 className="text-xl font-semibold text-center mb-4">Log In</h2>

      <label className="block mb-2">Email</label>
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded"
      />
      
      <label className="block mb-2">Username</label>
      <input
        name="username"
        value={formData.username}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded"
      />

      <label className="block mb-2">Password</label>
      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        className="w-full mb-6 p-2 border rounded"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Submit
      </button>
    </div>
  </div>
</div>

  );
}
