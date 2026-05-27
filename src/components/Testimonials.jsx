function Testimonials() {
  const reviews = [
    "Amazing guidance and accurate predictions!",
    "Helped me make important life decisions.",
    "Professional and insightful readings."
  ];

  return (
    <section className="py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">
        Client Reviews
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-slate-900 p-6 rounded-xl"
          >
            ⭐⭐⭐⭐⭐
            <p className="mt-4">
              {review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;