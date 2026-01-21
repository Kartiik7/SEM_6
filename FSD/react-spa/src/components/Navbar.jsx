function Navbar({ setPage }) {
  return (
    <nav style={styles.nav}>
      <h2>MySPA</h2>
      <div>
        <button onClick={() => setPage("home")} style={styles.btn}>Home</button>
        <button onClick={() => setPage("about")} style={styles.btn}>About</button>
        <button onClick={() => setPage("contact")} style={styles.btn}>Contact</button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#222",
    color: "#fff"
  },
  btn: {
    marginLeft: "10px",
    padding: "6px 12px",
    cursor: "pointer"
  }
};

export default Navbar;
