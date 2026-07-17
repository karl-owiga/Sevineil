// Mobile nav toggle
(function(){
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('primaryNav');
  if(!toggle || !nav) return;
  toggle.addEventListener('click', function(){
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
})();

// Catalog filter (pricing page)
(function(){
  const filterRow = document.getElementById('filterRow');
  const grid = document.getElementById('catalogGrid');
  if(!filterRow || !grid) return;
  const buttons = filterRow.querySelectorAll('.filter-btn');
  const cards = grid.querySelectorAll('.piece-card');

  filterRow.addEventListener('click', function(e){
    const btn = e.target.closest('.filter-btn');
    if(!btn) return;
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.getAttribute('data-cat');
    cards.forEach(card => {
      const show = cat === 'all' || card.getAttribute('data-cat') === cat;
      card.style.display = show ? '' : 'none';
    });
  });
})();
