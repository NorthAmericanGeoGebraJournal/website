// shared.js

function renderHeader(activePage) {
  const j = NAGJ_DATA.journal;
  const cur = NAGJ_DATA.issues[0];
  const nav = [
    { id: 'index',    label: 'Home',           href: 'index.html' },
    { id: 'archives', label: 'Archives',      href: 'archives.html' },
    { id: 'submit',   label: 'Submit',        href: 'submit.html' },
    { id: 'team',     label: 'Editorial Team',href: 'team.html' },
    { id: 'contact',  label: 'Contact',       href: 'contact.html' },
    { id: 'admin',    label: 'Admin',         href: 'admin.html' },
  ].map(p => `<a href="${p.href}" class="${p.id === activePage ? 'active' : ''}">${p.label}</a>`).join('');

  return `
<div class="topstrip">
  <span>Open Access &nbsp;·&nbsp; Peer Reviewed &nbsp;·&nbsp; No Submission Fees &nbsp;·&nbsp; ISSN ${j.issn}</span>
  <a href="contact.html">✉ Contact the Editor</a>
</div>
<header class="site-header">
  <div class="header-inner">
    <div class="header-top">
      <div class="journal-wordmark">
        <span class="journal-label">Mathematics Education &amp; Technology</span>
        <a href="index.html" style="text-decoration:none;">
          <h1 class="journal-name">North American GeoGebra Journal</h1>
        </a>
        <span class="journal-abbr">NAGJ &nbsp;·&nbsp; ${j.tagline}</span>
      </div>
      <div class="header-meta">
        <span class="current-vol">Current Issue</span>
        Vol. ${cur.volume}, No. ${cur.number} (${cur.year})<br>
        Published ${cur.published}<br>
        <a href="${j.legacyUrl}/issue/current" target="_blank">Legacy site ↗</a>
      </div>
    </div>
    <nav class="site-nav">${nav}</nav>
  </div>
</header>`;
}

function renderFooter() {
  const j = NAGJ_DATA.journal;
  return `
<footer class="site-footer">
  <div class="footer-inner">
    <div>
      <p class="footer-name">North American GeoGebra Journal</p>
      <p>An international, open-access, peer-reviewed publication on the innovative use of GeoGebra in mathematics education (K–16). Hosted at Miami University Libraries, Oxford, Ohio.</p>
    </div>
    <div>
      <p class="footer-heading">Navigate</p>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="archives.html">Archives</a></li>
        <li><a href="submit.html">Submit a Manuscript</a></li>
        <li><a href="team.html">Editorial Team</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="admin.html">Admin</a></li>
      </ul>
    </div>
    <div>
      <p class="footer-heading">Contact</p>
      <ul>
        <li><a href="contact.html">Contact the Editor</a></li>
        <li><a href="${j.legacyUrl}" target="_blank">Legacy OJS Site ↗</a></li>
        <li><a href="https://pages.github.com" target="_blank">Hosted on GitHub Pages</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-copy">
    <span>© North American GeoGebra Journal. Content licensed under Creative Commons unless otherwise noted.</span>
    <span>ISSN ${j.issn} &nbsp;·&nbsp; Founded ${j.founded}</span>
  </div>
</footer>`;
}

function articlePills(a) {
  const pdf = a.localPdf
    ? `<a href="${a.localPdf}" class="pill pdf-local">PDF</a>`
    : `<a href="${a.pdfUrl}" target="_blank" class="pill pdf">PDF</a>`;
  return `${pdf}<a href="${a.abstractUrl}" target="_blank" class="pill abstract">Abstract</a>`;
}

function renderArticleRow(a) {
  const pages = a.pages ? `<span class="article-pages">pp. ${a.pages}</span>` : '';
  return `
<li class="article-row" data-search="${(a.title + ' ' + a.authors.join(' ')).toLowerCase()}">
  <div>
    <a href="${a.abstractUrl}" target="_blank" class="article-title-link">${a.title}</a>
    <div class="article-authors">${a.authors.join('; ')}</div>
    <div class="pill-links">${articlePills(a)}</div>
  </div>
  <div>${pages}</div>
</li>`;
}
