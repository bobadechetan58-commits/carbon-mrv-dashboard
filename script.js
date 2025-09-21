// Carbon MRV Dashboard JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize dashboard navigation
    initializeDashboardNavigation();
    
    // Initialize all charts
    initializeCharts();
    
    // Initialize interactive features
    initializeInteractiveFeatures();
    
    // Initialize sidebar navigation
    initializeSidebar();
    
    // Initialize date picker
    initializeDatePicker();
    
    // Initialize table interactions
    initializeTableInteractions();
    
    // Initialize panel-specific features
    initializePanelFeatures();
});

// Dashboard Navigation
function initializeDashboardNavigation() {
    const navItems = document.querySelectorAll(".sidebar li");
    const panels = document.querySelectorAll(".panel");

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            // Remove active class
            navItems.forEach(i => i.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));

            // Add active to clicked
            item.classList.add("active");
            document.getElementById(item.dataset.panel + "-panel").classList.add("active");
            
            // Reinitialize charts for the active panel
            setTimeout(() => {
                initializePanelCharts(item.dataset.panel);
            }, 100);
        });
    });
}

// Chart initialization functions
function initializeCharts() {
    // Initialize all panel charts
    initializePanelCharts('monitoring');
}

function initializePanelCharts(panelName) {
    switch(panelName) {
        case 'monitoring':
            initializeMonitoringCharts();
            break;
        case 'reporting':
            initializeReportingCharts();
            break;
        case 'verification':
            initializeVerificationCharts();
            break;
        case 'credits':
            initializeCreditsCharts();
            break;
        case 'analytics':
            initializeAnalyticsCharts();
            break;
    }
}

function initializeMonitoringCharts() {
    // KPI Charts
    createMetricChart('carbonCapturedChart', [2800, 2850, 2820, 2900, 2847], '#2d6a4f');
    createMetricChart('energyConsumedChart', [1500, 1480, 1520, 1460, 1456], '#ff9800');
    createMetricChart('waterSavedChart', [15000, 15200, 15100, 15300, 15230], '#4caf93');
    createMetricChart('carbonRemainingChart', [8500, 8600, 8400, 8300, 8456], '#ff9800');
    
    // Main charts
    createCarbonTimeChart();
}

function initializeReportingCharts() {
    createMonthlyTrendsChart();
    createYearlyComparisonChart();
}

function initializeVerificationCharts() {
    // Verification charts would go here
}

function initializeCreditsCharts() {
    createCreditPriceChart();
    createCreditTrendsChart();
    createCreditSalesChart();
}

function initializeAnalyticsCharts() {
    createCarbonCapturedTimeChart();
    createEmissionReductionChart();
    createEnergyEfficiencyChart();
    createWaterEfficiencyChart();
    createCarbonEfficiencyChart();
    createRegionalComparisonChart();
    createProjectPerformanceChart();
    createEfficiencyTrendsChart();
}

function createMetricChart(canvasId, data, color) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                data: data,
                borderColor: color,
                backgroundColor: color + '20',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: { display: false },
                y: { display: false }
            },
            elements: {
                point: { radius: 0 }
            }
        }
    });
}

