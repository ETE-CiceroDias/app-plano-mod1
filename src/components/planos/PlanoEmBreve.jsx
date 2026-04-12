export default function PlanoEmBreve({ disc }) {
  return (
    <div className="text-center py-12 px-6">
      <div className="text-5xl mb-4">🔒</div>
      <h3 className="font-bold text-gray-700 text-lg mb-2">Plano em construção</h3>
      <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
        O plano de <strong>{disc.nome}</strong> será disponibilizado em breve.
        Acompanhe o Google Classroom para atualizações.
      </p>
    </div>
  );
}
