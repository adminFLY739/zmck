document.addEventListener('DOMContentLoaded', () => {
    // Common chart options
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    boxWidth: 12,
                    usePointStyle: true,
                    pointStyle: 'circle',
                    font: {
                        size: 11
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                titleColor: '#1f2937',
                bodyColor: '#4b5563',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                padding: 10,
                boxPadding: 6,
                usePointStyle: true,
                callbacks: {
                    label: function(context) {
                        return `${context.dataset.label}: ${context.raw}`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                ticks: {
                    font: {
                        size: 11
                    }
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                }
            },
            x: {
                ticks: {
                    font: {
                        size: 11
                    }
                },
                grid: {
                    display: false
                }
            }
        }
    };

    // 1. Model Component Contributions Chart
    const componentCtx = document.getElementById('componentChart').getContext('2d');
    new Chart(componentCtx, {
        type: 'bar',
        data: {
            labels: ['基础模型', '带可供性感知', '带互动姿势', '完整GAP3DS'],
            datasets: [
                {
                    label: '轨迹误差 (mm)',
                    data: [42.3, 35.8, 30.2, 24.6],
                    backgroundColor: 'rgba(59, 130, 246, 0.7)',
                    borderColor: 'rgba(59, 130, 246, 1)',
                    borderWidth: 1
                },
                {
                    label: '姿势准确性 (%)',
                    data: [68.5, 76.2, 82.4, 89.5],
                    backgroundColor: 'rgba(16, 185, 129, 0.7)',
                    borderColor: 'rgba(16, 185, 129, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: chartOptions
    });

    // 2. Affordance Attributes Impact Chart
    const affordanceCtx = document.getElementById('affordanceChart').getContext('2d');
    new Chart(affordanceCtx, {
        type: 'radar',
        data: {
            labels: ['物体识别', '空间感知', '意图预测', '动作分类', '语义一致性'],
            datasets: [
                {
                    label: '没有可供性感知',
                    data: [65, 59, 40, 51, 42],
                    backgroundColor: 'rgba(239, 68, 68, 0.2)',
                    borderColor: 'rgba(239, 68, 68, 0.8)',
                    pointBackgroundColor: 'rgba(239, 68, 68, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(239, 68, 68, 1)'
                },
                {
                    label: '有可供性感知',
                    data: [85, 78, 82, 84, 90],
                    backgroundColor: 'rgba(16, 185, 129, 0.2)',
                    borderColor: 'rgba(16, 185, 129, 0.8)',
                    pointBackgroundColor: 'rgba(16, 185, 129, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(16, 185, 129, 1)'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                line: {
                    borderWidth: 2
                }
            },
            scales: {
                r: {
                    angleLines: {
                        display: true,
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    suggestedMin: 30,
                    suggestedMax: 100,
                    ticks: {
                        backdropColor: 'transparent',
                        font: {
                            size: 10
                        }
                    }
                }
            }
        }
    });

    // 3. Dual-Prompt Mechanism Effectiveness Chart
    const promptCtx = document.getElementById('promptChart').getContext('2d');
    new Chart(promptCtx, {
        type: 'bar',
        data: {
            labels: ['仅互动位置', '仅互动姿势', '反向提示', '双提示（最佳）'],
            datasets: [
                {
                    label: '轨迹准确性',
                    data: [78.6, 65.3, 60.8, 86.2],
                    backgroundColor: 'rgba(59, 130, 246, 0.7)',
                    borderColor: 'rgba(59, 130, 246, 1)',
                    borderWidth: 1
                },
                {
                    label: '姿势准确性',
                    data: [71.4, 82.5, 68.3, 89.5],
                    backgroundColor: 'rgba(16, 185, 129, 0.7)',
                    borderColor: 'rgba(16, 185, 129, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: chartOptions
    });

    // 4. Optimal Number of Interactive Poses Chart
    const posesCtx = document.getElementById('posesChart').getContext('2d');
    new Chart(posesCtx, {
        type: 'line',
        data: {
            labels: ['1', '2', '4', '8', '16'],
            datasets: [
                {
                    label: '准确性',
                    data: [76.2, 82.5, 87.8, 89.7, 90.1],
                    borderColor: 'rgba(59, 130, 246, 1)',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.3,
                    fill: true
                },
                {
                    label: '计算成本',
                    data: [20, 35, 55, 78, 95],
                    borderColor: 'rgba(239, 68, 68, 1)',
                    backgroundColor: 'rgba(239, 68, 68, 0.05)',
                    borderDash: [5, 5],
                    tension: 0.3,
                    fill: true
                }
            ]
        },
        options: {
            ...chartOptions,
            plugins: {
                ...chartOptions.plugins,
                annotation: {
                    annotations: {
                        optimal: {
                            type: 'line',
                            xMin: 3,
                            xMax: 3,
                            borderColor: 'rgba(16, 185, 129, 0.8)',
                            borderWidth: 2,
                            borderDash: [6, 6],
                            label: {
                                content: 'Optimal',
                                enabled: true,
                                position: 'top'
                            }
                        }
                    }
                }
            }
        }
    });

    // 5. Scene Density vs. Performance Chart
    const densityCtx = document.getElementById('densityChart').getContext('2d');
    new Chart(densityCtx, {
        type: 'line',
        data: {
            labels: ['2048', '4096', '8192', '16384', '32768'],
            datasets: [
                {
                    label: '准确性 (%)',
                    data: [82.5, 86.3, 89.7, 92.1, 93.4],
                    borderColor: 'rgba(59, 130, 246, 1)',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.3,
                    yAxisID: 'y',
                    fill: true
                },
                {
                    label: '显存使用 (GB)',
                    data: [2.1, 3.4, 5.8, 10.2, 18.5],
                    borderColor: 'rgba(239, 68, 68, 1)',
                    backgroundColor: 'transparent',
                    tension: 0.3,
                    yAxisID: 'y1',
                    borderDash: [5, 5]
                }
            ]
        },
        options: {
            ...chartOptions,
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: '准确性 (%)',
                        font: {
                            size: 11
                        }
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    grid: {
                        drawOnChartArea: false
                    },
                    title: {
                        display: true,
                        text: '显存使用 (GB)',
                        font: {
                            size: 11
                        }
                    }
                },
                x: {
                    ticks: {
                        font: {
                            size: 11
                        }
                    },
                    title: {
                        display: true,
                        text: '场景点密度',
                        font: {
                            size: 11
                        }
                    }
                }
            }
        }
    });

    // 6. SceneParser Quality Impact Chart
    const parserCtx = document.getElementById('parserChart').getContext('2d');
    new Chart(parserCtx, {
        type: 'bar',
        data: {
            labels: ['基础解析器', '中等质量', 'SoftGroup（高）'],
            datasets: [
                {
                    label: '轨迹对齐',
                    data: [76.4, 82.8, 89.5],
                    backgroundColor: 'rgba(59, 130, 246, 0.7)',
                    borderColor: 'rgba(59, 130, 246, 1)',
                    borderWidth: 1
                },
                {
                    label: '姿势准确性',
                    data: [79.2, 84.5, 91.3],
                    backgroundColor: 'rgba(16, 185, 129, 0.7)',
                    borderColor: 'rgba(16, 185, 129, 1)',
                    borderWidth: 1
                },
                {
                    label: '交互区域检测',
                    data: [72.6, 81.9, 92.8],
                    backgroundColor: 'rgba(251, 191, 36, 0.7)',
                    borderColor: 'rgba(251, 191, 36, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: chartOptions
    });
});
