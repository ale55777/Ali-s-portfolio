
export default function Projects() {
  const projects = [
    {
      category: "React Web Apps",
      items: [
        {
          title: "E-Commerce App",
          desc: "A full-stack marketplace with product browsing, cart, and secure checkout.",
          link: "https://github.com/ale55777/E-Commerce-Web.git"
        },
        {
          title: "Weather_Live",
          desc: "Real-time weather forecast app with clean UI and dynamic icons.",
          link: "https://github.com/ale55777/WeatherApp.git"
        },
        {
          title: "Gemini Clone App",
          desc: "AI-powered chatbot application inspired by Google Gemini.",
          link: "https://github.com/ale55777/REACT-JS.git"
        },
        {
          title: "Garage.com Car Buy/Sell App",
          desc: "A platform for users to buy, sell, and manage car listings easily.",
          link: "https://github.com/ale55777/REACT-JS.git"
        },
        {
          title: "TikTak (TikTok Clone)",
          desc: "A short-video sharing platform with modern UI and interactive features.",
          link: "https://github.com/ale55777/REACT-JS.git"
        },
        {
          title: "TikTak (TikTok Clone)",
          desc: "A short-video sharing platform with modern UI and interactive features.",
          link: "https://github.com/ale55777/KFC-Clone.git"
        }
      ]
    },
    {
      category: "JavaScript & TypeScript",
      items: [
        {
          title: "ATM Machine",
          desc: "A console-based ATM system built with TypeScript.",
          link: "https://github.com/ale55777/NodeProjects"
        },
        {
          title: "Countdown Timer",
          desc: "A timer app that demonstrates async programming in JS.",
          link: "https://github.com/ale55777/NodeProjects"
        },
        {
          title: "Currency Converter",
          desc: "A CLI-based currency converter using live rates.",
          link: "https://github.com/ale55777/NodeProjects"
        },
        {
          title: "To-Do List",
          desc: "Manage daily tasks efficiently with local storage support.",
          link: "https://github.com/ale55777/NodeProjects"
        },
        {
          title: "Number Guess Game",
          desc: "Fun number guessing game built with TypeScript.",
          link: "https://github.com/ale55777/NodeProjects"
        },
        {
          title: "Counter Word",
          desc: "Counts words and characters in text input.",
          link: "https://github.com/ale55777/NodeProjects"
        }
      ]
    },
    {
      category: "C++",
      items: [
        {
          title: "Cricket Match Simulator",
          desc: "Simulates a live cricket match with score tracking and match outcomes.",
          link: "https://github.com/ale55777/C-Projects.git"
        },
        {
          title: "Grocery Store Management System",
          desc: "Handles billing, stock management, and customer transactions.",
          link: "https://github.com/ale55777/C-Projects.git"
        },
        {
          title: "Hospital Management System Project",
          desc: "Manages patient records, doctor schedules, and hospital operations.",
          link: "https://github.com/ale55777/C-Projects.git"
        },
        {
          title: "Helpline Management System",
          desc: "Organizes and tracks customer queries and helpline services.",
          link: "https://github.com/ale55777/C-Projects.git"
        },
        {
          title: "Scholarship Management System",
          desc: "Manages student scholarship applications and disbursements.",
          link: "https://github.com/ale55777/C-Projects.git"
        },
        {
          title: "Retail Supermarket Management",
          desc: "Provides sales, inventory, and billing management for supermarkets.",
          link: "https://github.com/ale55777/C-Projects.git"
        },
        {
          title: "Interactive Todo List",
          desc: "Lets users add, update, and manage daily tasks interactively.",
          link: "https://github.com/ale55777/C-Projects.git"
        },
        {
          title: "Graph Path Algorithms",
          desc: "Implements Prim’s, Dijkstra’s & Kruskal’s algorithms for graphs.",
          link: "https://github.com/ale55777/C-Projects.git"
        }
      ]
    },
    {
      category: "Flutter",
      items: [
        {
          title: "FitBuds",
          desc: "Cross-platform fitness app with Firebase backend.",
          link: "https://github.com/ale55777/Flutter/blob/main/FITS_BUDS.zip"
        },
        {
          title: "Weather App ",
          desc: "Get Updated with Weather.",
          link: "https://github.com/ale55777/Flutter"
        }
      ]
    },
    {
      category: "Python Algorithms",
      items: [
        {
      title: "Bubble Sort",
      desc: "Classic bubble sort algorithm implementation in Python.",
      link: "https://github.com/ale55777/My-Python.git"
    },
    {
      title: "Bucket Sort",
      desc: "Bucket sort implementation for sorting numbers in Python.",
      link: "https://github.com/ale55777/My-Python.git"
    },
    {
      title: "Counting Sort",
      desc: "Efficient counting sort algorithm in Python.",
      link: "https://github.com/ale55777/My-Python.git"
    },
    {
      title: "Heap Sort",
      desc: "Heap sort algorithm implemented in Python.",
      link: "https://github.com/ale55777/My-Python.git"
    },
    {
      title: "Insertion Sort",
      desc: "Insertion sort algorithm example in Python.",
      link: "https://github.com/ale55777/My-Python.git"
    },
    {
      title: "Merge Sort",
      desc: "Merge sort algorithm implemented in Python.",
      link: "https://github.com/ale55777/My-Python.git"
    },
    {
      title: "Quick Sort",
      desc: "Quick sort algorithm implementation in Python.",
      link: "https://github.com/ale55777/My-Python.git"
    },
    {
      title: "Radix Sort",
      desc: "Radix sort example in Python.",
      link: "https://github.com/ale55777/My-Python.git"
    },
    {
      title: "Selection Sort",
      desc: "Selection sort algorithm in Python.",
      link: "https://github.com/ale55777/My-Python.git"
    },
    {
      title: "Shell Sort",
      desc: "Shell sort implementation in Python.",
      link: "https://github.com/ale55777/My-Python.git"
    },
    {
      title: "Sorting Comparison",
      desc: "Compare performance of different sorting algorithms in Python.",
      link: "https://github.com/ale55777/My-Python.git"
    }
      ]
    }
  ]

  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">Projects</h2>
      <div className="proj-wrap">
        {projects.map((cat, i) => (
          <div key={i} className="proj-category">
            <h3 className="proj-cat-title">{cat.category}</h3>
            <div className="proj-grid">
              {cat.items.map((p, j) => (
                <div className="proj-card" key={j}>
                  <div className="proj-title">{p.title}</div>
                  <p>{p.desc}</p>
                  <a
                    className="github-btn"
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
