import Profile from "../../atoms/SidebarItem/Profile";
import Footer from "../../atoms/SidebarItem/Footer";
import MenuItem from "../../atoms/SidebarItem/MenuItem";

export default function Sidebar() {
  return (
    <aside>
      <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
          <Profile />
          <div className="menus">
            <MenuItem title="Overview" icon="overview" active />
            <MenuItem title="Transactions" icon="transaction" />
            <MenuItem title="Messages" icon="messages" />
            <MenuItem title="Card" icon="card" />
            <MenuItem title="Rewards" icon="reward" />
            <MenuItem title="Setting" icon="setting" />
            <MenuItem title="Log Out" icon="logout" />
          </div>
          <Footer />
        </div>
      </section>
    </aside>
  );
}
