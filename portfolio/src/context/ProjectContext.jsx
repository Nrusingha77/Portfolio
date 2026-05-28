import React, { createContext, useContext } from 'react';

const ProjectContext = createContext();

export const projectData = {
    0: {
        id: 0,
        title: "REAL TIME HIDDEN PATTERN DETECTION IN TIME SERIES DATA USING HYBRID DEEP LEARNING",
        url: "/projectImg/real.png",
        git: "https://github.com/Nrusingha77/QLSP-Quad-Lock-Sniper-Protocol",
        description: `Project Overview

Microstructure Intelligence Engine (QLSP) is a research-grade low-latency quantitative machine learning system developed to reconstruct institutional market behavior and order-flow toxicity using freely available Level-2 market data. The project explores how modern deep learning architectures, market microstructure theory, and ultra-low-latency systems engineering can be combined to approximate institutional trading intelligence without depending entirely on expensive proprietary Level-3 datasets.

The core objective of the project was to design a scalable machine learning and systems-engineering pipeline capable of inferring hidden market activity such as liquidity absorption, spoofing behavior, aggressive order-flow pressure, iceberg order activity, and VPIN-like toxicity signals directly from public order book streams.

Unlike traditional academic ML projects focused only on prediction accuracy, QLSP was engineered as a full-stack quantitative infrastructure platform integrating data ingestion, tensor engineering, model distillation, real-time inference, distributed runtime communication, and live visualization into a single research ecosystem.

Problem Statement

Institutional quantitative trading systems rely heavily on Level-3 (Market By Order) datasets to study hidden liquidity dynamics and order-flow toxicity. However, historical Level-3 datasets are extremely expensive and inaccessible for independent developers, students, and small research teams.

The major challenge addressed by QLSP was:

How can institutional-grade order-flow intelligence be reconstructed from retail-accessible Level-2 data?
Can teacher–student knowledge distillation transfer hidden market microstructure behavior into a lightweight inference model?
Can this entire pipeline operate under strict low-latency constraints using a production-grade runtime architecture?

The project was designed as an experimental research platform attempting to bridge the gap between institutional quantitative infrastructure and open-source accessible tooling.

System Architecture

QLSP follows a split-brain architecture:

Python handles machine learning research, tensor generation, feature engineering, and knowledge distillation.
Rust powers the ultra-low-latency runtime inference engine.

This architecture was intentionally designed to separate flexible ML experimentation from deterministic runtime execution.

The runtime stack integrates:

Rust
Tokio asynchronous runtime
Polars DataFrames
ONNX Runtime
WebSocket streaming
memmap2
SPSC zero-copy shared memory over /dev/shm

The communication pipeline between Python and Rust uses lock-free Single Producer Single Consumer (SPSC) shared-memory buffers to eliminate unnecessary serialization and reduce memory-copy overhead during runtime inference.

The frontend visualization layer was built using React and TypeScript and designed to provide real-time monitoring of toxicity predictions, confidence scores, runtime latency, streaming tensor states, and inference activity through WebSocket-based communication.

Machine Learning Pipeline

The machine learning system is based on teacher–student knowledge distillation.

Teacher Model

The teacher model uses a Temporal Convolutional Network (TCN) trained on real and synthetic Level-3 market microstructure signals. The teacher learns hidden market behaviors including:

Order-flow imbalance
Liquidity absorption
Queue pressure
Trade aggressiveness
VPIN-like toxicity dynamics
Volatility bursts
Institutional execution patterns

Initially, the project relied on synthetic data generation and limited Databento access due to the high cost of historical Market By Order (MBO) datasets. Later, the architecture evolved into a fully automated Level-3 recording infrastructure using Coinbase WebSocket streams and continuous event capture pipelines.

Student Model

The student model combines:

DeepLOB
Temporal Fusion Transformer (TFT)

The student receives only Level-2 order book tensors and attempts to reconstruct the hidden institutional behavior learned by the teacher.

Strict tensor contracts were implemented:

Student Tensor: (B,T,42)
Teacher Tensor: (B,T,100)

The tensors contain engineered microstructure features such as:

Order-flow imbalance
Rolling buy/sell pressure
VPIN proxy signals
Liquidity imbalance
Volume clustering
Absorption metrics
Net market pressure

The system uses knowledge distillation through torchdistill to transfer latent market intelligence from teacher to student.

Real-Time Data Infrastructure

One of the most critical engineering challenges in the project was acquiring usable Level-3 market data without relying on expensive institutional vendors.

To solve this, the project implemented a continuous real-time recording infrastructure using:

Coinbase WebSocket
cryptofeed
Dockerized recorder services
Oracle Cloud Always Free VM
ArcticDB / Parquet time-series storage

The recorder continuously captures:

Add events
Cancel events
Modify events
Trade executions

The datasets are partitioned and stored in Parquet format for efficient downstream training and tensor generation.

This architecture enables continuous dataset accumulation and periodic retraining workflows without depending entirely on proprietary market data providers.

Runtime Inference Engine

The final runtime system was implemented entirely in Rust and optimized for near real-time inference.

The runtime pipeline includes:

Tensor construction
Polars-based preprocessing
ONNX Runtime inference
Shared-memory communication
WebSocket broadcasting

The engine achieved approximately 20–30 ms inference latency while maintaining validated PyTorch–ONNX numerical consistency of 6.85e-7.

Several low-latency optimizations were implemented:

Memory pre-allocation
Vectorized tensor processing
Schema validation
Zero-copy shared-memory transfer
Runtime contract enforcement

The runtime architecture was designed to support future integration into real-time trading and monitoring systems.

Engineering Challenges and Risk Mitigation

The project involved multiple high-risk engineering and research challenges.

Tensor Contract Mismatch

One major risk involved silent tensor shape corruption between training and runtime systems. This was mitigated using strict schema validation, tensor contract enforcement, and runtime shape verification.

Normalization Leakage

Another major issue involved normalization leakage between training and inference pipelines. This was mitigated by serializing train-time normalization statistics and enforcing deterministic preprocessing across all runtime environments.

Synthetic Data Anti-Correlation

The project discovered anti-correlation behavior in synthetic datasets during early training experiments. Instead of hiding the issue, the behavior was mathematically documented and analyzed as a data-quality limitation rather than a coding failure.

Real-Time Infrastructure Stability

Continuous market recording pipelines introduced risks including stale WebSocket streams, partial writes, and runtime instability. The system mitigated these risks through:

Batch-buffered writes
Scheduled flush services
Docker auto-restart policies
Runtime validation checks
Failure recovery logic
Limitations

QLSP remains a research-focused system and several limitations were identified during development.

True historical institutional-grade Level-3 datasets remain expensive and difficult to acquire.
Market microstructure patterns are highly regime-dependent and continuously evolving.
Synthetic supervision cannot perfectly replicate institutional execution behavior.
Runtime latency remains constrained by public API and network limitations.
The system is designed primarily for research and experimentation rather than live financial execution.

These limitations were documented intentionally to maintain research transparency and realistic system evaluation.

Research Focus and Final Outcome

QLSP evolved from a simple experimental ML notebook into a complete quantitative research platform combining:

Machine learning
Quantitative finance
Market microstructure theory
Real-time distributed systems
Low-latency infrastructure engineering

The project demonstrates how institutional-style market intelligence systems can be approximated using open-source tooling, scalable architectures, and modern ML techniques under real-world infrastructure and financial constraints.

Beyond prediction accuracy, the project emphasized system reliability, engineering discipline, modular architecture, and scalable runtime design, making it both a machine learning research project and a complete systems-engineering case study.`,
        technologies: [   "Rust",
    "Python",
    "PyTorch",
    "ONNX Runtime",
    "ONNX",
    "DeepLOB",
    "Temporal Fusion Transformer (TFT)",
    "Temporal Convolutional Network (TCN)",
    "torchdistill",
    "Polars",
    "Tokio",
    "memmap2",
    "SPSC Shared Memory",
    "/dev/shm",
    "React",
    "TypeScript",
    "WebSocket",
    "Docker",
    "Oracle Cloud",
    "ArcticDB",
    "Parquet",
    "cryptofeed",
    "Coinbase WebSocket API",
    "KuCoin API",
    "Pandas",
    "NumPy",
    "PyArrow",
    "Git",
    "GitHub",
    "Linux",
    "REST API",
    "Knowledge Distillation",
    "Market Microstructure",
    "VPIN",
    "Time-Series Machine Learning",
    "Low-Latency Systems",
    "Quantitative Finance",
    "Tensor Engineering",
    "Async Runtime",
    "Real-Time Streaming",
    "Zero-Copy Memory Architecture"]
    },
    1: {
        id: 1,
        title: "E-COMMERCE UI",
        url: "/projectImg/eshop.png",
        git: "https://github.com/Nrusingha77/E-commerce",
        description: `Overview: I developed a modern, responsive e-commerce application aimed at providing a smooth shopping experience. Built with a strong React.js frontend, this project shows my skill in component-based design, handling asynchronous data, and improving performance. The codebase is structured for growth, featuring a clean directory layout (src/context, src/pages, src/components) that follows industry standards.

Dynamic Data Integration: I implemented asynchronous data fetching with RESTful APIs to update product catalogs in real-time. This ensures users always see the latest inventory.

Performance Optimization (Lazy Loading): I integrated React Lazy Loading and Suspense to divide code chunks and load components and images when needed. This significantly reduces the initial bundle size and enhances Core Web Vitals.

Responsive UI Architecture: I used Tailwind CSS to create a mobile-first, fluid grid system that adjusts perfectly to any screen size, from mobile devices to large desktops.

State Management: I applied React Hooks (useState, useEffect) and the Context API to handle complex application states, including data fetching cycles, shopping cart features, and global themes.

Error & Loading Handling: I designed clear user feedback systems, such as loading spinners and friendly error messages, to keep the user experience smooth even during network delays or API issues.`,
        technologies: ["React", "Tailwind CSS", "JavaScript", " Dummy Live API", "Axios", "React Router", "React Hooks", "Context API", "Git"]
    },
    2: {
        id: 2,
        title: "Full-Stack Crypto Trading Platform",
        url: "/projectImg/tra.png",
        git: "https://github.com/Nrusingha77/Trading",
        description: `Project Description: The BharatCrypto project is an end-to-end trading platform for cryptocurrencies that aims to provide a safe and real-time trading experience for all financial trading activities. The project is created using MVC architecture to link more complex blockchain information to user-friendly trading platforms for finances. This project proves my competency to develop high-scale safe and fast-performing projects using standard global languages such as Java Spring Boot and React.js.

Technical Architecture & Engineering Highlights:
Backend Architecture (Spring Boot 3.0):
Real-Time Data Aggregation in the Marketplace: The backend is designed as an encrypted proxy layer that retrieves real-time market data (price, market capitalization, volumes) from third-party APIs (e.g., CoinCap API) and processes it by transforming unencrypted third-party JSON to strongly-typed Java objects (class Coin, class StockDetails) in order to be delivered to the client.
Flexible Exception Handling: Designed a dynamic global exception handling system utilizing the "@ControllerAdvice" annotation. This ensures that any runtime exception (for example, "UserNotFound", "InsufficientFunds") is handled and translated into a standardised format so that stack traces are not exposed to clients.
Security First: This application incorporates the Spring Security library along with JWT (JSON Web Tokens) for stateless authentication purposes. It includes custom filters that check the token on each call and enforces RBAC (Role Based Access Control) that distinguishes clearly between the roles of a trader and an admin.
     
Frontend Architecture (React 18 and Redux):
Optimized State Management: Implemented Redux Toolkit for more efficient management of complex states such as User Auth, Wallet Balance, Watchlist. This reduces the need for prop-drilling and enables prices to be reflected in the UI instantly without causing unnecessary re-renders.
Advanced Network Handling: Configured a custom Axios service with interceptors.
Request Interceptor: It automatically adds the JWT Bearer token to headers for making secure APIs.
Response Interceptor: Handles errors like 401 Unauthorized for auto-logout functionality or showing toast notifications, as well as managing global loading states for rendering skeleton loaders when no data is present.

Responsive UI/UX:
     
     It has been designed with Tailwind CSS and Shadcn UI to give a fully responsive and accessible trading interface.

Important Features & Services: Secure Authentication & Authorization:
JWT Login/Signup System Securing Stateless Sessions.

Two-Factor Authentication (2FA): Introduced an additional level of security for user accounts, as well as other important transactions.
Admin & User Portals: Separate dashboards for normal traders and administrative users of the platform.
 Real-Time Trading Engine:

Live Market Dashboard
     • Provides interactive graphs and tables that offer real-time views of the performance of each coin.
Advanced Search Functions - An optimized searching feature that enables users to easily view their desired assets.
“Watchlist Management: Users are able to maintain a personalised watchlist to track their favourite cryptocurrencies.”

Wallet & Portfolio Management:
Digital Wallet System: Full implementation of a digital money wallet, either fiat or crypto, with balance management and money transfer functionalities. Portfolio Analytics An exclusive page (Portfolio) will showcase the distribution of the total assets, the current value versus the invested value, and profit/loss. Transaction History: Detailed record of all transactions (Activity, Order) that give users full transparency.  Financial Operations & Governance: Withdrawal Workflow:
It is an approval workflow for withdrawal requests by users, for which admins use the WithdrawalAdmin panel for approval. Payment Integration: Architecture also enables Razorpay payment gateway integration for smooth wallet refill transactions.                             Interactive Support:
      - Integrated Chat functionality for support assistance and AI assistance using the Gemini API for response generation and the CoinCap API for real-time data.`,
        technologies: ["java", "javaScript", "React","Tailwind CSS","spring", "Spring Boot","Spring security", "Spring MVC", "MySQL", "Git", "RESTful APIs", "Postman", "Maven", "Gemini API", "CoinCap API"]
    },
    3: {
        id: 3,
        title: "PII Sentinel - PII Detection and Processing System",
        url: "/projectImg/pii.png",
        git: "https://github.com/Nrusingha77/PII-Detector",
        description: `Project Description : PII Sentinel is an advanced, end-to-end application developed to detect, categorize, and mask Personally Identifiable Information (PII) present in unstructured text streams using sophisticated techniques beyond traditional pattern search. Building upon Natural Language Processing (NLP) capabilities using vector embeddings allows the project to maintain high accuracy levels while processing PII-related entities. The project showcases an example of a hybrid microservices architecture combining a high-throughput application stack on Python for inference with a Node.js API gateway and React frontend.

High Performance Inference Engine (fastapi-app):

Architected a specialized microservice using fastapi-app for CPU-intensive ML operations.
Incorporated the custom-trained Word2Vec models in performing the vectorization and similarity evaluation with the capability to apply context-aware identification of PII rather than keyword recognition.

Data Engineering & Training Pipeline (train, data, processed_files):
Created an automated ETL process to process raw input data and normalize it to the processed_files format necessary for machine learning algorithms.

Worked on the design of train scripts that employ Gensim for dense vector representations with the addition of data augmentation techniques for robustness.
Secure API Gateway (express-api, routes, validation):

Added a Node.js/Express Gateway (Express-API) to enable decoupling of the client and ML Engine.
Meant RESTful paths to handle traffic patterns, ensured rigorous validation of requests using middleware until valid data could be processed.

Modern Frontend Architecture (pii-frontend, src, pages, public):

Built a responsive client-side application with the pii-frontend project built utilizing React programming with proper src organization.
Employed a modular approach with separate pages for navigation and served statically optimized files through the public directory.

Component-Driven UI Design (components, ui): Built a modular design system with components and ui-elements that promote easier development with consistency in the application. Advanced State Management (hooks, lib) Custom React hooks have been engineered in order to abstract complicated asynchronous logic. To ensure high quality and DRY (Don’t Repeat Yourself) compliance codes, lib provides centralized utility functions and helper methods. 
Persistence & Storage (db): Added a Mongodb layer to take care of data persistence so that application logs/user configurations/audit trails could be stored safely.`,
        technologies: ["JavaScript", "Python", "React", "Tailwind CSS","Node.js","Express.js", "MongoDB","FastAPI", "Tensorflow", "Keras", "NLP", "SpaCy", "word2vec"]
    },
     4: {
        id: 4,
        title: "Full-Stack Bank Management System",
        url: "/projectImg/bms.png",
        git: "https://github.com/Nrusingha77/Bank_Management_fullstack",
        description: `Project Description : Successfully designed and developed a full-fledged Bank Management System built with the goal of modelling a practical online banking system scenario. The project not only exhibits expertise in designing a well-architected software system with secure data transfer and relevant UI design considerations but fills the gap between handling complex back-end operations and a responsive front-end interface with separate customer and administrative interfaces.

Key Features & Functionality

Secure Authentication & Authorization:
Designed a Registration & Login system with Protected Routes to prevent non-authorized users to access the critical finance related information.
Role-based access control distinguishes between the Admin dashboard and Client interface.
Core Banking Operations:
Dashboard: A dynamic user interface with real-time information about account balances and activities on the account.
Transaction Management: Complete user functionality to send funds transfer and display fund transaction history.
Beneficiary Management: Users can add and manage their beneficiaries for smooth transfer processes.
User Experience (UX) Interface:
LandingPage & AboutUs: These are professional public pages that introduce the banking services.
Profile & Avatar: Personalized user profiles for managing customer information with the facility to upload personal avatars.
ContactUs: The one-stop support solution for user queries.
Admin panel exclusively for monitoring operations of the system and dealing with system-wide requests.

Technical Architecture & Code Quality
Layers Architecture:
It follows industry-standard design patterns for the backend and breaks down concerns into Controllers (API), Service and ServiceImpl (Logic), and Repository (Data).
Models have strict definition so as to make data consistent throughout the application.
Database & Data Integrity:
Applied complex SQL Queries and organized database schema design (represented through erdiagram) for efficient use of relational data.
Utility and Helper classes were developed to handle routine operations and avoid code repetition.
State Management & Frontend Logic:
Leveraged Context API to optimize global state management in the client application.
Modular component architecture (in src/, images/, and so forth) promotes scalability and maintainability.
Handling Errors Efficaciously
Implemented a comprehensive exceptions management system for catching exceptions at runtime.
User-friendly interfaces in ErrorPage enable a professional notice to be displayed if a process fails without making system weaknesses public. Configuration: Creation of centralized Configuration files to organize environment variables and application settings.`,
        technologies: ["java", "javaScript", "React","Tailwind CSS","spring", "Spring Boot", "Spring security", "Spring MVC", "MySQL", "Git", "RESTful APIs", "Postman", "Maven"]
    },
    5: {
        id: 5,
        title: "Fake News Detection System using Ensemble Machine Learning",
        url: "/projectImg/fake.png",
        git: "https://github.com/Nrusingha77/Fake-News-Detection-System-using-Ensemble-Machine-Learning",
        description: `Project Overview : In a world where fake news spreads like wildfire through digital media platforms, being able to identify true news from fake is of paramount importance. I have constructed a panoptic Fake News Detection System using Natural Language Processing and a variety of machine learning classifiers, ensuring that news articles are identified with utmost accuracy. This particular project highlights a data-based solution for this problem of fake news.

Technical Architecture The solution is developed using a Python programming language and leverages the Scikit-Learn library for model implementation. The solution starts with robust preprocessing of the data employing the Pandas and Regex libraries for the removal of noise like URLs, special characters, and punctuation present within the unstructured text. I designed the solution employing TF-IDF Vectorization so that the models could understand the context and importance of words.

For ensuring robustness as well as accuracy, I have used and compared the results received from four different algorithms for classification: Logistic Regression, Decision Tree Classification, Gradient Boosting Classification, and Random Forest Classification. This will enable me to analyze results from different algorithms and ensure that the most appropriate logic is used during final deployment.

Important Points & Implementation Details :

Overall Data Preprocessing Algorithm: Developed an algorithm for automatic pre-processing of the text data by converting it to lowercase and removing all occurrences of HTML tags, URLs, punctuation, and Stop Words.
Advanced Feature Extraction: Employed TfidfVectorizer to transform the raw text in the news corpus to a matrix with TF-IDF features, reflecting the importance of each word in the overall context.
Multi-Model Classification Engine: Trained and tested four robust machine learning algorithms together to find out which one performed better and obtained a high accuracy rate in algorithms like Logistic Regression, Decision Tree, Gradient Boosting, and Random Forest.
Performance Analysis, Generation of precision, recall, and F1-score from detailed classification report to validate model performance and reliability from a scientific perspective.
Manual Testing Interface Design: I designed a manual testing interface for users where they could enter the raw news data and get instant predictions of validity from all four models at once, thereby implementing the usage of the trained models. Dataset Management: Managed large datasets (True.csv and Fake.csv) successfully by coping with class labeling and data arrangement to avoid bias during training.`,
        technologies: ["Python","pandas","numpy","matplotlib","seaborn","scikit-learn","Decision Trees","Random Forest","Logistic Regression","Gradient Boosting","NLP", "Data Visualization", "Git"]
    }
};

export const ProjectProvider = ({ children }) => {
    return (
        <ProjectContext.Provider value={projectData}>
            {children}
        </ProjectContext.Provider>
    );
};

export const useProjectData = () => useContext(ProjectContext);