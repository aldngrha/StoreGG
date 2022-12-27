import CategoryItem from "../../molecules/CategoryItem";
import TableRow from "../../molecules/TableRow";

export default function OverviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              <CategoryItem nominal={18000500} icon="desktop">
                Game <br /> Desktop
              </CategoryItem>
              <CategoryItem nominal={8455000} icon="mobile">
                Game <br /> Mobile
              </CategoryItem>
              <CategoryItem nominal={5000000} icon="desktop">
                Other <br /> Categories
              </CategoryItem>
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  title="Dota 2"
                  categories="Desktop"
                  item={250000}
                  price={265000}
                  status="Pending"
                  image="overview-1"
                />
                <TableRow
                  title="Call of Duty: Modern"
                  categories="Mobile"
                  item={200}
                  price={350000}
                  status="Success"
                  image="overview-2"
                />
                <TableRow
                  title="Clash of Clans"
                  categories="Mobile"
                  item={250000}
                  price={265000}
                  status="Success"
                  image="overview-3"
                />
                <TableRow
                  title="The Royal Game"
                  categories="Mobile"
                  item={250000}
                  price={265000}
                  status="Failed"
                  image="overview-4"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
