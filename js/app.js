(function(){
  var TIPOS=['sim','medida','ciencia','nao'];
  var LISTA=[['porque','Por quê'],['como','Como fazer'],['exemplo','Exemplo']];

  function el(tag,cls,text){
    var e=document.createElement(tag);
    if(cls) e.className=cls;
    if(text!==undefined) e.textContent=text;
    return e;
  }
  function mais(){
    var i=el('i',null,'+');
    i.setAttribute('aria-hidden','true');
    return i;
  }

  // ---- montagem das seções a partir de dados/*.js ----
  function montarItem(it,secao){
    if(!it||!it.pergunta||TIPOS.indexOf(it.tipo)<0){
      console.error('Entrada ignorada em "'+secao.titulo+'": falta pergunta ou tipo inválido.',it);
      return null;
    }
    var d=el('details');
    var q=el('span','q');
    q.appendChild(el('span','q-text',it.pergunta));
    var sum=el('summary');
    sum.appendChild(q);
    sum.appendChild(mais());
    d.appendChild(sum);

    var a=el('div','a');
    var p=el('p');
    p.appendChild(el('span','pill p-'+it.tipo,it.etiqueta||''));
    a.appendChild(p);
    if(it.atualizado) a.appendChild(el('p','novo','Atualizado'));
    if(it.origem) a.appendChild(el('p','src',it.origem));
    if(it.resposta) a.appendChild(el('p','lead',it.resposta));
    if(it.texto) a.appendChild(el('p',null,it.texto));
    var dl=el('dl');
    LISTA.forEach(function(par){
      if(!it[par[0]]) return;
      var linha=el('div');
      linha.appendChild(el('dt',null,par[1]));
      linha.appendChild(el('dd',null,it[par[0]]));
      dl.appendChild(linha);
    });
    if(dl.children.length) a.appendChild(dl);
    d.appendChild(a);
    return d;
  }

  function montarSecao(secao,pos){
    var s=el('section','band '+(pos%2===0?'band-b':'band-c'));
    s.setAttribute('data-group','');
    var b=el('details','block');
    var sum=el('summary');
    sum.appendChild(el('span','block-title',secao.titulo));
    sum.appendChild(el('span','block-count'));
    sum.appendChild(mais());
    b.appendChild(sum);
    var corpo=el('div','block-body');
    if(secao.intro) corpo.appendChild(el('p','lede',secao.intro));
    var faq=el('div','faq');
    (secao.itens||[]).forEach(function(it){
      var d=montarItem(it,secao);
      if(d) faq.appendChild(d);
    });
    corpo.appendChild(faq);
    b.appendChild(corpo);
    s.appendChild(b);
    return s;
  }

  var secoes=window.SECOES||[];
  var raiz=document.getElementById('secoes');
  secoes.forEach(function(secao,i){raiz.appendChild(montarSecao(secao,i));});
  // rodapé assume a faixa oposta à da última seção
  var rodape=document.getElementById('rodape');
  rodape.className='band '+(secoes.length%2===1?'band-c':'band-b');

  // ---- lista de revisão: abrir index.html?revisar ----
  if(/[?&]revisar(&|=|$)/.test(location.search)){
    var caixa=document.getElementById('revisar');
    var pend=[];
    secoes.forEach(function(secao){
      (secao.itens||[]).forEach(function(it){
        if(it&&it.revisar) pend.push(secao.titulo+' — '+it.pergunta);
      });
    });
    caixa.appendChild(el('strong',null,'Para revisar ('+pend.length+')'));
    var ul=el('ul');
    pend.forEach(function(t){ul.appendChild(el('li',null,t));});
    caixa.appendChild(ul);
    caixa.hidden=false;
  }

  // ---- busca, abrir todas, contadores ----
  var input=document.getElementById('busca');
  var result=document.getElementById('result');
  var toggle=document.getElementById('toggle');
  var empty=document.getElementById('vazio');
  var groups=[].slice.call(document.querySelectorAll('[data-group]'));
  var blocks=groups.map(function(g){return g.querySelector('details.block');});
  var items=[].slice.call(document.querySelectorAll('.faq details'));
  function norm(s){return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');}
  var texts=items.map(function(d){return norm(d.textContent);});
  function visibleItems(){return items.filter(function(d){return !d.hidden;});}
  function visibleBlocks(){return blocks.filter(function(b){return !b.parentNode.hidden;});}
  function counts(){
    blocks.forEach(function(b){
      var n=b.querySelectorAll('.faq details:not([hidden])').length;
      b.querySelector('.block-count').textContent=n+(n===1?' dúvida':' dúvidas');
    });
  }
  function filter(){
    var q=norm(input.value.trim());
    var n=0;
    items.forEach(function(d,i){
      var hit=!q||texts[i].indexOf(q)>-1;
      d.hidden=!hit;
      if(hit) n++;
      d.open=!!q&&hit;
    });
    groups.forEach(function(g,i){
      g.hidden=!g.querySelector('.faq details:not([hidden])');
      blocks[i].open=!!q&&!g.hidden;
    });
    empty.hidden=n>0;
    result.textContent=q?(n+(n===1?' dúvida encontrada':' dúvidas encontradas')):items.length+' dúvidas';
    counts();
    syncToggle();
  }
  function allOpen(){
    var vb=visibleBlocks(),vi=visibleItems();
    return vb.length>0&&vb.every(function(b){return b.open;})&&vi.every(function(d){return d.open;});
  }
  function syncToggle(){toggle.textContent=allOpen()?'Fechar todas':'Abrir todas';}
  toggle.addEventListener('click',function(){
    var open=!allOpen();
    visibleBlocks().forEach(function(b){b.open=open;});
    visibleItems().forEach(function(d){d.open=open;});
    syncToggle();
  });
  blocks.concat(items).forEach(function(d){d.addEventListener('toggle',syncToggle);});
  input.addEventListener('input',filter);
  // Enter na busca: fecha o teclado e desce até a primeira resposta
  input.addEventListener('keydown',function(e){
    if(e.key!=='Enter') return;
    e.preventDefault();
    input.blur();
    var primeiro=document.querySelector('.faq details:not([hidden])');
    if(!input.value.trim()||!primeiro) return;
    var calmo=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    setTimeout(function(){primeiro.scrollIntoView({behavior:calmo?'auto':'smooth',block:'start'});},250);
  });
  result.textContent=items.length+' dúvidas';
  counts();
})();