function createCarbonTimeChart() {
    const ctx = document.getElementById('carbonTimeChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
            datasets: [{
                label: 'Carbon Captured (kg CO₂)',
                data: [2800, 2850, 2900, 2950, 2900, 2850, 2847],
                borderColor: '#2d6a4f',
                backgroundColor: 'rgba(45, 106, 79, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointHoverRadius: 6,
                pointBackgroundColor: '#2d6a4f',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        font: {
                            size: 14,
                            weight: '500',
                            color: '#2d6a4f'
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { 
                        display: true,
                        color: 'rgba(100, 116, 139, 0.2)'
                    },
                    ticks: {
                        font: { size: 12 },
                        color: '#94a3b8'
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(100, 116, 139, 0.2)',
                        drawBorder: false
                    },
                    ticks: {
                        font: { size: 12 },
                        color: '#94a3b8',
                        callback: function(value) {
                            return value.toLocaleString();
                        }
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
}

function createMonthlyTrendsChart() {
    const ctx = document.getElementById('monthlyTrendsChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Emissions (tCO₂e)',
                data: [1200, 1350, 1180, 1420, 1300, 1247],
                backgroundColor: [
                    '#2d6a4f',
                    '#4caf93',
                    '#2d6a4f',
                    '#4caf93',
                    '#2d6a4f',
                    '#4caf93'
                ],
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#e2e8f0',
                        font: { size: 12 }
                    }
                }
            },
            scales: {
                x: {
                    grid: { 
                        display: true,
                        color: 'rgba(100, 116, 139, 0.2)'
                    },
                    ticks: {
                        font: { size: 12 },
                        color: '#94a3b8'
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(100, 116, 139, 0.2)',
                        drawBorder: false
                    },
                    ticks: {
                        font: { size: 12 },
                        color: '#94a3b8'
                    }
                }
            }
        }
    });
}

function createYearlyComparisonChart() {
    const ctx = document.getElementById('yearlyComparisonChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['2022', '2023', '2024'],
            datasets: [{
                data: [15200, 16800, 1247],
                backgroundColor: [
                    '#10b981',
                    '#059669',
                    '#047857'
                ],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        padding: 15,
                        font: { size: 12 },
                        color: '#e2e8f0'
                    }
                }
            },
            cutout: '60%'
        }
    });
}

// Interactive features
function initializeInteractiveFeatures() {
    // Chart control buttons
    const chartBtns = document.querySelectorAll('.chart-btn');
    chartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            chartBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update chart based on selection
            const timeRange = this.textContent.toLowerCase();
            updateEmissionsChart(timeRange);
        });
    });
    
    // Metric card hover effects
    const metricCards = document.querySelectorAll('.metric-card');
    metricCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

function updateEmissionsChart(timeRange) {
    // This would typically fetch new data based on time range
    console.log(`Updating chart for ${timeRange} view`);
    
    // Simulate data update
    const chart = Chart.getChart('emissionsTimeChart');
    if (chart) {
        // Update chart data based on time range
        let newData, newLabels;
        
        switch(timeRange) {
            case 'monthly':
                newLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                newData = [1200, 1350, 1180, 1420, 1300, 1450, 1380, 1520, 1400, 1580, 1500, 1247];
                break;
            case 'quarterly':
                newLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
                newData = [3730, 4270, 4300, 4327];
                break;
            case 'yearly':
                newLabels = ['2022', '2023', '2024'];
                newData = [15200, 16800, 1247];
                break;
        }
        
        chart.data.labels = newLabels;
        chart.data.datasets[0].data = newData;
        chart.update();
    }
}

// Sidebar navigation
function initializeSidebar() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Handle navigation (in a real app, this would route to different views)
            const navText = this.querySelector('.nav-text').textContent;
            console.log(`Navigating to: ${navText}`);
        });
    });
}

// Date picker functionality
function initializeDatePicker() {
    const datePickerBtn = document.querySelector('.date-picker-btn');
    const dateLabel = document.querySelector('.date-label');
    
    if (datePickerBtn) {
        datePickerBtn.addEventListener('click', function() {
            // Create a simple date picker modal
            showDatePickerModal();
        });
    }
}

