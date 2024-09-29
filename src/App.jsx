import Charts from "./components/Charts";
import DoughnutChart from "./components/DoughnutChart";
import Info from "./components/Info";
import Navbar from "./components/navbar";
import Stats from "./components/Stats";
import Accounts from "./components/accounts";
import Transactions from "./components/Transactions";

const App = () => {
  const theme = "dark";
  return (
    <main className={theme}>
      <div className="w-full px-6 md:px-20 bg-white dark:bg-slate-900">
        <Navbar />

        <div className="px-0 md:px-5 2xl:px-20">
          <Info />
          <Stats />

          <div className="w-full flex flex-col-reverse md:flex-row items-center gap-10">
            <Charts />
            <DoughnutChart />
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-0 md:gap-10 2xl:gap-20">
            <Transactions />
            <Accounts />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
