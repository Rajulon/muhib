document.addEventListener("DOMContentLoaded", function () {
  // Array materi, bisa digantikan dengan data dari server atau sumber lainnya
  const materiArray = [
    {
      judul: "Tujuan Bimbingan Konseling",
      konten:
        "Tujuan bimbingan konseling mencakup berbagai aspek pengembangan dan pemahaman diri individu. Berikut adalah penjelasan lebih rinci mengenai tujuan-tujuan tersebut:",
      list: [
        {
          poin: "Pemahaman Diri",
          kontenList:
            "Membantu individu memahami dirinya sendiri, termasuk potensi, minat, bakat, dan nilai-nilai personal.",
        },
        {
          poin: "Pengembangan Potensi",
          kontenList:
            "Mendorong pengembangan potensi individu untuk mencapai prestasi maksimal dalam kehidupan.",
        },
        {
          poin: "Penyelesaian Masalah",
          kontenList:
            "Memberikan dukungan untuk mengatasi masalah pribadi, sosial, dan akademis.",
        },
        {
          poin: "Pemilihan Karir",
          kontenList:
            "Membantu individu mengembangkan keterampilan sosial yang diperlukan dalam interaksi sosial.",
        },
        {
          poin: "Peningkatan Keterampilan Sosial",
          kontenList:
            "Memberikan dukungan untuk mengatasi masalah pribadi, sosial, dan akademis.",
        },
      ],
    },
    {
      judul: "Prinsip-Prinsip Bimbingan Konseling",
      konten:
        "Prinsip-prinsip bimbingan konseling adalah pedoman etika dan nilai-nilai dasar yang harus dipegang teguh oleh para konselor dalam melaksanakan tugas mereka. Berikut adalah penjelasan dari beberapa prinsip utama dalam bimbingan konseling:",
      list: [
        {
          poin: "Penerimaan",
          kontenList:
            "Konselor menerima individu atau kelompok secara positif tanpa menghakimi.",
        },
        {
          poin: "Empati",
          kontenList:
            "Konselor memahami dan merasakan perasaan individu, menempatkan diri dalam situasi mereka.",
        },
        {
          poin: "Keterbukaan",
          kontenList:
            "Terbuka terhadap perasaan, pikiran, dan pengalaman individu tanpa prasangka.",
        },
        {
          poin: "Kepercayaan",
          kontenList:
            "Membangun kepercayaan antara konselor dan individu untuk menciptakan hubungan yang efektif.",
        },
      ],
    },
    {
      judul: "Teknik-Teknik Bimbingan Konseling",
      konten:
        "Teknik-teknik bimbingan konseling adalah metode atau pendekatan yang digunakan oleh konselor untuk membantu individu atau kelompok dalam mengatasi masalah, mengembangkan pemahaman diri, dan mencapai tujuan tertentu. Berikut adalah beberapa teknik bimbingan konseling beserta penjelasannya:",
      list: [
        {
          poin: "Wawancara",
          kontenList:
            "Percakapan antara konselor dan individu untuk menjelaskan masalah dan mencari solusi.",
        },
        {
          poin: "Observasi",
          kontenList:
            "Pengamatan langsung perilaku individu dalam konteks tertentu.",
        },
        {
          poin: "Tes dan Inventori",
          kontenList:
            "Penggunaan alat penilaian untuk membantu memahami minat, bakat, dan kepribadian individu.",
        },
        {
          poin: "Konseling Kelompok",
          kontenList:
            "Kegiatan konseling yang melibatkan sejumlah individu dengan masalah atau kebutuhan serupa.",
        },
      ],
    },
    {
      judul: "Etika dalam Bimbingan Konseling",
      konten:
        "Etika dalam bimbingan konseling merujuk pada seperangkat prinsip moral dan norma-norma perilaku yang harus dipegang oleh konselor selama melaksanakan tugas mereka. Prinsip-prinsip etika ini dirancang untuk melindungi kepentingan, hak, dan kesejahteraan klien. Berikut adalah beberapa aspek kunci etika dalam bimbingan konseling:",
      list: [
        {
          poin: "Kerahasiaan",
          kontenList:
            "Melindungi informasi pribadi individu yang dibagikan selama sesi konseling.",
        },
        {
          poin: "Hormat",
          kontenList:
            "Menghormati hak dan nilai-nilai individu serta menghindari diskriminasi.",
        },
        {
          poin: "Kompetensi Profesional",
          kontenList:
            "Menjamin bahwa konselor memiliki keterampilan dan pengetahuan yang diperlukan.",
        },
      ],
    },
    {
      judul: "Peran Konselor",
      konten:
        "Peran konselor dalam bimbingan konseling sangat penting dalam membantu individu atau kelompok mengatasi masalah, mengembangkan potensi, dan mencapai tujuan tertentu. Berikut adalah beberapa penjelasan mengenai peran konselor:",
      list: [
        {
          poin: "Fasilitator",
          kontenList:
            "Memfasilitasi proses pengembangan pribadi dan penyelesaian masalah.",
        },
        {
          poin: "Penasehat",
          kontenList:
            "Memberikan saran dan panduan kepada individu sesuai kebutuhan.",
        },
        {
          poin: "Pendukung",
          kontenList: "Memberikan dukungan emosional selama proses konseling.",
        },
      ],
    },
    // Tambahkan materi lebih lanjut sesuai kebutuhan
  ];

  const materiContainer = document.getElementById("materi-container");

  // Loop untuk menambahkan setiap materi ke halaman
  materiArray.forEach((materi) => {
    const materiElement = document.createElement("div");
    materiElement.classList.add("materi");

    const judulElement = document.createElement("h4");
    judulElement.textContent = materi.judul;

    const kontenElement = document.createElement("div");
    kontenElement.textContent = materi.konten;

    // Menambahkan list ke dalam konten materi
    if (materi.list && materi.list.length > 0) {
      const listElement = document.createElement("ul");

      materi.list.forEach((item) => {
        const listItemElement = document.createElement("li");
        listItemElement.textContent = item.poin;

        // Menambahkan konten tambahan pada setiap poin list
        if (item.kontenList) {
          const kontenListElement = document.createElement("p");
          kontenListElement.textContent = item.kontenList;
          listItemElement.appendChild(kontenListElement);
        }

        listElement.appendChild(listItemElement);
      });

      kontenElement.appendChild(listElement);
    }

    materiElement.appendChild(judulElement);
    materiElement.appendChild(kontenElement);

    materiContainer.appendChild(materiElement);
  });
});