function showDatePickerModal() {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'date-picker-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Select Date Range</h3>
                <button class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <div class="date-options">
                    <button class="date-option" data-range="7">Last 7 days</button>
                    <button class="date-option" data-range="30">Last 30 days</button>
                    <button class="date-option" data-range="90">Last 90 days</button>
                    <button class="date-option" data-range="365">Last year</button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .date-picker-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }
        .modal-content {
            background: white;
            border-radius: 12px;
            padding: 1.5rem;
            min-width: 300px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
        .modal-header h3 {
            margin: 0;
            font-size: 1.125rem;
            font-weight: 600;
            color: #1e293b;
        }
        .close-btn {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #64748b;
        }
        .date-options {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        .date-option {
            padding: 0.75rem 1rem;
            border: 1px solid #e2e8f0;
            background: white;
            border-radius: 8px;
            cursor: pointer;
            font-size: 0.875rem;
            font-weight: 500;
            color: #374151;
            transition: all 0.2s;
        }
        .date-option:hover {
            background: #f1f5f9;
            border-color: #cbd5e1;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(modal);
    
    // Handle date option selection
    const dateOptions = modal.querySelectorAll('.date-option');
    dateOptions.forEach(option => {
        option.addEventListener('click', function() {
            const range = this.dataset.range;
            const rangeText = this.textContent;
            
            // Update date label
            document.querySelector('.date-label').textContent = rangeText;
            
            // Close modal
            document.body.removeChild(modal);
            document.head.removeChild(style);
            
            // Update dashboard data (simulate)
            updateDashboardData(range);
        });
    });
    
    // Handle close button
    modal.querySelector('.close-btn').addEventListener('click', function() {
        document.body.removeChild(modal);
        document.head.removeChild(style);
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.head.removeChild(style);
        }
    });
}

function updateDashboardData(range) {
    console.log(`Updating dashboard data for ${range} days`);
    
    // Simulate data refresh
    const metricCards = document.querySelectorAll('.metric-card');
    metricCards.forEach(card => {
        card.classList.add('loading');
        
        setTimeout(() => {
            card.classList.remove('loading');
        }, 1000);
    });
}

// Table interactions
function initializeTableInteractions() {
    // Add project functionality
    const addBtn = document.querySelector('.add-btn');
    if (addBtn) {
        addBtn.addEventListener('click', function() {
            showAddProjectModal();
        });
    }
    
    // Action buttons
    const actionBtns = document.querySelectorAll('.action-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.textContent;
            console.log(`Action clicked: ${action}`);
            
            // Handle different actions
            switch(action) {
                case '📊':
                    showProjectDetails();
                    break;
                case '✏️':
                    editProject();
                    break;
                case '🗑️':
                    deleteProject();
                    break;
                case '👁️':
                    viewVerification();
                    break;
                case '📝':
                    editVerification();
                    break;
            }
        });
    });
}

function showAddProjectModal() {
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Add New Project</h3>
                <button class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <form class="project-form">
                    <div class="form-group">
                        <label>Project Name</label>
                        <input type="text" placeholder="Enter project name" required>
                    </div>
                    <div class="form-group">
                        <label>Project Type</label>
                        <select required>
                            <option value="">Select type</option>
                            <option value="industrial">Industrial</option>
                            <option value="transport">Transport</option>
                            <option value="commercial">Commercial</option>
                            <option value="energy">Energy</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Estimated Emissions (tCO₂e)</label>
                        <input type="number" placeholder="Enter estimated emissions" required>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="cancel-btn">Cancel</button>
                        <button type="submit" class="submit-btn">Add Project</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .project-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }
        .modal-content {
            background: white;
            border-radius: 12px;
            padding: 1.5rem;
            min-width: 400px;
            max-width: 500px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }
        .modal-header h3 {
            margin: 0;
            font-size: 1.125rem;
            font-weight: 600;
            color: #1e293b;
        }
        .close-btn {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #64748b;
        }
        .form-group {
            margin-bottom: 1rem;
        }
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-size: 0.875rem;
            font-weight: 500;
            color: #374151;
        }
        .form-group input,
        .form-group select {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            font-size: 0.875rem;
            color: #374151;
        }
        .form-group input:focus,
        .form-group select:focus {
            outline: none;
            border-color: #10b981;
            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }
        .form-actions {
            display: flex;
            gap: 0.75rem;
            justify-content: flex-end;
            margin-top: 1.5rem;
        }
        .cancel-btn,
        .submit-btn {
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-size: 0.875rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
        }
        .cancel-btn {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            color: #64748b;
        }
        .cancel-btn:hover {
            background: #f1f5f9;
        }
        .submit-btn {
            background: linear-gradient(135deg, #10b981, #059669);
            border: none;
            color: white;
        }
        .submit-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(modal);
    
    // Handle form submission
    const form = modal.querySelector('.project-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const projectData = {
            name: form.querySelector('input[type="text"]').value,
            type: form.querySelector('select').value,
            emissions: form.querySelector('input[type="number"]').value
        };
        
        console.log('New project data:', projectData);
        
        // Close modal
        document.body.removeChild(modal);
        document.head.removeChild(style);
        
        // Show success message
        showNotification('Project added successfully!', 'success');
    });
    
    // Handle close button
    modal.querySelector('.close-btn').addEventListener('click', function() {
        document.body.removeChild(modal);
        document.head.removeChild(style);
    });
    
    // Handle cancel button
    modal.querySelector('.cancel-btn').addEventListener('click', function() {
        document.body.removeChild(modal);
        document.head.removeChild(style);
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.head.removeChild(style);
        }
    });
}

