// Data Hutang
let hutangs = [];

// Memuat data awal (opsional)
// hutangs.push({ kode: '001', nama: 'John Doe', jumlah: 1000000, tanggal: '2024-06-25', barang: 'Laptop' });
// hutangs.push({ kode: '002', nama: 'Jane Smith', jumlah: 500000, tanggal: '2024-06-24', barang: 'Smartphone' });

const table = document.getElementById("table");
const tbody = document.getElementById("tbody");

// Fungsi untuk menampilkan data hutang ke dalam tabel
function renderTable() {
  tbody.innerHTML = "";

  hutangs.forEach((hutang) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${hutang.kode}</td><td>${hutang.nama}</td><td>${hutang.jumlah}</td><td>${hutang.tanggal}</td><td>${hutang.barang}</td><td><button onclick="editHutang('${hutang.kode}')">Edit</button><button onclick="hapusHutang('${hutang.kode}')">Hapus</button></td>`;
    tbody.appendChild(row);
  });
}

// Tambah hutang baru
function tambahHutang() {
  const kode = document.getElementById("kode").value;
  const nama = document.getElementById("nama").value;
  const jumlah = document.getElementById("jumlah").value;
  const tanggal = document.getElementById("tanggal").value;
  const barang = document.getElementById("barang").value;

  if (kode && nama && jumlah && tanggal && barang) {
    hutangs.push({ kode, nama, jumlah, tanggal, barang });
    renderTable();
    resetForm();
  } else {
    alert("Mohon lengkapi semua input!");
  }
}

// Hapus hutang berdasarkan kode
function hapusHutang(kode) {
  hutangs = hutangs.filter((hutang) => hutang.kode !== kode);
  renderTable();
}

// Edit hutang berdasarkan kode
function editHutang(kode) {
  const index = hutangs.findIndex((hutang) => hutang.kode === kode);
  if (index !== -1) {
    const hutang = hutangs[index];
    document.getElementById("kode").value = hutang.kode;
    document.getElementById("nama").value = hutang.nama;
    document.getElementById("jumlah").value = hutang.jumlah;
    document.getElementById("tanggal").value = hutang.tanggal;
    document.getElementById("barang").value = hutang.barang;

    // Hapus hutang yang akan diedit
    hutangs.splice(index, 1);
    renderTable();
  }
}

// Reset form setelah tambah atau edit
function resetForm() {
  document.getElementById("kode").value = "";
  document.getElementById("nama").value = "";
  document.getElementById("jumlah").value = "";
  document.getElementById("tanggal").value = "";
  document.getElementById("barang").value = "";
}

// Cari hutang berdasarkan kode
function cariHutang() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const hasilPencarian = hutangs.filter((hutang) =>
    hutang.kode.toLowerCase().includes(keyword)
  );

  // Menampilkan hasil pencarian ke dalam tabel
  tbody.innerHTML = "";
  hasilPencarian.forEach((hutang) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${hutang.kode}</td><td>${hutang.nama}</td><td>${hutang.jumlah}</td><td>${hutang.tanggal}</td><td>${hutang.barang}</td><td><button onclick="editHutang('${hutang.kode}')">Edit</button><button onclick="hapusHutang('${hutang.kode}')">Hapus</button></td>`;
    tbody.appendChild(row);
  });
}
