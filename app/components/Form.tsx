"use client";
import * as React from "react";
import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from 'emailjs-com';
import { InputComponent } from "./ui/Input";
import { LabelComponent } from "./ui/Label";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Form = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    from_phone: '',
    from_company: '',
    message: ''
  });
  
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (Object.values(formData).some(value => value.trim() === '')) {
      setStatusMessage('Por favor, preencha todos os campos.');
      setStatusType('error');
      return;
    }

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      formData,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
    ).then((result) => {
      setStatusMessage('Mensagem enviada com sucesso!');
      setStatusType('success');
    }, (error) => {
      setStatusMessage('Erro ao enviar mensagem, tente novamente.');
      setStatusType('error');
    });

    setFormData({
      from_name: '',
      from_email: '',
      from_phone: '',
      from_company: '',
      message: ''
    });
  };

  useGSAP(() => {
    gsap.fromTo('#form',{
      y: -300,
      opacity: 0,
      ease: "power3.inOut",
      duration: 1.2,
    },
    { 
      y: 0,
      opacity: 1,
      duration: 1.2,
      delay: 1.6,
    })
  }, []);

  return (
    <div className="bg-scx-default text-scx-text p-6 rounded-lg max-w-xl sm:mx-auto mx-2 mt-20" id="form">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <LabelComponent htmlFor="name">Nome</LabelComponent>
          <InputComponent id="name" name="from_name" type="text" placeholder="Seu nome" value={formData.from_name} onChange={handleChange} />
        </div>
        <div>
          <LabelComponent htmlFor="email">Email</LabelComponent>
          <InputComponent id="email" name="from_email" type="email" placeholder="Seu email" value={formData.from_email} onChange={handleChange} />
        </div>
        <div>
          <LabelComponent htmlFor="phone">Celular</LabelComponent>
          <InputComponent id="phone" name="from_phone" type="tel" placeholder="Seu celular" value={formData.from_phone} onChange={handleChange} />
        </div>
        <div>
          <LabelComponent htmlFor="company">Empresa</LabelComponent>
          <InputComponent id="company" name="from_company" type="text" placeholder="Sua empresa" value={formData.from_company} onChange={handleChange} />
        </div>
        <div>
          <LabelComponent htmlFor="message">Mensagem</LabelComponent>
          <InputComponent
            id="message"
            name="message"
            as="textarea"
            placeholder="Sua mensagem"
            value={formData.message}
            onChange={handleChange}
            className="h-32"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-scx-accent hover:bg-scx-darker text-white font-medium py-2 px-4 rounded-md"
          >
            Enviar Mensagem
          </button>
        </div>
      </form>
      {statusMessage && (
        <div className={`mt-4 p-4 rounded-md text-center ${statusType === 'success' ? 'text-green-500' : 'text-red-500'}`}>
          {statusMessage}
        </div>
      )}
    </div>
  );
};

export default Form;