import Profile from "../../atoms/SidebarItem/Profile";
import Footer from "../../atoms/SidebarItem/Footer";
import MenuItem from "../../atoms/SidebarItem/MenuItem";

interface SidebarProps {
  activeMenu: "overview" | "transactions" | "setting";
}

export default function Sidebar({ activeMenu }: SidebarProps) {
  return (
    <aside>
      <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
          <Profile />
          <div className="menus">
            <MenuItem
              title="Overview"
              icon="overview"
              active={activeMenu === "overview"}
              href="/member"
            />
            <MenuItem
              title="Transactions"
              icon="transaction"
              active={activeMenu === "transactions"}
              href="/member/transactions"
            />
            <MenuItem
              title="Messages"
              icon="messages"
              href="/member/messages"
            />
            <MenuItem title="Card" icon="card" href="/member/cards" />
            <MenuItem title="Rewards" icon="reward" href="/member/rewards" />
            <MenuItem
              title="Setting"
              icon="setting"
              active={activeMenu === "setting"}
              href="/member/edit-profile"
            />
            <MenuItem title="Log Out" icon="logout" href="/sign-in" />
          </div>
          <Footer />
        </div>
      </section>
    </aside>
  );
}