function showProjectDetails() {
    showNotification('Opening project details...', 'info');
}

function editProject() {
    showNotification('Opening project editor...', 'info');
}

function deleteProject() {
    if (confirm('Are you sure you want to delete this project?')) {
        showNotification('Project deleted successfully!', 'success');
    }
}

function viewVerification() {
    showNotification('Opening verification details...', 'info');
}

function editVerification() {
    showNotification('Opening verification editor...', 'info');
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add notification styles
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            color: white;
            font-size: 0.875rem;
            font-weight: 500;
            z-index: 1001;
            animation: slideIn 0.3s ease-out;
        }
        .notification-success {
            background: linear-gradient(135deg, #10b981, #059669);
        }
        .notification-info {
            background: linear-gradient(135deg, #3b82f6, #2563eb);
        }
        .notification-warning {
            background: linear-gradient(135deg, #f59e0b, #d97706);
        }
        .notification-error {
            background: linear-gradient(135deg, #ef4444, #dc2626);
        }
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            document.body.removeChild(notification);
            document.head.removeChild(style);
        }
    }, 3000);
}

// Utility functions
function formatNumber(num) {
    return new Intl.NumberFormat().format(num);
}

function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }).format(date);
}

// Panel-specific features
function initializePanelFeatures() {
    // Map point interactions
    initializeMapInteractions();
    
    // Filter interactions
    initializeFilterInteractions();
    
    // Download interactions
    initializeDownloadInteractions();
    
    // Trading interactions
    initializeTradingInteractions();
}

function initializeMapInteractions() {
    const mapPoints = document.querySelectorAll('.map-point');
    const mapBtns = document.querySelectorAll('.map-btn');
    
    mapPoints.forEach(point => {
        point.addEventListener('click', function() {
            const location = this.dataset.location;
            showNotification(`Selected monitoring point: ${location}`, 'info');
        });
    });
    
    mapBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            mapBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.textContent.toLowerCase();
            filterMapPoints(filter);
        });
    });
}

function filterMapPoints(filter) {
    const mapPoints = document.querySelectorAll('.map-point');
    
    mapPoints.forEach(point => {
        const isActive = point.classList.contains('active');
        const isAlert = point.classList.contains('alert');
        
        let shouldShow = true;
        
        switch(filter) {
            case 'active':
                shouldShow = isActive && !isAlert;
                break;
            case 'alerts':
                shouldShow = isAlert;
                break;
            case 'all':
            default:
                shouldShow = true;
                break;
        }
        
        point.style.display = shouldShow ? 'block' : 'none';
    });
}

function initializeFilterInteractions() {
    const applyFilterBtns = document.querySelectorAll('.apply-filters-btn');
    
    applyFilterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            showNotification('Filters applied successfully!', 'success');
            
            // Simulate data refresh
            const cards = this.closest('.filter-card').parentElement.querySelectorAll('.metric-card, .chart-container');
            cards.forEach(card => {
                card.classList.add('loading');
                setTimeout(() => {
                    card.classList.remove('loading');
                }, 1000);
            });
        });
    });
}

