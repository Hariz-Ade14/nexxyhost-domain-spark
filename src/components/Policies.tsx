export type policyProps = {
  id: number;
  title: string;
  content: string | string[];
};
const Policies = ({
  Policies,
  text,
}: {
  Policies: policyProps[];
  text: string;
}) => {
  return (
    <div>
      {" "}
      <div className="max-w-5xl mx-auto p-6 min-h-screen">
        <div className="rounded-lg p-8 mt-6">
          <h1 className="text-3xl font-bold text-teal-900 mb-8 text-center border-b pb-4">
            NEXXYHOST | {text}
          </h1>

          <div className="space-y-6">
            {Policies.map(({ id, title, content }) => (
              <div
                key={id}
                className="bg-gradient-to-r from-teal-50 to-teal-50 rounded-lg p-6 border-l-4 border-teal-900 hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="bg-teal-900 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                    {id}
                  </span>
                  {title}
                </h2>
                {typeof content === "object" ? (
                  <>
                    {content.map((item, index) => (
                      <li className="text-black leading-relaxed" key={index}>
                        {item}
                      </li>
                    ))}
                  </>
                ) : (
                  <p className="text-black leading-relaxed">{content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;
