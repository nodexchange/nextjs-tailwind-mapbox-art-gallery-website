import { Secondary as Layout } from "../layouts";
import text from "../config/terms.json";

const Terms = () => {
  const { terms } = text;
  return (
    <Layout title="Latin Shine | Dance Company - Terms and Conditions page" description="Read about our Terms and Conditions for Latin Shine Dance Company on this page">
      <main className="text-left bg-almostBlack text-white px-8 py-10 md:py-10 lg:py-30 lg:px-30 xl:px-40 justify-between md:items-start">
        <h3 className="text-bodyM font-black uppercase font-bigShoulder cursor-pointer">
          {terms.title}
        </h3>
        <div className="flex flex-col">
          {Object.keys(terms.content).map((item, key) => (
            <p key={`item-${key}`}>
              <span className="font-bold">{terms.content[key]}</span>
              <br />
              <br />
            </p>
            ))}
          </div>
      </main>
    </Layout>
  )
}

export default Terms;