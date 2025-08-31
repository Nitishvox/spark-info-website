# Apache Spark Informational Website

A Flask-based web application that serves as an informational website about Apache Spark, the unified analytics engine for large-scale data processing. The application presents content about Spark's features, architecture, and use cases through a modern, responsive web interface with animations and interactive elements.

## Features

- **Single Page Application (SPA)**: Uses a single HTML template with section-based navigation for a seamless user experience.
- **Responsive Design**: Built with Bootstrap 5 for a mobile-first, responsive layout.
- **Animations**: Utilizes AOS (Animate On Scroll) library for scroll-triggered animations and transitions.
- **Modern UI/UX**: Custom CSS with variables, gradients, and glassmorphism effects for a contemporary look.
- **Interactive Navigation**: Fixed navbar with scroll effects and smooth scrolling between sections.
- **Educational Content**: Organized sections (Home, About, Core, Components, Use Cases) presenting Apache Spark concepts in an accessible format.

## System Architecture

### Frontend Architecture
- **Framework**: Bootstrap 5 for responsive design and UI components.
- **Typography**: Google Fonts (Inter and JetBrains Mono) for consistent, modern typography.
- **Icons**: Font Awesome 6 for visual elements and navigation.
- **Animations**: AOS library for scroll-triggered effects.
- **Styling**: Custom CSS with variables, gradients, and glassmorphism for a modern aesthetic.
- **Interactivity**: JavaScript for DOM interactions, scroll effects, and smooth scrolling.

### Backend Architecture
- **Framework**: Flask, a lightweight Python web framework for simplicity and rapid development.
- **Routing**: Minimal server logic with a single endpoint serving static content.
- **Configuration**: Environment variables for session secrets with fallback defaults.
- **Development**: Configured for debug mode with hot reloading during development.

### Static Asset Management
- **CSS**: Custom stylesheet with CSS variables for consistent theming and easy maintenance.
- **JavaScript**: Modular script file handling DOM interactions, scroll effects, and animations.
- **CDN Dependencies**: External libraries (Bootstrap, Font Awesome, Google Fonts, AOS) loaded via CDN for performance.
- **Image Assets**: Structure prepared for Spark logo and other visual elements.

## Content Strategy
- **Reference**: Content based on comprehensive Apache Spark documentation.
- **Layout**: Organized into sections (Home, About, Core, Components, Use Cases) for logical information flow.
- **Focus**: Presents technical concepts in an accessible, visually appealing format.

## External Dependencies

### Frontend Libraries
- **Bootstrap 5**: CSS framework for responsive design and UI components.
- **Font Awesome 6**: Icon library for visual elements and navigation.
- **Google Fonts**: Inter and JetBrains Mono fonts for typography.
- **AOS Library**: Animate On Scroll for scroll-triggered animations.

### Backend Framework
- **Flask**: Python web framework for serving the application.
- **Python Standard Library**: OS module for environment variable management.

### Browser APIs
- **Scroll Events**: For navbar effects and parallax animations.
- **Smooth Scrolling**: Native browser API for navigation transitions.
- **CSS3 Features**: Advanced styling with gradients, backdrop filters, and transforms.

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**:
   Ensure Python 3.8+ is installed, then install Flask:
   ```bash
   pip install flask
   ```

3. **Set Environment Variables**:
   Configure environment variables (e.g., `FLASK_SECRET_KEY`) for session management. Example:
   ```bash
   export FLASK_SECRET_KEY="your-secret-key"
   ```

4. **Run the Application**:
   Start the Flask development server:
   ```bash
   python app.py
   ```
   The application will be available at `http://localhost:5000`.

## Development Tools
- **Debug Mode**: Flask development server with hot reloading for development.
- **Environment Variables**: Flexible configuration for deployment.

## Usage
- Navigate through sections (Home, About, Core, Components, Use Cases) using the fixed navbar.
- Explore Apache Spark's features, architecture, and use cases in an interactive, visually engaging format.
- Responsive design ensures compatibility across devices (desktop, tablet, mobile).

## License
This project is licensed under the MIT License.