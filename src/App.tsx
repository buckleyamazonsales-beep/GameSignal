import { useState } from 'react'
import './styles.css'

type Prediction = {
  player: string
  matchup: string
  market: string
  line: string
  probability: string
  note: string
}

const demoPredictions: Prediction[] = [
  {
    player: 'Player example',
    matchup: 'NHL matchup preview',
    market: 'Shots on goal',
    line: 'Over 2.5',
    probability: '—',
    note: 'Waiting for approved data',
  },
  {
    player: 'Player example',
    matchup: 'NHL matchup preview',
    market: 'Points',
    line: 'Over 0.5',
    probability: '—',
    note: 'Waiting for approved data',
  },
]

function App() {
  const [showAbout, setShowAbout] = useState(false)

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="GameSignal home">
          <img src="/gamesignal-logo.jpg" alt="GameSignal.ca" />
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#picks">Today&apos;s picks</a>
          <a href="#how-it-works">How it works</a>
          <button className="nav-button" type="button" onClick={() => setShowAbout(true)}>
            About
          </button>
          <button className="sign-in" type="button" onClick={() => alert('Sign-in will be connected when the private app backend is ready.')}>
            Sign in
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">NHL predictions for friends and family</p>
            <h1 id="hero-title">A simple place to see the picks.</h1>
            <p className="hero-text">
              GameSignal brings together upcoming NHL predictions, the numbers behind them, and a running record of what happened.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#picks">See the preview</a>
              <a className="text-link" href="#how-it-works">Learn how it works <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <aside className="hero-note" aria-label="Project status">
            <span className="status-dot" aria-hidden="true" />
            <div>
              <strong>Getting set up</strong>
              <p>The prediction model and data connections are still being built.</p>
            </div>
          </aside>
        </section>

        <section className="section" id="picks" aria-labelledby="picks-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Preview</p>
              <h2 id="picks-title">Today&apos;s picks</h2>
            </div>
            <span className="demo-label">Example cards</span>
          </div>
          <div className="prediction-grid">
            {demoPredictions.map((prediction) => (
              <article className="prediction-card" key={`${prediction.market}-${prediction.line}`}>
                <div className="card-topline">
                  <span className="sport-label">NHL</span>
                  <span className="locked-label">Not live yet</span>
                </div>
                <div className="player-row">
                  <div className="avatar-placeholder" aria-hidden="true">?</div>
                  <div>
                    <h3>{prediction.player}</h3>
                    <p>{prediction.matchup}</p>
                  </div>
                </div>
                <div className="market-row">
                  <div>
                    <span className="muted-label">{prediction.market}</span>
                    <strong>{prediction.line}</strong>
                  </div>
                  <div className="probability">
                    <span className="muted-label">Model estimate</span>
                    <strong>{prediction.probability}</strong>
                  </div>
                </div>
                <div className="card-footer">{prediction.note}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="how-section" id="how-it-works" aria-labelledby="how-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">The idea</p>
              <h2 id="how-title">Keep it clear.</h2>
            </div>
            <p className="section-intro">No magic words. Just a record of what the model thinks and what actually happens.</p>
          </div>
          <div className="steps">
            <div className="step"><span>01</span><h3>Collect</h3><p>Use approved odds and historical stats with clear timestamps.</p></div>
            <div className="step"><span>02</span><h3>Estimate</h3><p>Show the model&apos;s probability without calling anything a guarantee.</p></div>
            <div className="step"><span>03</span><h3>Track</h3><p>Keep the wins, losses, and misses so the model can be judged honestly.</p></div>
          </div>
        </section>

        <section className="notice" aria-label="Important note">
          <strong>Quick note</strong>
          <p>These are estimates, not guarantees. GameSignal will show its record openly, including the picks that miss.</p>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 GameSignal.ca</span>
        <span>Built for hockey fans in Canada.</span>
      </footer>

      {showAbout && (
        <div className="modal-backdrop" role="presentation" onClick={() => setShowAbout(false)}>
          <section className="modal" role="dialog" aria-modal="true" aria-labelledby="about-title" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" aria-label="Close about dialog" onClick={() => setShowAbout(false)}>×</button>
            <p className="eyebrow">About GameSignal</p>
            <h2 id="about-title">A small predictions project.</h2>
            <p>GameSignal is being built as a private NHL predictions site for friends and family. The goal is to test the numbers honestly before making bigger claims.</p>
          </section>
        </div>
      )}
    </div>
  )
}

export default App
