const fs = require('fs');
let html = fs.readFileSync('d:/svs/index.html', 'utf8');

html = html.replace(/<section class="section careers-section" id="careers">[\s\S]*?<\/section>/, 
`        <!-- ===== CAREER OPPORTUNITIES ===== -->
        <section class="section careers-section" id="careers">
            <div class="container">
                <div class="section-header">
                    <span class="section-label">Career Opportunities / Job Roles</span>
                    <h2 class="section-title">Career Opportunities after Computer Science Engineering</h2>
                </div>
                <div class="careers-intro" style="text-align: left;">
                    <div class="careers-highlight-box">
                        <div class="highlight-icon" aria-hidden="true">&#x1F4A1;</div>
                        <p>Graduating with a degree in computer science engineering opens the door to a broad spectrum of exciting and lucrative career opportunities. The field of Computer Science Engineering offers an incredible range of career paths that blend creativity, logic, and innovation. As technology continues to advance, CSE graduates are in high demand across every industry — from startups to global tech giants.</p>
                        <p>Ultimately, the versatility of a Computer Science Engineering degree ensures that graduates are not limited to one path. Whether in research, product development, or innovation leadership, the opportunities are endless for those ready to learn, adapt, and grow in the ever-evolving world of technology.</p>
                    </div>
                </div>
                <div class="career-cards-wrapper" style="margin-top: 2rem;">
                    <p style="text-align: center; margin-bottom: 2rem; font-size: 1.1rem; color: var(--grey-700);">Graduates with a degree in CSE are in high demand across various sectors, including:</p>
                    <div class="career-grid">
                        <div class="career-card" style="--bg: url('https://images.unsplash.com/photo-1607799279861-4dd990096570?auto=format&fit=crop&q=80&w=600');">
                            <h3 class="career-card-title">Software Developer</h3>
                        </div>
                        <div class="career-card" style="--bg: url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600');">
                            <h3 class="career-card-title">Data Scientist/Analyst</h3>
                        </div>
                        <div class="career-card" style="--bg: url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600');">
                            <h3 class="career-card-title">Cybersecurity Analyst</h3>
                        </div>
                        <div class="career-card" style="--bg: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600');">
                            <h3 class="career-card-title">Cloud Engineer</h3>
                        </div>
                        <div class="career-card" style="--bg: url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600');">
                            <h3 class="career-card-title">Artificial Intelligence/Machine Learning Engineer</h3>
                        </div>
                        <div class="career-card" style="--bg: url('https://images.unsplash.com/photo-1639762681485-074b7f4ec651?auto=format&fit=crop&q=80&w=600');">
                            <h3 class="career-card-title">Blockchain Developer</h3>
                        </div>
                        <div class="career-card" style="--bg: url('https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=600');">
                            <h3 class="career-card-title">DevOps Engineer</h3>
                        </div>
                        <div class="career-card" style="--bg: url('https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=600');">
                            <h3 class="career-card-title">Game Developer</h3>
                        </div>
                        <div class="career-card" style="--bg: url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600');">
                            <h3 class="career-card-title">Full stack developer</h3>
                        </div>
                        <div class="career-card" style="--bg: url('https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600');">
                            <h3 class="career-card-title">UX/UI Designer</h3>
                        </div>
                        <div class="career-card" style="--bg: url('https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=600');">
                            <h3 class="career-card-title">Web /App developer</h3>
                        </div>
                        <div class="career-card" style="--bg: url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600');">
                            <h3 class="career-card-title">IoT (Internet of Things) Engineer and more</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>`);

fs.writeFileSync('d:/svs/index.html', html);