function initializeDownloadInteractions() {
    const downloadBtns = document.querySelectorAll('.download-btn');
    
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const format = this.textContent.includes('PDF') ? 'PDF' : 'Excel';
            showNotification(`Downloading report in ${format} format...`, 'info');
            
            // Simulate download
            setTimeout(() => {
                showNotification(`${format} report downloaded successfully!`, 'success');
            }, 2000);
        });
    });
}

function initializeTradingInteractions() {
    const buyBtns = document.querySelectorAll('.buy-btn');
    const sellBtns = document.querySelectorAll('.sell-btn');
    
    buyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            showTradingModal('buy');
        });
    });
    
    sellBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            showTradingModal('sell');
        });
    });
}

function showTradingModal(type) {
    const modal = document.createElement('div');
    modal.className = 'trading-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${type === 'buy' ? 'Buy' : 'Sell'} Carbon Credits</h3>
                <button class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <form class="trading-form">
                    <div class="form-group">
                        <label>Number of Credits</label>
                        <input type="number" placeholder="Enter number of credits" required>
                    </div>
                    <div class="form-group">
                        <label>Price per Credit</label>
                        <input type="number" step="0.01" placeholder="Enter price" required>
                    </div>
                    <div class="form-group">
                        <label>Total Amount</label>
                        <input type="text" readonly placeholder="Calculated automatically">
                    </div>
                    <div class="form-actions">
                        <button type="button" class="cancel-btn">Cancel</button>
                        <button type="submit" class="submit-btn">${type === 'buy' ? 'Buy' : 'Sell'} Credits</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .trading-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }
        .modal-content {
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            border: 1px solid #475569;
            border-radius: 16px;
            padding: 1.5rem;
            min-width: 400px;
            max-width: 500px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #475569;
        }
        .modal-header h3 {
            margin: 0;
            font-size: 1.125rem;
            font-weight: 600;
            color: #e2e8f0;
        }
        .close-btn {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #94a3b8;
        }
        .form-group {
            margin-bottom: 1rem;
        }
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-size: 0.875rem;
            font-weight: 500;
            color: #94a3b8;
        }
        .form-group input {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #475569;
            background: rgba(15, 23, 42, 0.5);
            border-radius: 8px;
            font-size: 0.875rem;
            color: #e2e8f0;
        }
        .form-group input:focus {
            outline: none;
            border-color: #10b981;
            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }
        .form-actions {
            display: flex;
            gap: 0.75rem;
            justify-content: flex-end;
            margin-top: 1.5rem;
        }
        .cancel-btn,
        .submit-btn {
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-size: 0.875rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
        }
        .cancel-btn {
            background: rgba(100, 116, 139, 0.2);
            border: 1px solid #64748b;
            color: #94a3b8;
        }
        .cancel-btn:hover {
            background: rgba(100, 116, 139, 0.3);
        }
        .submit-btn {
            background: linear-gradient(135deg, #10b981, #059669);
            border: none;
            color: white;
        }
        .submit-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(modal);
    
    // Handle form submission
    const form = modal.querySelector('.trading-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const credits = form.querySelector('input[type="number"]').value;
        const price = form.querySelector('input[step="0.01"]').value;
        
        showNotification(`${type === 'buy' ? 'Buy' : 'Sell'} order placed for ${credits} credits at $${price} each!`, 'success');
        
        // Close modal
        document.body.removeChild(modal);
        document.head.removeChild(style);
    });
    
    // Handle close button
    modal.querySelector('.close-btn').addEventListener('click', function() {
        document.body.removeChild(modal);
        document.head.removeChild(style);
    });
    
    // Handle cancel button
    modal.querySelector('.cancel-btn').addEventListener('click', function() {
        document.body.removeChild(modal);
        document.head.removeChild(style);
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.head.removeChild(style);
        }
    });
}

// Export functions for potential use
window.CarbonMRVDashboard = {
    updateChart: updateEmissionsChart,
    showNotification: showNotification,
    formatNumber: formatNumber,
    formatDate: formatDate,
    switchPanel: function(panelName) {
        const tabBtn = document.querySelector(`[data-panel="${panelName}"]`);
        if (tabBtn) {
            tabBtn.click();
        }
    }
};