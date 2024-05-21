export default function SoruKarti({ question, answer }){
  return (
    <div className="mb-5">
      <h2 className="text-xl font-semibold mb-2">{question}</h2>
      <p className="text-gray-700">{answer}</p>
    </div>
  );
};

