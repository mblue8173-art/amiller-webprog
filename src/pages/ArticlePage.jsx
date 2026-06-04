import React from 'react';
import { useParams, Link } from 'react-router-dom';
import articles from '../assets/article-content';

const ArticlePage = () => {
  const { articleId } = useParams();
  const article = articles.find((a) => a.name === articleId);

  // If article path name doesn't match your array data, render the structured 404 blocks
  if (!article) {
    return (
      <div className="article-page-container" style={{ padding: '20px', textAlign: 'center' }}>
        <div style={{ borderBottom: '2px solid #000', paddingBottom: '20px', marginBottom: '20px' }}>
          <Link to="/articles" style={{ textDecoration: 'none' }}>
            <button className="back-btn-style">BACK TO ARTICLES</button>
          </Link>
        </div>

        <div style={{ padding: '60px 0', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ fontSize: '20px', color: '#333', margin: 0 }}>Page not found</p>
        </div>

        <div style={{ borderTop: '2px solid #000', paddingTop: '20px', marginTop: '20px', borderBottom: '2px solid #000', paddingBottom: '20px' }}>
          <Link to="/articles" style={{ textDecoration: 'none' }}>
            <button className="back-btn-style">BACK TO ARTICLES</button>
          </Link>
        </div>
      </div>
    );
  }

  // If article exists, show its full content paragraphs normally
  return (
    <div className="article-page-container">
      <div style={{ borderBottom: '2px solid #000', paddingBottom: '20px', marginBottom: '20px' }}>
        <Link to="/articles">
          <button className="back-btn-style">BACK TO ARTICLES</button>
        </Link>
      </div>
      
      <span>ARTICLE</span>
      <h1>{article.title}</h1>
      <p className="description">{article.description}</p>
      
      <div style={{ borderTop: '2px solid #000', borderBottom: '2px solid #000', padding: '20px 0', margin: '20px 0' }}>
        {article.content.map((paragraph, index) => (
          <p key={index} className="content-paragraph" style={{ marginBottom: '15px' }}>{paragraph}</p>
        ))}
      </div>
      
      <div style={{ paddingTop: '20px', borderBottom: '2px solid #000', paddingBottom: '20px' }}>
        <Link to="/articles">
          <button className="back-btn-style">BACK TO ARTICLES</button>
        </Link>
      </div>
    </div>
  );
};

export default ArticlePage;