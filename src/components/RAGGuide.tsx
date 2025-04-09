import React, { useState } from 'react';
import { ArrowDown, ChevronDown, ChevronUp, Copy, ExternalLink, Play } from 'lucide-react';

const RAGGuide = () => {
    const [activeSection, setActiveSection] = useState('overview');
    const [expandedSections, setExpandedSections] = useState({
      overview: true,
      prerequisites: false,
      steps: false,
      costs: false
    });
  
    const toggleSection = (section) => {
      setExpandedSections({
        ...expandedSections,
        [section]: !expandedSections[section]
      });
    };

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header with Video */}
      <header className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Building a RAG-Based Search System for Chat Histories</h1>
          <p className="text-xl opacity-90 mb-6">
            Search, retrieve, and generate insights from your ChatGPT and Claude conversations
          </p>
          
          {/* Video Embed Placeholder */}
          <div className="w-full aspect-video bg-black/20 rounded-lg flex items-center justify-center mb-6 border-2 border-white/20">
            <div className="text-center">
              <Play size={48} className="mx-auto mb-2" />
              <p className="text-lg">Your Tutorial Video Will Appear Here</p>
              <p className="text-sm opacity-70">(Replace with your embedded video)</p>
            </div>
          </div>
          
          {/* Quick Navigation */}
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#overview" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm font-medium">Overview</a>
            <a href="#prerequisites" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm font-medium">Prerequisites</a>
            <a href="#steps" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm font-medium">Implementation Steps</a>
            <a href="#visualization" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm font-medium">How It Works</a>
            <a href="#costs" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm font-medium">API Costs</a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-8 px-4">
        {/* Visual Explanation Section */}
        <section id="visualization" className="mb-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">How RAG Search Works</h2>
          <p className="mb-6">The search process involves these key steps:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-indigo-800">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Query Processing</h3>
              <p className="text-gray-700">User's query is vectorized using OpenAI's embedding model</p>
            </div>
            
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-indigo-800">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Vector Similarity</h3>
              <p className="text-gray-700">FAISS finds the most similar document vectors in your chat history</p>
            </div>
            
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-indigo-800">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Response Generation</h3>
              <p className="text-gray-700">Retrieved documents are used to generate a contextual response</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <ArrowDown size={32} className="text-indigo-300" />
          </div>
          
          <div className="mt-4 p-6 bg-slate-800 text-white rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold">Search Result</h3>
              <span className="bg-green-600 px-2 py-1 rounded text-xs">Top matches found</span>
            </div>
            <p className="mb-3 text-slate-300">Based on your conversations from March 2023, you discussed vector embeddings with ChatGPT several times, particularly focusing on their use in semantic search applications.</p>
            <div className="bg-slate-700 p-3 rounded text-sm">
              <p className="text-slate-300 mb-1"><strong>Source:</strong> Conversation from March 15, 2023</p>
              <p className="text-slate-400 text-xs">"Vector embeddings allow you to capture semantic meaning by representing text as multi-dimensional vectors, making it possible to find related content even when exact keywords don't match..."</p>
            </div>
          </div>
        </section>
      
        {/* Collapsible Content Sections */}
        <section id="sections" className="mb-12">
          {/* Overview Section */}
          <div id="overview" className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
            <button 
              className="w-full flex justify-between items-center p-4 text-left font-bold text-lg bg-indigo-100 hover:bg-indigo-200"
              onClick={() => toggleSection('overview')}
            >
              Overview
              {expandedSections.overview ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            
            {expandedSections.overview && (
              <div className="p-6">
                <p className="mb-4">
                  This guide walks you through building a Retrieval-Augmented Generation (RAG) based search system for querying and summarizing your past ChatGPT and Claude conversations. The system leverages vector embeddings, FAISS for efficient similarity search, and OpenAI's API to provide insights from past conversations.
                </p>
                <p>
                  The goal is to create a system that allows you to search through your AI chat history efficiently, retrieve relevant information, and generate summaries of your past interactions.
                </p>
              </div>
            )}
          </div>
          
          {/* Prerequisites Section */}
          <div id="prerequisites" className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
            <button 
              className="w-full flex justify-between items-center p-4 text-left font-bold text-lg bg-indigo-100 hover:bg-indigo-200"
              onClick={() => toggleSection('prerequisites')}
            >
              Prerequisites
              {expandedSections.prerequisites ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            
            {expandedSections.prerequisites && (
              <div className="p-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Python Knowledge:</strong> Basic understanding of Python programming</li>
                  <li><strong>Command Line Familiarity:</strong> Ability to run commands in a terminal</li>
                  <li><strong>API Access:</strong> An OpenAI API key</li>
                  <li><strong>Conversation Data:</strong> Exported conversation histories from ChatGPT and/or Claude</li>
                  <li>
                    <strong>System Requirements:</strong>
                    <ul className="list-circle pl-6 mt-2 space-y-1">
                      <li>At least 4GB of RAM</li>
                      <li>1GB of free disk space</li>
                      <li>Python 3.8 or newer</li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
          </div>
          
          {/* Implementation Steps Section */}
          <div id="steps" className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
            <button 
              className="w-full flex justify-between items-center p-4 text-left font-bold text-lg bg-indigo-100 hover:bg-indigo-200"
              onClick={() => toggleSection('steps')}
            >
              Implementation Steps
              {expandedSections.steps ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            
            {expandedSections.steps && (
              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Step 1: Prepare Your Environment</h3>
                    <div className="bg-slate-800 p-4 rounded-md text-white mb-3 relative group">
                      <button 
                        className="absolute top-2 right-2 p-1 bg-slate-700 rounded opacity-60 hover:opacity-100"
                        onClick={() => copyCode("python3 -m venv venv\nsource venv/bin/activate  # On Linux/Mac\nvenv\\Scripts\\activate  # On Windows")}
                      >
                        <Copy size={16} />
                      </button>
                      <pre className="overflow-x-auto">
                        <code>
                          # Create a virtual environment<br />
                          python3 -m venv venv<br /><br />
                          # Activate the environment<br />
                          # On Linux/Mac:<br />
                          source venv/bin/activate<br />
                          # On Windows:<br />
                          venv\Scripts\activate
                        </code>
                      </pre>
                    </div>
                    
                    <div className="bg-slate-800 p-4 rounded-md text-white mb-3 relative group">
                      <button 
                        className="absolute top-2 right-2 p-1 bg-slate-700 rounded opacity-60 hover:opacity-100"
                        onClick={() => copyCode("pip install openai flask faiss-cpu llama-index python-dotenv")}
                      >
                        <Copy size={16} />
                      </button>
                      <pre className="overflow-x-auto">
                        <code>
                          # Install required libraries<br />
                          pip install openai flask faiss-cpu llama-index python-dotenv
                        </code>
                      </pre>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-2">Step 2: Get Your Conversation Data</h3>
                    <ul className="list-decimal pl-6 space-y-2">
                      <li>
                        <strong>Export ChatGPT Conversations:</strong>
                        <ul className="list-disc pl-6 mt-1">
                          <li>Settings → Data Controls → Request export</li>
                          <li>Extract conversations.json from the ZIP file</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Export Claude Conversations:</strong>
                        <ul className="list-disc pl-6 mt-1">
                          <li>Export your conversation history</li>
                          <li>Save as claude_conversations.json</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-2">Step 3-6: Complete Implementation</h3>
                    <p className="mb-3">
                      The full implementation includes creating Python scripts for indexing and searching, 
                      building a web interface, and running the application. For the complete code and implementation details, 
                      check the expandable code sections in the full guide below or download the source code.
                    </p>
                    <div className="flex justify-center">
                      <a 
                        href="#full-code" 
                        className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                      >
                        View Full Implementation <ChevronDown className="ml-1" size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* API Costs Section */}
          <div id="costs" className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
            <button 
              className="w-full flex justify-between items-center p-4 text-left font-bold text-lg bg-indigo-100 hover:bg-indigo-200"
              onClick={() => toggleSection('costs')}
            >
              API Costs & Considerations
              {expandedSections.costs ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            
            {expandedSections.costs && (
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-bold text-lg mb-2">Embedding API Costs</h3>
                  <ul className="list-disc pl-6">
                    <li>OpenAI's text-embedding-ada-002 model: $0.0001 per 1,000 tokens</li>
                    <li>For 1,000 conversations with average 2,000 tokens each: ~$0.20</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2">Query Costs</h3>
                  <ul className="list-disc pl-6">
                    <li>Each query uses embeddings (~$0.0001 per query)</li>
                    <li>Answer generation with GPT-3.5-Turbo: ~$0.002 per 1,000 tokens</li>
                    <li>Estimated annual cost: Approximately $15 USD per year with moderate usage</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* GitHub Repo Link */}
        <section className="mb-12 bg-indigo-800 text-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Get the Complete Source Code</h2>
          <p className="mb-6">Clone or download the repository to implement this RAG search system yourself.</p>
          <a 
            href="#" 
            className="inline-flex items-center bg-white text-indigo-800 px-6 py-3 rounded-lg font-bold hover:bg-indigo-100 transition"
          >
            GitHub Repository <ExternalLink className="ml-2" size={18} />
          </a>
        </section>
        
        {/* Newsletter Signup */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">Stay Updated</h2>
          <p className="mb-6">Subscribe to receive updates on new AI search techniques and tools.</p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
              Subscribe
            </button>
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <footer className="bg-slate-800 text-white py-6 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2025 RAG Search Guide | Created with ❤️ for the AI community</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="text-slate-300 hover:text-white">GitHub</a>
            <a href="#" className="text-slate-300 hover:text-white">Twitter</a>
            <a href="#" className="text-slate-300 hover:text-white">YouTube</a>
            <a href="#" className="text-slate-300 hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RAGGuide;