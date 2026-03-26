export default function Reviews() {
  const reviews = [
    { text: "عمل رائع وممتاز، أنصح بالتعامل معها. كانت محترفة في تنفيذ الموقع بالكامل.", name: "أحمد محمد", role: "مدير مشروع" },
    { text: "احترافية في العمل وسرعة في التنفيذ. الموقع طلع أجمل مما توقعت.", name: "سارة علي", role: "مصممة UI/UX" },
    { text: "تعامل راقي وجودة عالية في الشغل. سلمت العمل في الوقت المحدد.", name: "محمد خالد", role: "صاحب عمل" }
  ];

  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Reviews</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg">
              <p className="mb-4 text-gray-600 dark:text-gray-400 italic">"{r.text}"</p>
              <p className="font-semibold text-lg">{r.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">{r.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}