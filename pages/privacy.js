import { Secondary as Layout } from "../layouts";
import text from "../config/privacy.json";

const Privacy = () => {
  const { privacy } = text;
  return (
    <Layout title="Latin Shine | Dance Company - Privacy Policy page" description="Latin Shine Dance Company respects your privacy, learn more about Privacy policies on this page">
      <main className="text-left bg-almostBlack text-white px-8 py-10 md:py-10 lg:py-30 lg:px-30 xl:px-40 justify-between md:items-start">
        <h3 className="text-bodyM font-black uppercase font-bigShoulder cursor-pointer">
          {privacy.title}
        </h3>
        <div className="flex flex-col">
          {Object.keys(privacy.content).map((item, key) => (
            <p key={`item-${key}`}>
              <span className="font-bold">{privacy.content[key]}</span>
              <br />
              <br />
            </p>
            ))}
          </div>
      </main>
    </Layout>
  )
}

export default Privacy;