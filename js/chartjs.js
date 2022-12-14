$(document).ready(function () {

    //메인 상단 4개 차트
    if ($('#mainTheme_chart1').length) {
        Highcharts.chart('mainTheme_chart1', {
            chart: {
                type: 'line',
                renderTo: 'mainTheme_chart1',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#877edf"],
            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}"><b>{point.y:,.2f} 달러</b><br/>',
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                style: {
                    color: '#ffffff',
                    border: '1px solid #ffffff'
                },
            },

            xAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                tickColor: null,
                labels: {
                    enabled: false
                }
            },

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                labels: {
                    enabled: false
                }
            },

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                }
            },

            series: [{
                name: '',
                data: [
                    0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
                    0.3, 0.1, 0.3, 0.4, 0.3, 0.2, 0.3, 0.2, 0.4, 0.0, 0.9, 0.3,
                    0.7, 1.1, 1.8, 1.2, 1.4, 1.2, 0.9, 0.8, 0.9, 0.2, 0.4, 1.2,
                    0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4, 3.7, 2.1, 2.0,
                    1.5
                ]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                }
            },
        })

    }
    if ($('#mainTheme_chart2').length) {
        Highcharts.chart('mainTheme_chart2', {
            chart: {
                type: 'line',
                renderTo: 'mainTheme_chart2',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#877edf"],
            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}"><b>{point.y:,.2f} 달러</b><br/>',
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                style: {
                    color: '#ffffff',
                    border: '1px solid #ffffff'
                },
            },

            xAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                tickColor: null,
                labels: {
                    enabled: false
                }
            },

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                labels: {
                    enabled: false
                }
            },

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                }
            },

            series: [{
                name: '',
                data: [
                    0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
                    0.3, 0.1, 0.3, 0.4, 0.3, 0.2, 0.3, 0.2, 0.4, 0.0, 0.9, 0.3,
                    0.7, 1.1, 1.8, 1.2, 1.4, 1.2, 0.9, 0.8, 0.9, 0.2, 0.4, 1.2,
                    0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4, 3.7, 2.1, 2.0,
                    1.5
                ]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                }
            },
        })

    }
    if ($('#mainTheme_chart3').length) {
        Highcharts.chart('mainTheme_chart3', {
            chart: {
                type: 'line',
                renderTo: 'mainTheme_chart3',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#877edf"],
            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}"><b>{point.y:,.2f} 달러</b><br/>',
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                style: {
                    color: '#ffffff',
                    border: '1px solid #ffffff'
                },
            },

            xAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                tickColor: null,
                labels: {
                    enabled: false
                }
            },

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                labels: {
                    enabled: false
                }
            },

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                }
            },

            series: [{
                name: '',
                data: [
                    0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
                    0.3, 0.1, 0.3, 0.4, 0.3, 0.2, 0.3, 0.2, 0.4, 0.0, 0.9, 0.3,
                    0.7, 1.1, 1.8, 1.2, 1.4, 1.2, 0.9, 0.8, 0.9, 0.2, 0.4, 1.2,
                    0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4, 3.7, 2.1, 2.0,
                    1.5
                ]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                }
            },
        })

    }
    if ($('#mainTheme_chart4').length) {
        Highcharts.chart('mainTheme_chart4', {
            chart: {
                type: 'line',
                renderTo: 'mainTheme_chart4',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#877edf"],
            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}"><b>{point.y:,.2f} 달러</b><br/>',
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                style: {
                    color: '#ffffff',
                    border: '1px solid #ffffff'
                },
            },

            xAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                tickColor: null,
                labels: {
                    enabled: false
                }
            },

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                labels: {
                    enabled: false
                }
            },

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                }
            },

            series: [{
                name: '',
                data: [
                    0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
                    0.3, 0.1, 0.3, 0.4, 0.3, 0.2, 0.3, 0.2, 0.4, 0.0, 0.9, 0.3,
                    0.7, 1.1, 1.8, 1.2, 1.4, 1.2, 0.9, 0.8, 0.9, 0.2, 0.4, 1.2,
                    0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4, 3.7, 2.1, 2.0,
                    1.5
                ]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                }
            },
        })

    }
    if ($('#mainTheme_chart5').length) {
        Highcharts.chart('mainTheme_chart5', {
            chart: {
                type: 'line',
                renderTo: 'mainTheme_chart5',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#877edf"],
            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}"><b>{point.y:,.2f} 달러</b><br/>',
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                style: {
                    color: '#ffffff',
                    border: '1px solid #ffffff'
                },
            },

            xAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                tickColor: null,
                labels: {
                    enabled: false
                }
            },

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                labels: {
                    enabled: false
                }
            },

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                }
            },

            series: [{
                name: '',
                data: [
                    0.2, 0.1, 0.1, 0.1, 0.3, 0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4, 3.7, 2.1, 2.0,
                    1.5, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
                    0.3, 0.1, 0.3, 0.4, 0.3, 0.2, 0.3, 0.2, 0.4, 0.0, 0.9, 0.3,
                    0.7, 1.1, 1.8, 1.2, 1.4, 1.2, 0.9, 0.8, 0.9, 0.2, 0.4, 1.2,
                ]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    }
                }
            },
        })

    }
    if ($('#mainTheme_chart6').length) {
        Highcharts.chart('mainTheme_chart6', {
            chart: {
                type: 'line',
                renderTo: 'mainTheme_chart6',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#877edf"],
            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}"><b>{point.y:,.2f} 달러</b><br/>',
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                style: {
                    color: '#ffffff',
                    border: '1px solid #ffffff'
                },
            },

            xAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                tickColor: null,
                labels: {
                    enabled: false
                }
            },

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                labels: {
                    enabled: false
                }
            },

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                }
            },

            series: [{
                name: '',
                data: [1.2, 0.9, 0.8, 0.9, 0.2, 0.4, 1.2,
                    0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4, 3.7, 2.1, 2.0,
                    1.5, 0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
                    0.3, 0.1, 0.3, 0.4, 0.3, 0.2, 0.3, 0.2, 0.4, 0.0, 0.9, 0.3,
                    0.7, 1.1, 1.8, 1.2, 1.4
                ]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                }
            },
        })

    }
    if ($('#mainTheme_chart7').length) {
        Highcharts.chart('mainTheme_chart7', {
            chart: {
                type: 'line',
                renderTo: 'mainTheme_chart7',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#877edf"],
            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}"><b>{point.y:,.2f} 달러</b><br/>',
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                style: {
                    color: '#ffffff',
                    border: '1px solid #ffffff'
                },
            },

            xAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                tickColor: null,
                labels: {
                    enabled: false
                }
            },

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                labels: {
                    enabled: false
                }
            },

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                }
            },

            series: [{
                name: '',
                data: [
                    0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
                    0.3, 0.1, 0.3, 0.4, 0.3, 0.2, 0.3, 0.2, 0.4, 0.0, 0.9, 0.3,
                    0.7, 1.1, 1.8, 1.2, 1.4, 1.2, 0.9, 0.8, 0.9, 0.2, 0.4, 1.2,
                    0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4, 3.7, 2.1, 2.0,
                    1.5
                ]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                }
            },
        })

    }
    if ($('#mainTheme_chart8').length) {
        Highcharts.chart('mainTheme_chart8', {
            chart: {
                type: 'line',
                renderTo: 'mainTheme_chart8',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#877edf"],
            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}"><b>{point.y:,.2f} 달러</b><br/>',
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                style: {
                    color: '#ffffff',
                    border: '1px solid #ffffff'
                },
            },

            xAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                tickColor: null,
                labels: {
                    enabled: false
                }
            },

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                labels: {
                    enabled: false
                }
            },

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                }
            },

            series: [{
                name: '',
                data: [
                    0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
                    0.3, 0.1, 0.3, 0.4, 0.3, 0.2, 0.3, 0.2, 0.4, 0.0, 0.9, 0.3,
                    0.7, 1.1, 1.8, 1.2, 1.4, 1.2, 0.9, 0.8, 0.9, 0.2, 0.4, 1.2,
                    0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4, 3.7, 2.1, 2.0,
                    1.5
                ]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                }
            },
        })

    }
    if ($('#mainTheme_chart9').length) {
        Highcharts.chart('mainTheme_chart9', {
            chart: {
                type: 'line',
                renderTo: 'mainTheme_chart9',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#877edf"],
            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}"><b>{point.y:,.2f} 달러</b><br/>',
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                style: {
                    color: '#ffffff',
                    border: '1px solid #ffffff'
                },
            },

            xAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                tickColor: null,
                labels: {
                    enabled: false
                }
            },

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                labels: {
                    enabled: false
                }
            },

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                }
            },

            series: [{
                name: '',
                data: [0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
                    0.3, 0.1, 0.3, 0.4, 0.3, 0.2, 0.3, 0.2, 0.4, 0.0, 0.9, 0.3,
                    0.7, 1.1, 1.8, 1.2, 1.4, 1.2, 0.9, 0.8, 0.9, 0.2, 0.2, 0.1, 0.4, 1.2,
                    0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4, 3.7, 2.1, 2.0,
                    1.5
                ]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                }
            },
        })

    }
    if ($('#mainTheme_chart10').length) {
        Highcharts.chart('mainTheme_chart10', {
            chart: {
                type: 'line',
                renderTo: 'mainTheme_chart10',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#877edf"],
            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}"><b>{point.y:,.2f} 달러</b><br/>',
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                style: {
                    color: '#ffffff',
                    border: '1px solid #ffffff'
                },
            },

            xAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                tickColor: null,
                labels: {
                    enabled: false
                }
            },

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                labels: {
                    enabled: false
                }
            },

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                }
            },

            series: [{
                name: '',
                data: [1, 0.3, 0.4, 0.3, 0.2, 0.3, 0.2, 0.4, 0.0, 0.9, 0.3,
                    0.7, 1.1, 1.8, 1.2, 1.4, 1.2, 0.9, 0.8, 0.9, 0.2, 0.4, 1.2,
                    0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4,
                    0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
                    0.3, 0.3, 0.7, 2.1, 2.0,
                    1.5
                ]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                }
            },
        })

    }
    if ($('#mainTheme_chart11').length) {
        Highcharts.chart('mainTheme_chart11', {
            chart: {
                type: 'line',
                renderTo: 'mainTheme_chart11',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#877edf"],
            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}"><b>{point.y:,.2f} 달러</b><br/>',
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                style: {
                    color: '#ffffff',
                    border: '1px solid #ffffff'
                },
            },

            xAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                tickColor: null,
                labels: {
                    enabled: false
                }
            },

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                labels: {
                    enabled: false
                }
            },

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                }
            },

            series: [{
                name: '',
                data: [
                    0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
                    0.3, 0.1, 0.3, 0.4, 0.3, 0.2, 0.3, 0.2, 0.4, 0.0, 0.9, 0.3,
                    0.7, 1.1, 1.8, 1.2, 1.4, 1.2, 0.9, 0.8, 0.9, 0.2, 0.4, 1.2,
                    0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4, 3.7, 2.1, 2.0,
                    1.5
                ]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                }
            },
        })

    }
    if ($('#mainTheme_chart12').length) {
        Highcharts.chart('mainTheme_chart12', {
            chart: {
                type: 'line',
                renderTo: 'mainTheme_chart12',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#877edf"],
            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}"><b>{point.y:,.2f} 달러</b><br/>',
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                style: {
                    color: '#ffffff',
                    border: '1px solid #ffffff'
                },
            },

            xAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                tickColor: null,
                labels: {
                    enabled: false
                }
            },

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                labels: {
                    enabled: false
                }
            },

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                }
            },

            series: [{
                name: '',
                data: [
                    0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
                    0.3, 0.1, 0.3, 0.4, 0.3, 0.2, 0.3, 0.2, 0.4, 0.0, 0.9, 0.3,
                    0.7, 1.1, 1.8, 1.2, 1.4, 1.2, 0.9, 0.8, 0.9, 0.2, 0.4, 1.2,
                    0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4, 3.7, 2.1, 2.0,
                    1.5
                ]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                }
            },
        })
    }

    if ($('#mainTheme2_chart1').length) {
        Highcharts.chart('mainTheme2_chart1', {
            chart: {
                type: 'area',
                renderTo: 'mainTheme2_chart1',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#877edf"],
            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}"><b>{point.y:,.2f} 달러</b><br/>',
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                style: {
                    color: '#ffffff',
                    border: '1px solid #ffffff'
                },
            },

            xAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                tickColor: null,
                labels: {
                    enabled: false
                }
            },

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                labels: {
                    enabled: false
                }
            },

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                }
            },

            series: [{
                name: '',
                data: [
                    0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
                    0.3, 0.1, 0.3, 0.4, 0.3, 0.2, 0.3, 0.2, 0.4, 0.0, 0.9, 0.3,
                    0.7, 1.1, 1.8, 1.2, 1.4, 1.2, 0.9, 0.8, 0.9, 0.2, 0.4, 1.2,
                    0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4, 3.7, 2.1, 2.0,
                    1.5
                ]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    fillOpacity: 0.1
                }
            },
        })
    }
    if ($('#mainTheme2_chart2').length) {
        Highcharts.chart('mainTheme2_chart2', {
            chart: {
                type: 'area',
                renderTo: 'mainTheme2_chart2',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#877edf"],
            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}"><b>{point.y:,.2f} 달러</b><br/>',
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                style: {
                    color: '#ffffff',
                    border: '1px solid #ffffff'
                },
            },

            xAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                tickColor: null,
                labels: {
                    enabled: false
                }
            },

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                labels: {
                    enabled: false
                }
            },

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                }
            },

            series: [{
                name: '',
                data: [
                    0.7, 1.1, 1.8, 1.2, 1.4, 1.2, 0.9, 0.8, 0.9, 0.2, 0.4, 1.2,
                    0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4, 3.7, 2.1, 2.0,
                    1.5, 0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
                    0.3, 0.1, 0.3, 0.4, 0.3, 0.2, 0.3, 0.2, 0.4, 0.0, 0.9, 0.3
                ]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    fillOpacity: 0.1
                }
            },
        })
    }

    if ($('#sum_topchart_1').length) {
        // 검색 - 요약 선차트 5일
        Highcharts.chart('sum_topchart_1', {
            chart: {
                type: 'area',
                renderTo: 'sum_topchart_1',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                marginTop: 50,
                height: 300,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#e1474e", "#ff3301"],
            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}"><b>{point.y:,.2f} 달러</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2005', '2006', '2007', '2008', '2009'],
                crosshair: true,
                labels: {
                    enabled: true,
                    step: 10,
                }
            }],

            yAxis: {
                min: 0,
                max: 5,
                labels: {
                    format: '{value}</b><br/>백만달러',
                },
                title: {
                    text: null
                },
            },

            credits: {
                text: '초이스스탁US',
                href: false,
                style: {
                    fontSize: '12px',
                    cursor: 'text',
                },
            },
            
            exporting: {                
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                },
            },
            legend: {
                enabled: false,
            },

            series: [{
                name: '',
                data: [
                    0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
                    0.3, 0.1, 0.3, 0.4, 0.3, 0.2, 0.3, 0.2, 0.4, 0.0, 0.9, 0.3,
                    0.7, 1.1, 1.8, 1.2, 1.4, 1.2, 0.9, 0.8, 0.9, 0.2, 0.4, 1.2,
                    0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4, 3.7, 2.1, 2.0,
                    1.5
                ]
            }],

            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[5]],
                            [1, Highcharts.color(Highcharts.getOptions().colors[5]).setOpacity(0).get('rgba')]
                        ]
                    },
                },
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: null,
                    marker: {
                        enabled: false,
                    },
                    fillOpacity: 0.1
                },
            },
        });
    }
    if ($('#sum_topchart_2').length) {
        // 검색 - 요약 선차트 1개월
        Highcharts.chart('sum_topchart_2', {
            chart: {
                type: 'area',
                renderTo: 'sum_topchart_2',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                marginTop: 50,
                height: 300,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#e1474e", "#ff3301"],
            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}"><b>{point.y:,.2f} 달러</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2005', '2006', '2007', '2008', '2009'],
                crosshair: true,
                labels: {
                    enabled: true,
                    step: 10,
                }
            }],

            yAxis: {
                min: 0,
                max: 50,
                labels: {
                    format: '{value}</b><br/>백만달러',
                },
                title: {
                    text: null
                },
            },

            credits: {
                text: '초이스스탁US',
                href: false,
                style: {
                    fontSize: '12px',
                    cursor: 'text',
                },
            },
            
            exporting: {                
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                },
            },
            legend: {
                enabled: false,
            },

            series: [{
                name: '',
                data: [
                    0.7, 1.1, 1.8, 1.2, 1.4, 1.2, 0.9, 0.8, 0.9, 0.2, 0.4, 1.2,
                    0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4, 3.7, 2.1, 2.0,
                    1.5, 0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
                    0.3, 0.1, 0.3, 0.4, 0.3, 0.2, 0.3, 0.2, 0.4, 0.0, 0.9, 0.3
                ]
            }],

            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[5]],
                            [1, Highcharts.color(Highcharts.getOptions().colors[5]).setOpacity(0).get('rgba')]
                        ]
                    },
                },
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: null,
                    marker: {
                        enabled: false,
                    },
                    fillOpacity: 0.1
                },
            },
        });
    }
    if ($('#sum_topchart_3').length) {
        // 검색 - 요약 선차트 6개월
        Highcharts.chart('sum_topchart_3', {
            chart: {
                type: 'area',
                renderTo: 'sum_topchart_3',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                marginTop: 50,
                height: 300,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#e1474e", "#ff3301"],
            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}"><b>{point.y:,.2f} 달러</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2005', '2006', '2007', '2008', '2009'],
                crosshair: true,
                labels: {
                    enabled: true,
                    step: 10,
                }
            }],

            yAxis: {
                min: 10,
                max: 100,
                labels: {
                    format: '{value}</b><br/>백만달러',
                },
                title: {
                    text: null
                },
            },

            credits: {
                text: '초이스스탁US',
                href: false,
                style: {
                    fontSize: '12px',
                    cursor: 'text',
                },
            },
            
            exporting: {                
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                },
            },
            legend: {
                enabled: false,
            },

            series: [{
                name: '',
                data: [29.9, 21.5, .4, 1.2, 10.9, 10.8, 10.9, 10.2, 10.4, 11.2,
                    10.3, 12.3, 21.0, 10.7, 31.0, 24.8, 32.0, 31.2, 31.4, 33.7, 22.1, 42.0,
                    11.5, 10.2, 10.1, 10.1, 10.1, 10.3, 10.2, 10.3, 46.0],
            }],

            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[5]],
                            [1, Highcharts.color(Highcharts.getOptions().colors[5]).setOpacity(0).get('rgba')]
                        ]
                    },
                },
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: null,
                    marker: {
                        enabled: false,
                    },
                    fillOpacity: 0.1
                },
            },
        });
    }
    if ($('#sum_topchart_4').length) {
        // 검색 - 요약 선차트 1년
        Highcharts.chart('sum_topchart_4', {
            chart: {
                type: 'area',
                renderTo: 'sum_topchart_4',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                marginTop: 50,
                height: 300,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#e1474e", "#ff3301"],
            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}"><b>{point.y:,.2f} 달러</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2005', '2006', '2007', '2008', '2009'],
                crosshair: true,
                labels: {
                    enabled: true,
                    step: 10,
                }
            }],

            yAxis: {
                labels: {
                    format: '{value}</b><br/>백만달러',
                },
                title: {
                    text: null
                },
            },

            credits: {
                text: '초이스스탁US',
                href: false,
                style: {
                    fontSize: '12px',
                    cursor: 'text',
                },
            },
            
            exporting: {                
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                },
            },
            legend: {
                enabled: false,
            },

            series: [{
                name: '',
                data: [
                    0.7, 1.1, 1.8, 1.2, 1.4, 1.2, 0.9, 0.8, 0.9, 0.2, 0.4, 1.2,
                    0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4, 3.7, 2.1, 2.0,
                    1.5, 0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
                    0.3, 0.1, 0.3, 0.4, 0.3, 0.2, 0.3, 0.2, 0.4, 0.0, 0.9, 0.3
                ]
            }],

            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[5]],
                            [1, Highcharts.color(Highcharts.getOptions().colors[5]).setOpacity(0).get('rgba')]
                        ]
                    },
                },
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: null,
                    marker: {
                        enabled: false,
                    },
                    fillOpacity: 0.1
                },
            },
        });
    }
    

    if ($('#sum_topchart_band').length) {
        // 검색 - 적정가밴드 주가비교
        Highcharts.chart('sum_topchart_band', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'sum_topchart_band',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                marginTop: 40,
                marginBottom: 70,

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#ff0000", "#aeceec", "#a6c9e9", "#4285f4", "#6ea4d4", "#5486b4"],            

            title: {
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: {
                labels: {
                    format: '{value}',
                    style: {
                        color: ["#333333"],
                    },
                },
                title: {
                    text: null,
                }
            },

            credits: {
                text: '초이스스탁US',
                href: false,
                style: {
                    fontSize: '12px',
                    cursor: 'text',
                },
            },

            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                }
            },

            series: [{
                type: 'line',
                data: [14908, 12908, 13908, 13908, 15908, 12908, 13989, 14989, 15989,  16989, 17989, 18989, 19111, 17111, 13111, 17111],
                name: '주가',
                lineWidth: 3
            }, {
                type: 'line',
                data: [12908, 12908, 12908, 12908, 12908, 12908, 8989, 8989, 8989,  8989, 8989, 8989, 18111, 18111, 18111, 18111],
                name: '매우저평가',
                // dashStyle: 'ShortDash',
                opacity: 0.6,
                className: 'label_none',
            }, {
                type: 'line',
                data: [13908, 13908, 13908, 13908, 13908, 13908, 9989, 9989, 9989,  9989, 9989, 9989, 19111, 19111, 19111, 19111],
                name: '저평가',
                dashStyle: 'ShortDash',
                opacity: 0.6,
                className: 'label_none',
            }, {
                type: 'line',
                data: [13908, 13908, 12908, 12908, 13908, 13908, 12989, 11989, 17989,  19989, 14989, 14989, 13111, 14111, 15111, 19231],
                name: '적정가',    
            }, {
                type: 'line',
                data: [15908, 15908, 15908, 15908, 15908, 15908, 11989, 11989, 11989,  11989, 11989, 11989, 21111, 21111, 21111, 21111],
                name: '고평가',
                dashStyle: 'ShortDash',
                opacity: 0.6,
                className: 'label_none',
            }, {
                type: 'line',
                data: [16908, 16908, 16908, 16908, 16908, 16908, 12989, 12989, 12989,  12989, 12989, 12989, 22111, 22111, 22111, 22111],
                name: '매우고평가',
                // dashStyle: 'ShortDash',
                opacity: 0.6,
                className: 'label_none',
            }],            

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }

    // 검색 - 종목진단 - 재무차트탭 11개 BIC차트
    /* 매출과이익 */
    if ($('#chart_BICchart011').length) {
        Highcharts.chart('chart_BICchart011', {
            chart: {
                type: 'column',
                zoomType: 'xy',
                renderTo: 'chart_BICchart011',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'",
                },
                marginTop: 50,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#C4C4C4 ", "#404fc3", "#5CAC00"],
            title: {
                text: null,
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 백만달러</b><br/>',
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true,
            }],

            yAxis: [{ // Primary yAxis
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}</b><br/>백만달러(USD)',
                    style: {
                        color: ["#959393"],
                    }
                },
            }, { // Secondary yAxis
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}</b><br/>백만달러(USD)',
                    style: {
                        color: ["#623FA8"],
                    }
                },
                opposite: true
            }],

            credits: {
                text: '초이스스탁US',
                href: false,
                style: {
                    fontSize: '12px',
                    cursor: 'text',
                },
            },

            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                },
            },

            legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
                floating: true,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || // theme
                    'rgba(255,255,255,0.25)'
            },

            series: [{
                style: {
                    fontSize: '0',
                },
                name: '매출액',
                type: 'column',
                data: [150, 126, 129, 234, 228, 121, 150, 126, 129, 234, 228, 121],

            }, {
                name: '영업이익',
                type: 'line',
                yAxis: 1,
                data: [49, 71.5, 20.4, 92, 44.0, 76.0, 49, 71.5, 20.4, 92, 44.0, 76.0],

            }, {
                name: '지배지분순이익',
                type: 'line',
                yAxis: 1,
                data: [19.9, 71.5, 106.4, 29.2, 14.0, 76.0, 19.9, 71.5, 106.4, 29.2, 14.0, 76.0],

            }],

            lang: {
                noData: "해당 데이터가 없습니다.<br> 데이터 선택 기간을 변경해 보세요.",
            },

            noData: {
                style: {
                    fontWeight: 'nomal',
                    fontSize: '1rem',
                    color: '#8380A0',
                    align: 'left'
                }
            },

            dataLabels: {
                enabled: false,
            },

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //D012. 이익률
    if ($('#chart_BICchart012').length) {
        Highcharts.chart('chart_BICchart012', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart012',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                marginTop: 40,
                marginBottom: 70,

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#404fc3", "#5CAC00"],

            title: {
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: {
                labels: {
                    format: '{value} %',
                    style: {
                        color: ["#5CAC00"],
                    },
                },
                title: {
                    text: null,
                }
            },

            credits: {
                text: '초이스스탁US',
                href: false,
                style: {
                    fontSize: '12px',
                    cursor: 'text',
                },
            },

            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                }
            },

            series: [{
                type: 'line',
                data: [294, 71, 106, 429, 144.456, 656],
                name: '영업이익률',
            }, {
                type: 'line',
                data: [194.1, 95.6, 54.4, 29.9, 71.5, 106.4],
                name: '순이익률',
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //D015. 부채비율과 유동비율    
    if ($('#chart_BICchart015').length) {
        Highcharts.chart('chart_BICchart015', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart015',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                marginTop: 40,
                marginBottom: 70,

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#404fc3", "#5CAC00"],

            title: {
                style: {
                    fontSize: '0',
                },
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: [{ // Primary yAxis
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}</b><br/> %',
                    style: {
                        color: ["#404fc3"],
                    }
                },
            }, { // Secondary yAxis
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}</b><br/> %',
                    style: {
                        color: ["#5CAC00"],
                    }
                },
                opposite: true
            }],

            credits: {
                text: '초이스스탁US',
                href: false,
                style: {
                    fontSize: '12px',
                    cursor: 'text',
                },
            },

            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                },
            },

            series: [{
                name: '부채비율',
                data: [42, 52, 57, 69, 97, 11]
            }, {
                name: '유동비율',
                yAxis: 1,
                data: [16, 64, 42, 51, 30, 82]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //D022. 주당배당금과 배당률
    if ($('#chart_BICchart022').length) {
        Highcharts.chart('chart_BICchart022', {
            chart: {
                type: 'column',
                zoomType: 'xy',
                renderTo: 'chart_BICchart022',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                marginTop: 50,
                marginBottom: 70,

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#C4C4C4", "#404fc3", "#5CAC00"],

            title: {
                style: {
                    fontSize: '0',
                },
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: [{ // Primary yAxis
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}달러',
                    style: {
                        color: ["#959393"],
                    }
                },
            }, { // Secondary yAxis
                title: {
                    text: null,
                },
                labels: {
                    format: '{value} %',
                    style: {
                        color: ["#404fc3"],
                    }
                },
                opposite: true
            }],

            credits: {
                text: '초이스스탁US',
                href: false,
                style: {
                    fontSize: '12px',
                    cursor: 'text',
                },
            },

            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                },
            },

            legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
                floating: true,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || // theme
                    'rgba(255,255,255,0.25)'
            },

            series: [{
                name: '주당배당금',
                type: 'column',
                data: [117.0, 126.9, 129.5, 234.5, 228.2, 121.5],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 달러</b><br/>'
                },

            }, {
                name: '배당수익률',
                type: 'line',
                yAxis: 1,
                data: [49, 71.5, 20.4, 92, 44.0, 76.0],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //D024. ROE 와 PBR
    if ($('#chart_BICchart024').length) {
        Highcharts.chart('chart_BICchart024', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart024',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                marginTop: 40,
                marginBottom: 70,

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#404fc3", "#5CAC00"],

            title: {
                style: {
                    fontSize: '0',
                },
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: [{ // Primary yAxis
                title: {
                    text: null,
                },
                labels: {
                    format: '{value} %',
                    style: {
                        color: ["#404fc3"],
                    }
                },
            }, { // Secondary yAxis
                title: {
                    text: null,
                },
                labels: {
                    format: '{value} 배',
                    style: {
                        color: ["#5CAC00"],
                    }
                },
                opposite: true
            }],

            credits: {
                text: '초이스스탁US',
                href: false,
                style: {
                    fontSize: '12px',
                    cursor: 'text',
                },
            },

            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                },
            },

            series: [{
                name: '자기자본이익률',
                data: [42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '주가순자산배수',
                yAxis: 1,
                data: [16, 64, 42, 51, 30, 82],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 배</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //D027. 운전자본 회전일수
    if ($('#chart_BICchart027').length) {
        Highcharts.chart('chart_BICchart027', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart027',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                marginTop: 40,
                marginBottom: 90,

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#C4C4C4", "#404fc3", "#5CAC00"],

            title: {
                style: {
                    fontSize: '0',
                },
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 일</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: [{ // Primary yAxis
                title: {
                    text: null,
                },
                labels: {
                    format: '{value} 일',
                    style: {
                        color: ["#959393"],
                    }
                },
            }, { // Secondary yAxis
                title: {
                    text: null,
                },
                labels: {
                    format: '{value} 일',
                    style: {
                        color: ["#FF9700"],
                    }
                },
                opposite: true
            }],

            credits: {
                text: '초이스스탁US',
                href: false,
                style: {
                    fontSize: '12px',
                    cursor: 'text',
                },
            },

            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                },
            },

            series: [{
                type: 'line',
                data: [42, 52, 57, 69, 97, 11],
                name: '매출채권 회전일수',
            }, {
                type: 'line',
                data: [14.1, 9.6, 5.4, 9.9, 1.5, 06],
                name: '재고자산 회전일수',
            }, {
                type: 'line',
                data: [194.1, 95.6, 54.4, 29.9, 71.5, 106.4],
                name: '매입채무 회전일수',
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //D029. 현금흐름표
    if ($('#chart_BICchart029').length) {
        Highcharts.chart('chart_BICchart029', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart029',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                marginTop: 50,
                marginBottom: 90,

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#C4C4C4", "#404fc3", "#5CAC00"],

            title: {
                style: {
                    fontSize: '0',
                },
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f}</b><br/>백만달러</b><br/>',
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: {
                labels: {
                    format: '{value}</b><br/>백만달러(USD)',
                    style: {
                        color: ["#959393"],
                    }
                },
                title: {
                    text: null,
                }
            },

            credits: {
                text: '초이스스탁US',
                href: false,
                style: {
                    fontSize: '12px',
                    cursor: 'text',
                },
            },

            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                },
            },

            series: [{
                type: 'line',
                data: [345, 71, 106, 129, 144, 176],
                name: '영업활동 현금흐름'
            }, {
                type: 'line',
                data: [16, 64, 42, 51, 30, 82],
                name: '투자활동 현금흐름',
            }, {
                type: 'line',
                data: [23, 63, 52, 31, 13, 34],
                name: '재무활동 현금흐름',
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //D032. 주가수익배수
    if ($('#chart_BICchart032').length) {
        Highcharts.chart('chart_BICchart032', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart032',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                marginTop: 40,
                marginBottom: 70,

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#404fc3"],

            title: {
                style: {
                    fontSize: '0',
                },
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 배</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: {
                labels: {
                    format: '{value} 배',
                    style: {
                        color: ["#404fc3"],
                    },
                },
                title: {
                    text: null,
                }
            },

            credits: {
                text: '초이스스탁US',
                href: false,
                style: {
                    fontSize: '12px',
                    cursor: 'text',
                },
            },

            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                },
            },

            series: [{
                name: '주가수익배수',
                data: [42, 52, 57, 69, 97, 11]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //D033. 주가와 주당순이익
    if ($('#chart_BICchart033').length) {
        Highcharts.chart('chart_BICchart033', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart033',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                marginTop: 40,
                marginBottom: 70,

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#404fc3", "#5CAC00"],

            title: {
                style: {
                    fontSize: '0',
                },
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 달러</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: [{ // Primary yAxis
                title: {
                    text: null,
                },
                labels: {
                    format: '{value} 달러',
                    style: {
                        color: ["#404fc3"],
                    }
                },
            }, { // Secondary yAxis
                title: {
                    text: null,
                },
                labels: {
                    format: '{value} 달러',
                    style: {
                        color: ["#5CAC00"],
                    }
                },
                opposite: true
            }],

            credits: {
                text: '초이스스탁US',
                href: false,
                style: {
                    fontSize: '12px',
                    cursor: 'text',
                },
            },

            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                },
            },

            series: [{
                name: '주당순이익',
                data: [42, 52, 57, 69, 97, 11]
            }, {
                name: '주가',
                yAxis: 1,
                type: 'line',
                data: [72, 32, 37, 69, 27, 31]
            }],            

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //D034. 주가순자산배수
    if ($('#chart_BICchart034').length) {
        Highcharts.chart('chart_BICchart034', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart034',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                marginTop: 40,
                marginBottom: 70,

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#404fc3"],

            title: {
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 배</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: {
                labels: {
                    format: '{value} 배',
                    style: {
                        color: ["#959393"],
                    },
                },
                title: {
                    text: null,
                }
            },

            credits: {
                text: '초이스스탁US',
                href: false,
                style: {
                    fontSize: '12px',
                    cursor: 'text',
                },
            },

            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                },
            },

            series: [{
                name: '주가순자산배수',
                data: [42, 52, 57, 69, 97, 11]
            }],

            lang: {
                noData: "해당 데이터가 없습니다.<br> 데이터 선택 기간을 변경해 보세요.",
            },

            noData: {
                style: {
                    fontWeight: 'nomal',
                    fontSize: '1rem',
                    color: '#8380A0',
                }
            },

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //D035. 주가와 주당순자산
    if ($('#chart_BICchart035').length) {
        Highcharts.chart('chart_BICchart035', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart035',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                marginTop: 40,
                marginBottom: 70,

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#404fc3", "#5CAC00"],
            title: {
                style: {
                    fontSize: '0',
                },
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 달러</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: [{
                labels: {
                    format: '{value} 달러',
                    style: {
                        color: ["#404fc3"],
                    }
                },
                title: {
                    text: null,
                },
            }, {
                labels: {
                    format: '{value} 달러',
                    style: {
                        color: ["#5CAC00"],
                    }
                },
                title: {
                    text: null,
                },
                opposite: true
            }],

            credits: {
                text: '초이스스탁US',
                href: false,
                style: {
                    fontSize: '12px',
                    cursor: 'text',
                },
            },

            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG"],
                    }
                },
            },

            series: [{
                type: 'line',
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0],
                name: '주당순자산'
            }, {
                name: '주가',
                type: 'line',
                yAxis: 1,
                data: [62, 53, 35, 34, 23, 12]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }


});
// 0219 17:00