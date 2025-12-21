interface IPageHeaderProps {
  title: string;
  description: string;
}

const PageHeader = ({ title, description }: IPageHeaderProps) => {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-linear-to-b from-primary/5 to-transparent">
      <div className="container-custom">
        <h1 className="heading-xl text-primary mb-6 text-balance">{title}</h1>
        <p className="text-lg text-foreground/80">{description}</p>
      </div>
    </section>
  );
};

export default PageHeader;
