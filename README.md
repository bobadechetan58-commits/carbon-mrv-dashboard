# Carbon MRV Dashboard

A comprehensive, modern web-based dashboard for Carbon Measurement, Reporting, and Verification (MRV) systems. This dashboard provides real-time monitoring, analytics, and management tools for carbon emissions tracking and verification processes.

## 🌱 Features

### Core Functionality
- **Real-time Carbon Metrics**: Track total emissions, carbon credits, verification status, and active projects
- **Interactive Data Visualization**: Multiple chart types including line charts, doughnut charts, and bar charts
- **Project Management**: Comprehensive project tracking with status indicators and progress monitoring
- **Verification Workflow**: Queue management for verification processes with priority levels
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### Visual Elements
- **Modern UI/UX**: Clean, professional interface with sustainability-focused color scheme
- **Animated Components**: Smooth transitions, hover effects, and loading states
- **Interactive Charts**: Powered by Chart.js with real-time data updates
- **Status Indicators**: Color-coded badges for project status and verification priority
- **Progress Tracking**: Visual progress bars for verification completion

### Technical Features
- **Modular Architecture**: Well-organized HTML, CSS, and JavaScript structure
- **Chart Integration**: Multiple chart types with customizable data
- **Modal Systems**: Interactive forms for adding projects and date selection
- **Notification System**: Toast notifications for user feedback
- **Responsive Grid Layout**: CSS Grid and Flexbox for optimal layout

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs entirely in the browser

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. The dashboard will load with sample data and interactive features

### File Structure
```
carbon-mrv-dashboard/
├── index.html          # Main HTML structure
├── styles.css          # Comprehensive CSS styling
├── script.js           # Interactive JavaScript functionality
├── mcp.json           # Figma MCP configuration
└── README.md          # This documentation file
```

## 📊 Dashboard Components

### Header Section
- **Logo**: Animated sustainability-themed icon
- **Title**: "Carbon MRV Dashboard"
- **Date Range Selector**: Interactive date picker with predefined ranges
- **User Profile**: User avatar and name display

### Sidebar Navigation
- **Dashboard**: Overview, Analytics, Reports
- **Projects**: All Projects, Verified, Pending
- **Verification**: Audit Trail, Certificates, Verifiers
- **Settings**: Preferences, Profile, Security

### Main Content Areas

#### Metrics Cards
- **Total Carbon Emissions**: Current emissions with trend indicators
- **Carbon Credits**: Available credits with growth metrics
- **Verification Status**: Percentage of verified projects
- **Project Count**: Number of active projects

#### Charts Section
- **Emissions Over Time**: Line chart with time range controls (Monthly/Quarterly/Yearly)
- **Emission Sources**: Doughnut chart showing distribution by source type
- **Geographic Distribution**: Bar chart showing regional emissions

#### Data Tables
- **Recent Projects**: Comprehensive project listing with actions
- **Verification Queue**: Pending verifications with progress tracking

## 🎨 Design System

### Color Palette
- **Primary Green**: `#10b981` - Main brand color for sustainability theme
- **Secondary Green**: `#059669` - Accent color for highlights
- **Dark Green**: `#047857` - Deep green for emphasis
- **Neutral Grays**: Various shades for text and backgrounds
- **Status Colors**: Green (verified), Yellow (pending), Red (rejected/high priority)

### Typography
- **Font Family**: Inter (Google Fonts) - Modern, readable sans-serif
- **Font Weights**: 300, 400, 500, 600, 700
- **Hierarchy**: Clear typographic scale for headings and body text

### Spacing & Layout
- **Grid System**: CSS Grid for main layout structure
- **Responsive Breakpoints**: Mobile-first approach with tablet and desktop optimizations
- **Consistent Spacing**: 8px base unit system for margins and padding

## 🔧 Customization

### Adding New Metrics
1. Add HTML structure in the metrics section
2. Update CSS for styling
3. Add JavaScript chart initialization
4. Include data update functionality

### Modifying Charts
- Charts are created using Chart.js
- Modify data arrays in `script.js`
- Customize colors, labels, and interactions
- Add new chart types as needed

### Styling Customization
- Modify CSS custom properties for colors
- Update gradient combinations
- Adjust spacing and typography
- Add new animation effects

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 480px - Single column layout, simplified navigation
- **Tablet**: 480px - 768px - Adjusted grid columns, touch-friendly controls
- **Desktop**: > 768px - Full sidebar, multi-column layouts

### Mobile Features
- Collapsible sidebar navigation
- Touch-optimized buttons and controls
- Simplified chart interactions
- Responsive table scrolling

## 🔌 Integration

### Figma Integration
The dashboard includes MCP (Model Context Protocol) configuration for Figma integration:
- File key: `DmkLamudsIGRv8MwtgsKdv`
- Node ID: `0-1`
- API key configuration in `mcp.json`

### Data Sources
Currently uses sample data, but can be easily connected to:
- REST APIs for real-time data
- Database connections
- CSV file imports
- Real-time data streams

## 🚀 Future Enhancements

### Planned Features
- **Real-time Data Integration**: Connect to live carbon monitoring systems
- **Advanced Analytics**: Machine learning insights and predictions
- **Export Functionality**: PDF reports and data exports
- **User Authentication**: Multi-user support with role-based access
- **API Integration**: RESTful API for external system integration
- **Mobile App**: Native mobile application development

### Technical Improvements
- **Performance Optimization**: Lazy loading and code splitting
- **Accessibility**: WCAG compliance and screen reader support
- **Internationalization**: Multi-language support
- **Testing**: Unit and integration test coverage
- **Documentation**: API documentation and developer guides

## 🛠️ Development

### Technologies Used
- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern styling with Grid, Flexbox, and animations
- **JavaScript ES6+**: Modern JavaScript with Chart.js integration
- **Chart.js**: Data visualization library
- **Google Fonts**: Inter font family

### Browser Support
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests.

## 📞 Support

For support and questions, please refer to the documentation or create an issue in the project repository.

---

**Carbon MRV Dashboard** - Empowering sustainable carbon management through modern web technology.
