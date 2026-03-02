const fs = require('fs');
let html = fs.readFileSync('d:/svs/index.html', 'utf8');

const replacement = `                    <span class="section-label">Infrastructure</span>
                    <h2 class="section-title">Laboratories &amp; Infrastructure</h2>
                    <p class="section-sub">State-of-the-art labs equipped for hands-on learning, innovation, and research.</p>
                </div>
                <!-- Filter Tabs removed as requested -->
                <div class="labs-grid image-labs-grid" id="labsGrid">

                    <div class="lab-card" style="--bg: url('assets/os.jpg');">
                        <div class="lab-card-inner">
                            <div class="lab-card-front">
                                <h3 class="lab-name">Open Source Laboratory</h3>
                            </div>
                            <div class="lab-card-back">
                                <p class="lab-desc">Equipped with Linux-based workstations and open-source tools, this lab nurtures a culture of collaborative development and freedom in computing.</p>
                            </div>
                        </div>
                    </div>

                    <div class="lab-card" style="--bg: url('assets/Data.JPG');">
                        <div class="lab-card-inner">
                            <div class="lab-card-front">
                                <h3 class="lab-name">Data Structures &amp; Algorithms Laboratory</h3>
                            </div>
                            <div class="lab-card-back">
                                <p class="lab-desc">The DSA Lab provides an intensive environment for mastering the foundations of computer science. Students implement trees, graphs, sorting algorithms and advanced data structures.</p>
                            </div>
                        </div>
                    </div>

                    <div class="lab-card" style="--bg: url('assets/network.JPG');">
                        <div class="lab-card-inner">
                            <div class="lab-card-front">
                                <h3 class="lab-name">Network Laboratory</h3>
                            </div>
                            <div class="lab-card-back">
                                <p class="lab-desc">Featuring Cisco routers, switches, and network simulation tools, the Network Lab prepares students for real-world IT infrastructure. Hands-on experiments cover TCP/IP, routing protocols, VLANs, firewalls, and cloud networking.</p>
                            </div>
                        </div>
                    </div>

                    <div class="lab-card" style="--bg: url('assets/compiler.JPG');">
                        <div class="lab-card-inner">
                            <div class="lab-card-front">
                                <h3 class="lab-name">Compiler Design Laboratory</h3>
                            </div>
                            <div class="lab-card-back">
                                <p class="lab-desc">Students delve into the theory and practice of building programming language compilers. Practical work includes lexical analysis, parsing, semantic analysis, code generation, and optimisation.</p>
                            </div>
                        </div>
                    </div>

                    <div class="lab-card" style="--bg: url('assets/computer.JPG');">
                        <div class="lab-card-inner">
                            <div class="lab-card-front">
                                <h3 class="lab-name">Computer Vision Lab</h3>
                            </div>
                            <div class="lab-card-back">
                                <p class="lab-desc">The Computer Vision Lab is equipped with high-performance GPUs and camera systems to support deep learning-based vision projects. Students work on image recognition, object detection, facial analysis, and real-time video processing.</p>
                            </div>
                        </div>
                    </div>

                    <div class="lab-card" style="--bg: url('assets/iot.JPG');">
                        <div class="lab-card-inner">
                            <div class="lab-card-front">
                                <h3 class="lab-name">Internet of Things (IoT) / Embedded Lab</h3>
                            </div>
                            <div class="lab-card-back">
                                <p class="lab-desc">This lab bridges the physical and digital worlds with ESP8266/ESP32 modules, sensors, and actuators. Students design and prototype smart systems &mdash; from home automation to industrial monitoring.</p>
                            </div>
                        </div>
                    </div>

                    <div class="lab-card" style="--bg: url('assets/Fintech.JPG');">
                        <div class="new-lab-badge">
                            <span class="new-badge">NEW</span> Labs Added Recently
                        </div>
                        <div class="lab-card-inner">
                            <div class="lab-card-front">
                                <h3 class="lab-name">FinTech Laboratory</h3>
                            </div>
                            <div class="lab-card-back">
                                <p class="lab-desc">The FinTech Laboratory bridges the gap between academic knowledge and financial industry practice. Students explore blockchain technologies, AI-driven financial analytics, cryptocurrency systems, and payment gateway integrations.</p>
                            </div>
                        </div>
                    </div>

                    <div class="lab-card" style="--bg: url('assets/mobile.jpg');">
                        <div class="new-lab-badge">
                            <span class="new-badge">NEW</span> Labs Added Recently
                        </div>
                        <div class="lab-card-inner">
                            <div class="lab-card-front">
                                <h3 class="lab-name">Mobile Application Development Lab</h3>
                            </div>
                            <div class="lab-card-back">
                                <p class="lab-desc">Equipped with workstations supporting the complete lifecycle of mobile app development &mdash; from wireframing and UI/UX design to backend API integration, user authentication, push notifications, and app publication.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="lab-card" style="--bg: url('assets/Ar%20vr.jpg');">
                        <div class="lab-card-inner">
                            <div class="lab-card-front">
                                <h3 class="lab-name">AR / VR Laboratory</h3>
                            </div>
                            <div class="lab-card-back">
                                <p class="lab-desc">Students explore immersive 3D environments using state-of-the-art VR headsets and high-performance workstations. The centre integrates leading game engines like Unity and Unreal Engine to develop spatial computing experiences that bridge the physical and digital worlds.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- ===== ADVANCED EQUIPMENT ===== -->`;

// Note: multi_replace removed everything from <h2 class="section-title">Laboratories... to ADVANCED EQUIPMENT comment. 
// Re-insert it carefully:
html = html.replace(
    /.*<span class="section-label">Infrastructure<\/span>\s*<section class="section equipment-section" id="equipment">/,
    `${replacement}
        <section class="section equipment-section" id="equipment">`
);

fs.writeFileSync('d:/svs/index.html', html);
