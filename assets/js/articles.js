// NAGJ Article Database
// Single source of truth for all volumes and articles.
// To add a new article: add an entry to the appropriate issue's `articles` array,
// or add a new issue object. The site reads this file to render all pages.

const NAGJ_DATA = {
  journal: {
    name: "North American GeoGebra Journal",
    abbr: "NAGJ",
    issn: "2162-3856",
    tagline: "Fostering mathematical understanding through visualization and exploration.",
    founded: 2012,
    acceptanceRate: "53%",
    gradeSpan: "K–16",
    editorEmail: "james.quinlan@maine.edu",
    legacyUrl: "https://mathed.miamioh.edu/index.php/ggbj",
    overleafTemplate: "https://www.overleaf.com/latex/templates/nagj/jjfqhddndkxp",
    githubTemplate: "https://github.com/jamesquinlan/nagj"
  },

  issues: [
    {
      id: "v14n1",
      volume: 14, number: 1, year: 2026,
      published: "2026-04-13",
      title: "North American GeoGebra Journal",
      subtitle: "Fostering mathematical understanding through visualization and exploration.",
      legacyId: 19,
      articles: [
        {
          id: "273",
          title: "A Digital Planisphere in GeoGebra",
          authors: ["Santiago Cerisola", "Monica López García"],
          pages: "1–16",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/273/179",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/273",
          localPdf: null  // set to "pdfs/v14n1-cerisola.pdf" once uploaded
        }
      ]
    },
    {
      id: "v13n1",
      volume: 13, number: 1, year: 2025,
      published: "2025-07-03",
      title: "North American GeoGebra Journal",
      subtitle: "Fostering mathematical understanding through visualization and exploration.",
      legacyId: 18,
      articles: [
        {
          id: "265",
          title: "Using a Procedural Color Palette in GeoGebra",
          authors: ["Juan Carlos Ponce Campuzano"],
          pages: "1–11",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/265/174",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/265",
          localPdf: null
        },
        {
          id: "216",
          title: "Derivatives and Approximations: The Case of f(x)=exp(x) and the Affine Approximation l(x)=x+1",
          authors: ["Humberto José Bortolossi", "Luciana Prado Mouta Pena"],
          pages: "12–17",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/216/175",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/216",
          localPdf: null
        },
        {
          id: "229",
          title: "A Visual Approach to Group Homomorphisms Using GeoGebra",
          authors: ["Renata Teófilo de Sousa", "Francisco Régis Vieira Alves", "Ana Paula Florêncio Aires"],
          pages: "18–26",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/229/176",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/229",
          localPdf: null
        },
        {
          id: "220",
          title: "Geometry of Equilateral Triangle Symmetries: A Mathematical Perspective for Teacher Training",
          authors: ["Paulo Vitor da Silva Santiago", "Francisco Régis Vieira Alves", "Maria José Costa dos Santos"],
          pages: "27–34",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/220/177",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/220",
          localPdf: null
        },
        {
          id: "271",
          title: "On the Brocard Circle",
          authors: ["Manuel M. Aguilera", "Joaquin G. Camana"],
          pages: "35–44",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/271/178",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/271",
          localPdf: null
        }
      ]
    },
    {
      id: "v12n1",
      volume: 12, number: 1, year: 2024,
      published: "2024-07-17",
      title: "North American GeoGebra Journal",
      subtitle: "Fostering mathematical understanding through visualization and exploration.",
      legacyId: 16,
      articles: [
        {
          id: "208",
          title: "Expanding the Semiotic Scope of GeoGebra by Teaching It to Speak",
          authors: ["Humberto José Bortolossi", "Dirce Uesu Pesco", "Wanderley Moura Rezende"],
          pages: "1–8",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/208/169",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/208",
          localPdf: null
        },
        {
          id: "210",
          title: "Modeling the Gyroid in GeoGebra",
          authors: ["Lingguo Bu"],
          pages: "9–24",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/210/170",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/210",
          localPdf: null
        },
        {
          id: "212",
          title: "Rate of Change: Degrees vs. Radians",
          authors: ["Craig Cullen", "Lawrence Ssebaggala", "Óscar Chávez"],
          pages: "25–31",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/212/171",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/212",
          localPdf: null
        },
        {
          id: "213",
          title: "A Dynamic Model to Engage Students in the Triangle's Inherent Similarity",
          authors: ["Richard Kaufman", "William Jackson"],
          pages: "32–41",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/213/172",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/213",
          localPdf: null
        }
      ]
    },
    {
      id: "v11n1",
      volume: 11, number: 1, year: 2023,
      published: "2023-01-11",
      title: "North American GeoGebra Journal",
      subtitle: "Fostering mathematical understanding through visualization and exploration.",
      legacyId: 15,
      articles: [
        {
          id: "197",
          title: "Tracing Closed Curves with Epicycles: A Fun Application of the Discrete Fourier Transform",
          authors: ["Juan Carlos Ponce Campuzano"],
          pages: "1–14",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/197/159",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/197",
          localPdf: null
        },
        {
          id: "198",
          title: "Origami Paper Cup: From Paper Folding to Data Analysis and Algebraic Explorations",
          authors: ["Lingguo Bu", "Harvey Henson"],
          pages: "15–25",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/198/162",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/198",
          localPdf: null
        },
        {
          id: "200",
          title: "Building an Analog Clock with Complex Numbers",
          authors: ["David Glassmeyer", "Binita Patel"],
          pages: "26–34",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/200/165",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/200",
          localPdf: null
        },
        {
          id: "199",
          title: "Filling Vessels: An Exciting Way to Investigate Functional Dependencies",
          authors: ["Laura Sergi", "Stefan Götz"],
          pages: "35–47",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/199/166",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/199",
          localPdf: null
        },
        {
          id: "205",
          title: "Challenging Misconceptions about the Coefficient of Determination (R²) with a Dynamic GeoGebra Applet",
          authors: ["Michael Singer Meagher", "Michael Todd Edwards", "Asli Özgün-Koca"],
          pages: "48–61",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/205/167",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/205",
          localPdf: null
        },
        {
          id: "206",
          title: "Projective Geometry: A Historical Overview and Perspectives for Education",
          authors: ["Lucas Cunha Bastos", "Francisco Régis Vieira Alves", "Paulo César Cavalcante de Oliveira", "Renata Teófilo de Sousa"],
          pages: "62–70",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/206/168",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/206",
          localPdf: null
        }
      ]
    },
    {
      id: "v10n1",
      volume: 10, number: 1, year: 2022,
      published: "2022-02-03",
      title: "North American GeoGebra Journal",
      subtitle: "Fostering mathematical understanding through visualization and exploration.",
      legacyId: 14,
      articles: [
        {
          id: "188",
          title: "Trigonometric Interpolation Using the Discrete Fourier Transform",
          authors: ["Juan Carlos Ponce Campuzano"],
          pages: "1–13",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/188/154",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/188",
          localPdf: null
        },
        {
          id: "192",
          title: "The Arithmetic Average of Altitudes From Vertices of a Parallelogram to a Straight Line: A Sketch and Proof",
          authors: ["Moshe Stupel", "David Fraivert"],
          pages: "14–19",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/192/155",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/192",
          localPdf: null
        },
        {
          id: "184",
          title: "Extending, Formulating, and Refining Conjectures with GeoGebra: The Pentagon and Its Medial Pentagon",
          authors: ["José Contreras"],
          pages: "20–28",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/184/156",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/184",
          localPdf: null
        },
        {
          id: "189",
          title: "A Celestial Sphere Model in GeoGebra",
          authors: ["Mónica López García", "Santiago Cerisola"],
          pages: "29–44",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/189/157",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/189",
          localPdf: null
        },
        {
          id: "193",
          title: "Fair Share of Regular Polygon Pizzas",
          authors: ["Humberto José Bortolossi"],
          pages: "45–46",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/193/158",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/193",
          localPdf: null
        }
      ]
    },
    {
      id: "v9n1",
      volume: 9, number: 1, year: 2021,
      published: "2021-06-16",
      title: "North American GeoGebra Journal",
      subtitle: "Fostering mathematical understanding through visualization and exploration.",
      legacyId: 13,
      articles: [
        {
          id: "177",
          title: "Examining Possible LU Decompositions",
          authors: ["Ly Jacky Nhiayi", "Tuyetdong Phan-Yamada"],
          pages: "1–7",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/177/144",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/177",
          localPdf: null
        },
        {
          id: "180",
          title: "Layering: Showing and Hiding Objects",
          authors: ["Todd Edwards", "James Quinlan"],
          pages: "8–10",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/180/145",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/180",
          localPdf: null
        },
        {
          id: "183",
          title: "Volume Invariant Cube Twisting: GeoGebra Modeling and Algebraic Explorations",
          authors: ["Lingguo Bu"],
          pages: "11–21",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/183/146",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/183",
          localPdf: null
        },
        {
          id: "179",
          title: "On an Inequality Between Side Lengths of Triangles",
          authors: ["Ruti Segal", "Moshe Stupel"],
          pages: "22–24",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/179/149",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/179",
          localPdf: null
        },
        {
          id: "181",
          title: "On Coloring Different Objects of the Same Class",
          authors: ["Juan Carlos Ponce Campuzano"],
          pages: "31–35",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/181/152",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/181",
          localPdf: null
        },
        {
          id: "178",
          title: "From Semi-Proof to Proof: Motivating Deductive Thinking Through Inductive Exploration",
          authors: ["Moshe Stupel", "David Ben-Chaim"],
          pages: "36–40",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/178/153",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/178",
          localPdf: null
        }
      ]
    },
    {
      id: "v8n1",
      volume: 8, number: 1, year: 2019,
      published: "2019-04-18",
      title: "North American GeoGebra Journal",
      subtitle: "Fostering mathematical understanding through creative investigation.",
      legacyId: 12,
      articles: [
        {
          id: "152",
          title: "Creating a Digital Tape Diagram",
          authors: ["S. Asli Ozgun-Koca", "Michael Todd Edwards", "Michael Meagher"],
          pages: "1–14",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/152/135",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/152",
          localPdf: null
        },
        {
          id: "157",
          title: "Exploring and Solving Feynman's Triangle Through Multiple Approaches",
          authors: ["Drew Michael Lazar", "Kathryn Shafer"],
          pages: "15–34",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/157/136",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/157",
          localPdf: null
        },
        {
          id: "170",
          title: "Some Activities in the Style of \"Proof without Words\" Related to Altitudes in a Triangle",
          authors: ["Victor Oxman", "Moshe Stupel"],
          pages: "35–38",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/170/137",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/170",
          localPdf: null
        },
        {
          id: "171",
          title: "Modeling an Optimal Trajectory for a Certain Minigolf Station",
          authors: ["Christoph Ableitinger"],
          pages: "39–45",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/171/138",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/171",
          localPdf: null
        },
        {
          id: "175",
          title: "Modeling the Paths of the Sun Using GeoGebra",
          authors: ["Santiago Cerisola", "Azahara López Romero"],
          pages: "46–57",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/175/139",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/175",
          localPdf: null
        },
        {
          id: "172",
          title: "Locus of Critical Points for Some Polynomial",
          authors: ["Haotian Xie", "Zheng Yang"],
          pages: "58–65",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/172/140",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/172",
          localPdf: null
        },
        {
          id: "176",
          title: "Proof Without Words: Fermat-Torricelli Theorem",
          authors: ["Jay M Jahangiri", "Moshe Stupel"],
          pages: "66–68",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/176/141",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/176",
          localPdf: null
        },
        {
          id: "161",
          title: "Achievement of Dual Language Learners in the Study of Nets",
          authors: ["Ziham Zawawi Mazlan", "Chew Cheng Meng", "Muhammad Faizul bin Abdul Hamid"],
          pages: "69–93",
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/161/142",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/161",
          localPdf: null
        }
      ]
    },
    {
      id: "v7n1",
      volume: 7, number: 1, year: 2018,
      published: "2018-03-15",
      title: "North American GeoGebra Journal",
      subtitle: null,
      legacyId: 10,
      articles: [
        {
          id: "126",
          title: "Transformations and Complex Numbers",
          authors: ["Roberto C Soto", "Armando M. Martinez-Cruz"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/126/119",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/126",
          localPdf: null
        },
        {
          id: "125",
          title: "Teaching Statistics with GeoGebra",
          authors: ["Tuyetdong Phan-Yamada", "Sui Wing Man"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/125/118",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/125",
          localPdf: null
        },
        {
          id: "145",
          title: "GeoGebra Simulations of the Monty Hall Game Show",
          authors: ["Gunhan Caglayan"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/145/130",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/145",
          localPdf: null
        },
        {
          id: "144",
          title: "Graph Theory in GeoGebra",
          authors: ["Trevor Kenneth Williams", "David E. Brown"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/144/134",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/144",
          localPdf: null
        },
        {
          id: "148",
          title: "Using Action-Consequence-Reflection GeoGebra Activities To Make Math Stick",
          authors: ["Karen D. Campe"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/148/131",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/148",
          localPdf: null
        },
        {
          id: "147",
          title: "Engaging Students with Linear Functions and GeoGebra: An Action Research Study",
          authors: ["Kristen L Soots", "Kathryn G Shafer"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/147/133",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/147",
          localPdf: null
        },
        {
          id: "149",
          title: "Capabilities and Contributions of the Dynamic Math Software, GeoGebra: A Review",
          authors: ["Yismaw Abera Wassie", "Gurju Awgichew Zergaw"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/149/132",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/149",
          localPdf: null
        }
      ]
    },
    {
      id: "v6n1",
      volume: 6, number: 1, year: 2017,
      published: "2017-02-03",
      title: "North American GeoGebra Journal",
      subtitle: "Fostering the pursuit of mathematical understanding through creative investigation.",
      legacyId: 8,
      articles: [
        {
          id: "89",
          title: "Hinged Tilings",
          authors: ["Alfinio Flores"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/89/99",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/89",
          localPdf: null
        },
        {
          id: "108",
          title: "Exploration of the Sierpinski Triangle with GeoGebra",
          authors: ["Jenna Odom", "Taylor Wood"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/108/113",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/108",
          localPdf: null
        },
        {
          id: "92",
          title: "Function Fitting to Develop Class Projects: Alcohol Awareness Models in College Algebra",
          authors: ["Thomas Edmond Cooper"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/92/114",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/92",
          localPdf: null
        },
        {
          id: "124",
          title: "Exploring Euclidean and Taxicab Geometry with GeoGebra",
          authors: ["Erhan Selcuk Haciomeroglu", "Janet B Andreasen"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/124/115",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/124",
          localPdf: null
        },
        {
          id: "137",
          title: "Models in Demography",
          authors: ["Christoph Ableitinger"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/137/116",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/137",
          localPdf: null
        }
      ]
    },
    {
      id: "v5n2",
      volume: 5, number: 2, year: 2016,
      published: "2016-10-20",
      title: "Proceedings of the Fourth Annual Southern Connecticut GeoGebra Conference",
      subtitle: "Proceedings of the Fourth Annual Southern Connecticut GeoGebra Conference",
      legacyId: 9,
      isProceedings: true,
      fullIssuePdf: "https://mathed.miamioh.edu/index.php/ggbj/issue/view/9/6",
      articles: [
        {
          id: "105",
          title: "GeoGebra Tools for the Poincaré Disk",
          authors: ["Joseph Manthey", "Kim Ward", "Ekaterina Lioutikova", "Hong Zhou"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/105/101",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/105",
          localPdf: null
        },
        {
          id: "106",
          title: "Visualizing Functions of Complex Numbers Using GeoGebra",
          authors: ["Albert Navetta"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/106/102",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/106",
          localPdf: null
        },
        {
          id: "104",
          title: "A Geometric Interpretation of Complex Zeros of Quadratic Functions",
          authors: ["Joseph Pastore", "Alan Sultan"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/104/103",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/104",
          localPdf: null
        },
        {
          id: "103",
          title: "Using the Tail of a Sequence to Explore Its Limit",
          authors: ["James Quinlan"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/103/104",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/103",
          localPdf: null
        },
        {
          id: "102",
          title: "\"Messing Around\" in GeoGebra: Online Inquiry Through Apps and Games",
          authors: ["Forest Fisher"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/102/105",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/102",
          localPdf: null
        },
        {
          id: "107",
          title: "Surviving On Mars With GeoGebra",
          authors: ["Lindsey States", "Jenna Odom"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/107/106",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/107",
          localPdf: null
        }
      ]
    },
    {
      id: "v5n1",
      volume: 5, number: 1, year: 2016,
      published: "2016-01-15",
      title: "North American GeoGebra Journal",
      subtitle: "Fostering the pursuit of mathematical understanding through creative investigation.",
      legacyId: 7,
      articles: [
        {
          id: "67",
          title: "Geometric Translations: An Interactive Approach Based on Students' Concept Images",
          authors: ["Alfinio Flores", "H. Bahadir Yanik"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/67/81",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/67",
          localPdf: null
        },
        {
          id: "73",
          title: "Euclid, the Game! for Virtual Mathematics Teams",
          authors: ["Joanne Caniglia"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/73/100",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/73",
          localPdf: null
        },
        {
          id: "86",
          title: "Hidden Properties of the Equilateral Triangle",
          authors: ["Moshe Stupel", "Ruth Segal", "Alfinio Flores"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/86/97",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/86",
          localPdf: null
        },
        {
          id: "75",
          title: "Intersection of Polyhedrons and a Plane with GeoGebra",
          authors: ["Bistra Tsareva", "Boyan Zlatanov"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/75/89",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/75",
          localPdf: null
        },
        {
          id: "77",
          title: "Exploring Conservation of Momentum in Inelastic and Elastic Collisions and Explosions",
          authors: ["Kate Hruby", "James Vesenka"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/77/90",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/77",
          localPdf: null
        },
        {
          id: "87",
          title: "Modeling a Total Solar Eclipse Using GeoGebra",
          authors: ["Lingguo Bu", "Harvey Henson"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/87/98",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/87",
          localPdf: null
        }
      ]
    },
    {
      id: "v4n2",
      volume: 4, number: 2, year: 2016,
      published: "2016-02-15",
      title: "Proceedings of the Third Annual Southern Connecticut GeoGebra Conference",
      subtitle: "Proceedings of the Third Annual Southern Connecticut GeoGebra Conference",
      legacyId: 6,
      isProceedings: true,
      fullIssuePdf: "https://mathed.miamioh.edu/index.php/ggbj/issue/view/6/1",
      articles: [
        {
          id: "80",
          title: "Fostering Growth in Teacher Content Knowledge Through the Construction of Sketches for Students",
          authors: ["Michael Todd Edwards"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/80/66",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/80",
          localPdf: null
        },
        {
          id: "82",
          title: "Using GeoGebra to Present Kinetic Data and Ligand Binding Data to a Biochemistry Class",
          authors: ["George Dombi", "John Golden"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/82/67",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/82",
          localPdf: null
        },
        {
          id: "81",
          title: "Visualizing Solids of Revolution in GeoGebra",
          authors: ["Douglas Hoffman"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/81/68",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/81",
          localPdf: null
        },
        {
          id: "79",
          title: "An Informal Approach to Linear Least Squares",
          authors: ["James Quinlan"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/79/69",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/79",
          localPdf: null
        }
      ]
    },
    {
      id: "v4n1",
      volume: 4, number: 1, year: 2015,
      published: "2015-03-13",
      title: "North American GeoGebra Journal",
      subtitle: "Fostering the pursuit of mathematical understanding through creative investigation.",
      legacyId: 5,
      articles: [
        {
          id: "66",
          title: "Exploring Cyclic Quadrilaterals with Perpendicular Diagonals",
          authors: ["Alfinio Flores"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/66/53",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/66",
          localPdf: null
        },
        {
          id: "65",
          title: "Fostering Understanding of Monte Carlo Simulations for Estimating Using Dynamic GeoGebra Applets",
          authors: ["Tanja Van Hecke"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/65/54",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/65",
          localPdf: null
        },
        {
          id: "70",
          title: "Exploring Lake Erie Algae Growth in an Algebra Class Using GeoGebra",
          authors: ["Marie Nabbout-Cheiban"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/70/56",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/70",
          localPdf: null
        }
      ]
    },
    {
      id: "v3n1",
      volume: 3, number: 1, year: 2014,
      published: "2013-11-15",
      title: "North American GeoGebra Journal",
      subtitle: "Fostering the pursuit of mathematical understanding through creative investigation.",
      legacyId: 4,
      articles: [
        {
          id: "46",
          title: "Brownie Points",
          authors: ["Chris Bolognese"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/46/43",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/46",
          localPdf: null
        },
        {
          id: "48",
          title: "The Parabola as a Locus: Paving the Way to the CCSS",
          authors: ["Armando Moises Martinez-Cruz", "Jose Natividad Contreras"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/48/45",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/48",
          localPdf: null
        },
        {
          id: "63",
          title: "Artistic Symmetry: Finding Richness in Tattoo Design",
          authors: ["Lisa Foos"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/63/46",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/63",
          localPdf: null
        },
        {
          id: "60",
          title: "Systems of Inequalities: Using GeoGebra to Plan Your Party",
          authors: ["Karen Ann Noyes"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/60/48",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/60",
          localPdf: null
        },
        {
          id: "54",
          title: "Building Dynamic Fraction Bar Models with GeoGebra",
          authors: ["Thomas Edmond Cooper"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/54/50",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/54",
          localPdf: null
        },
        {
          id: "50",
          title: "The Parabola as the Locus of the Product of Two Lines: Building Functions from Functions",
          authors: ["Armando Moises Martinez-Cruz", "Jose Natividad Contreras"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/50/51",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/50",
          localPdf: null
        },
        {
          id: "58",
          title: "Where's the Firehouse?",
          authors: ["Ian Callon"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/58/52",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/58",
          localPdf: null
        }
      ]
    },
    {
      id: "v2n1",
      volume: 2, number: 1, year: 2013,
      published: "2013-01-07",
      title: "North American GeoGebra Journal",
      subtitle: "Fostering the pursuit of mathematical understanding through creative investigation.",
      legacyId: 2,
      articles: [
        {
          id: "18",
          title: "Evangelizing Beyond Early Adopters: Developing Materials to Train Teachers in the Use of GeoGebra",
          authors: ["Mike May"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/18/21",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/18",
          localPdf: null
        },
        {
          id: "25",
          title: "Investigating the Generalization of a Special Property of Cubic Polynomials to Higher Degree Polynomials",
          authors: ["David Miller"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/25/30",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/25",
          localPdf: null
        },
        {
          id: "37",
          title: "Study of Functions in a GeoGebra Environment During \"Learning Week\"",
          authors: ["Antonio Criscuolo", "Adriana Gnudi"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/37/38",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/37",
          localPdf: null
        },
        {
          id: "47",
          title: "GeoGebra as a Frontend to Generating Graphics for LaTeX",
          authors: ["James Quinlan"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/47/39",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/47",
          localPdf: null
        },
        {
          id: "23",
          title: "Volume and Area Ratios with GeoGebra",
          authors: ["Libuse Samkova"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/23/22",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/23",
          localPdf: null
        },
        {
          id: "42",
          title: "GeoGebra as a Tool to Explore, Conjecture, Verify, Justify, and Prove: The Case of a Circle",
          authors: ["Yip-Cheung Chan"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/42/28",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/42",
          localPdf: null
        },
        {
          id: "38",
          title: "Using GeoGebra to Develop Primary School Students' Understanding of Reflection",
          authors: ["Xenia Xistouri", "Demetra Pitta-Pantazi"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/38/33",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/38",
          localPdf: null
        },
        {
          id: "40",
          title: "GeoGebra in Financial Education",
          authors: ["Roman Hasek", "Vladimira Petraskova"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/40/36",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/40",
          localPdf: null
        }
      ]
    },
    {
      id: "v1n1",
      volume: 1, number: 1, year: 2012,
      published: "2012-05-01",
      title: "North American GeoGebra Journal",
      subtitle: "Fostering the pursuit of mathematical understanding through creative investigation.",
      legacyId: 1,
      articles: [
        {
          id: "4",
          title: "GeoGebra as a Motivational Tool for Teaching and Learning in Slovakia",
          authors: ["Jan Guncaga", "Janka Majherova"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/4/19",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/4",
          localPdf: null
        },
        {
          id: "21",
          title: "GeoGebra with an Interactive Help System Generates Abductive Argumentation During Proving Process",
          authors: ["Danh Nam Nguyen"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/21/20",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/21",
          localPdf: null
        },
        {
          id: "6",
          title: "Computer as the Sole Drawing Tool and School Results in Geometry",
          authors: ["Jiri Vanicek", "Josef Lombart"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/6/13",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/6",
          localPdf: null
        },
        {
          id: "14",
          title: "GeoGebra Kit in Geometry at Secondary Stage",
          authors: ["Praveen Kumar Chaurasia"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/14/14",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/14",
          localPdf: null
        },
        {
          id: "12",
          title: "Numerical Analysis of a Planar Motion; GeoGebra as a Tool of Investigation",
          authors: ["Roman Hasek"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/12/15",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/12",
          localPdf: null
        },
        {
          id: "3",
          title: "A Laboratory Guide for Elementary Geometry Using GeoGebra",
          authors: ["Jack D. Gittinger"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/3/11",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/3",
          localPdf: null
        },
        {
          id: "16",
          title: "Birth of a Virtual Manipulative",
          authors: ["S. Asli Ozgun-Koca", "Michael Meagher"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/16/9",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/16",
          localPdf: null
        },
        {
          id: "15",
          title: "Dynamic Illustration of Some Fibonacci Identities",
          authors: ["Amitava Saraswati", "Bijendra Singh", "Suman Jain"],
          pages: null,
          pdfUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/15/18",
          abstractUrl: "https://mathed.miamioh.edu/index.php/ggbj/article/view/15",
          localPdf: null
        }
      ]
    }
  ]
};
