const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  if (!Array.isArray(dataPenjualan)) {
    return "Parameter harus bertipe Array";
  }

  let totalModal = 0;
  let totalKeuntungan = 0;
  let produkBukuTerlaris = null;
  let penulisBukuTerlaris = null;
  let terjualBukuTerlaris = 0;

  dataPenjualan.forEach((item) => {
    const modal = item.hargaBeli * item.totalTerjual;
    const keuntungan = item.hargaJual * item.totalTerjual - modal;
    totalModal += modal;
    totalKeuntungan += keuntungan;

    if (item.totalTerjual > terjualBukuTerlaris) {
      terjualBukuTerlaris = item.totalTerjual;
      produkBukuTerlaris = item.namaProduk;
      penulisBukuTerlaris = item.penulis;
    }
  });

  const persentaseKeuntungan = `${((totalKeuntungan / totalModal) * 100).toFixed(0)}%`;
  const totalKeuntunganRp = `Rp.${totalKeuntungan.toLocaleString("id-ID")}`;
  const totalModalRp = `Rp.${totalModal.toLocaleString("id-ID")}`;

  return {
    totalModal: totalModalRp,
    totalKeuntungan: totalKeuntunganRp,
    produkBukuTerlaris,
    penulisBukuTerlaris,
    persentaseKeuntungan,
  };
}

console.log(getInfoPenjualan(dataPenjualanNovel));
