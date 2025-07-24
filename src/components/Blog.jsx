import React from "react";
import "../styles/Blog.css"; // Optional: your own styles
import Footer from "./Footer";
import Header from "./Header";

const blogPosts = [
  {
    title: "SEO Services",
    content:
      "We provide digital marketing services. SEO (Search Engine Optimization) is a technique used to get unpaid traffic from search engines.",
    tags: ["Digital Marketing"],
  },
  {
    title: "Software In Business",
    content:
      "IT is a powerful tool for increasing productivity. It integrates operations, improves marketing, and enhances management.",
    tags: ["Software", "Business", "Java"],
  },
  {
    title: "Website in Business",
    content:
      "In today’s world, a website is critical. It helps customers find and trust your business online.",
    tags: ["Web Development", "React JS"],
  },
  {
    title: "Use of Technology in Small Business",
    content:
      "Small businesses can benefit from websites and social media. It builds relationships and customer trust.",
    tags: ["Small Business", "Digital Marketing"],
  },
  {
    title: "Benefits of Automation",
    content:
      "Automation improves visibility and accountability. It helps you grow and scale efficiently.",
    tags: ["Software", "Testing", "Automation"],
  },
  {
    title: "Ethical Hacking",
    content:
      "Ethical hackers legally test security systems to identify and fix vulnerabilities.",
    tags: ["Cybersecurity"],
  },
  {
    title: "5 Ways to Improve Cyber Security",
    content:
      "Keeping systems up-to-date and using built-in security features reduces risks.",
    tags: ["Cybersecurity", "Ethical Hacking"],
  },
  {
    title: "Future of Digital Marketing",
    content:
      "The 4th digital marketing wave is coming. Be ready for tech disruption and innovation.",
    tags: ["Digital Marketing", "Data Analyst"],
  },
  {
    title: "Python in Data Science",
    content:
      "Python is widely used in Data Science for analysis, machine learning, and automation.",
    tags: ["Python", "Data Science"],
  },
  {
    title: "React JS for Modern Web",
    content:
      "React JS simplifies frontend development with reusable components and state management.",
    tags: ["React JS", "Web Development"],
  }
];

const Blog = () => {
  return (
    <>
    <Header />
    <div className="container py-5">
      <h2 className="text-center mb-4 blog-page"></h2>
      <div className="typewriter-container">
  <h2 className="typewriter">BLOG</h2>
</div>

      <div className="row g-4">
        {blogPosts.map((post, idx) => (
          <div className="col-md-6 col-lg-4" key={idx}>
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{post.title}</h5>
                <div className="mb-2">
                  {post.tags.map((tag, tagIdx) => (
                    <span className="badge bg-secondary me-1" key={tagIdx}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="card-text">{post.content}</p>
                <a href="#" className="btn btn-primary mt-auto">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Blog;
