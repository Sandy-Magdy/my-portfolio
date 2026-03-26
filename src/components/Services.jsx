export default function Services() {
  const services = {
    title: "Services",
    items: [
      {
        title: "Web Development",
        description: "Full-stack web applications built with modern technologies."
      },
      {
        title: "Frontend Engineering",
        description: "Pixel-perfect, interactive user interfaces with smooth animations."
      },
      {
        title: "Backend Development",
        description: "Robust server-side solutions with secure APIs."
      },
      {
        title: "Responsive Design",
        description: "Designs that work flawlessly across every device."
      }
    ]
  };

  return (
    <section id="services" className="bg-muted/20 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{services.title}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.items.map((service, index) => (
            <div key={index} className="p-6 rounded-lg border border-border hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}