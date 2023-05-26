import { reasons } from "../../data/reason";

function ReasonSection() {
  return (
    <section id="reasons" className="relative main-container flex flex-col justify-center items-center mt-32 md:mt-64 px-5">
      <div className="space-y-6 text-center w-full md:w-1/2 mb-20">
        <div className="text-primary font-semibold tracking-widest">TERUS GIMANA?</div>
        <h2 className="font-bold text-4xl">Terus Ngapain Dong Kalo Nggak Ada Insight Apapun?</h2>
        <p className="opacity-60">
          Ya nggak tau, salah sendiri lu ngapain ke website ini. Tapi ada tiga kemungkinan kenapa lo
          bisa ada di website ini. Ketiga kemungkinan itu akan gwej jabarkan di bawah ini dengan
          ilustrasinya hehehe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {reasons.map((reason, i) => (
          <div className="space-y-3" key={i}>
            <div className="aspect-video flex items-center justify-center w-full rounded-xl bg-dark/5">
              <img src={reason.image} alt={reason.name} />
            </div>
            <h3 className="text-[22px] font-semibold">{reason.name}</h3>
            <p className="opacity-60">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReasonSection;
