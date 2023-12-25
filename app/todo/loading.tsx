import { Container } from "@radix-ui/themes";

export default function LoadingTodos() {
  return (
    <div className="w-[75%] mx-auto flex justify-center items-center mt-8">
      <div className="w-full flex justify-between items-start gap-2 flex-wrap">
        {"loadingandloadn".split("").map(() => {
          return (
            <div key={1} className="w-[21rem] h-20 flex flex-col gap-4 p-2 justify-center sm:justify-start items-start rounded-xl bg-slate-100">
              <div className="flex justify-between items-center">
                <div className="bg-slate-50 w-36 h-5 rounded-md" />
              </div>
              <div className="w-52 bg-slate-50 h-3 rounded-md"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}