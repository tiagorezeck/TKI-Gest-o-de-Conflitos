import React, { useState } from 'react';
import { UserAuth } from '../types/tki';
import { saveStoredAuth, normalizePhoneBR } from '../utils/auth';
import { User, Mail, Phone, ShieldCheck, X, CheckCircle2, AlertCircle } from 'lucide-react';

interface AuthGateModalProps {
  isOpen: boolean;
  onVerified: (auth: UserAuth) => void;
  onClose: () => void;
}

export const AuthGateModal: React.FC<AuthGateModalProps> = ({ isOpen, onVerified, onClose }) => {
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');
  const [consentLGPD, setConsentLGPD] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage('Por favor, informe seu nome completo.');
      return;
    }

    if (!consentLGPD) {
      setErrorMessage('É necessário aceitar os termos da LGPD para prosseguir.');
      return;
    }

    const auth = saveStoredAuth({
      full_name: fullName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      organization: organization.trim(),
      status: 'verified',
    });

    onVerified(auth);
  };

  const handleGuestContinue = () => {
    const auth = saveStoredAuth({
      full_name: 'Participante Anônimo',
      status: 'anonymous',
    });
    onVerified(auth);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-md rounded-2xl glass-card-glow p-6 text-slate-100 relative overflow-hidden border border-indigo-500/30 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-indigo-600 p-0.5 shrink-0">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Identificação do Participante</h3>
            <p className="text-xs text-slate-400">
              Personalize seu relatório executivo e certificado
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              Nome Completo <span className="text-rose-400">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ex: Mariana Albuquerque"
                className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 placeholder-slate-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              E-mail Institucional ou Pessoal
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu.email@exemplo.com"
                className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 placeholder-slate-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Telefone / WhatsApp
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(normalizePhoneBR(e.target.value))}
                  placeholder="(11) 99999-9999"
                  className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 placeholder-slate-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Organização / Setor
              </label>
              <input
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="Ex: Recursos Humanos"
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 placeholder-slate-500"
              />
            </div>
          </div>

          {/* Consentimento LGPD */}
          <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <input
              type="checkbox"
              id="consentLGPD"
              checked={consentLGPD}
              onChange={(e) => setConsentLGPD(e.target.checked)}
              className="mt-0.5 rounded border-slate-700 text-indigo-500 focus:ring-indigo-500 bg-slate-950 cursor-pointer"
            />
            <label htmlFor="consentLGPD" className="text-[11px] text-slate-400 leading-snug cursor-pointer select-none">
              Concordo com o tratamento dos meus dados exclusivamente para fins desta avaliação comportamental, em conformidade com a LGPD (Lei nº 13.709/2018).
            </label>
          </div>

          {errorMessage && (
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="pt-2 space-y-2">
            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Confirmar e Continuar</span>
            </button>

            <button
              type="button"
              onClick={handleGuestContinue}
              className="w-full py-2 px-3 text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer text-center"
            >
              Continuar como convidado anônimo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
