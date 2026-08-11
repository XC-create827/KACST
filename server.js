<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>&#x625;&#x62F;&#x627;&#x631;&#x629; &#x627;&#x633;&#x62A;&#x642;&#x637;&#x627;&#x628; &#x627;&#x644;&#x643;&#x641;&#x627;&#x621;&#x627;&#x62A; &#x2014; KACST</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
<style>
  /* ============================================================
     DESIGN SYSTEM v3 \2014  "aurora, refined"
     KACST identity kept as the single signature (animated aurora +
     floating emblem + shimmer title). Everything else disciplined to
     enterprise standards: semantic tokens, 15px/1.65 base type,
     WCAG-contrast muted text, :focus-visible rings, 44px touch
     targets, 8px spacing rhythm, purposeful 150\2013 300ms motion.
     Selectors are 1:1 with the previous sheet \2014  markup unchanged.
     ============================================================ */
  :root{
    /* KACST palette */
    --bg:#081f36;
    --panel:rgba(16,54,92,0.52);
    --panel-2:rgba(30,72,116,0.52);
    --paper:#f2f7fa;
    --ink:#152736;
    --gold:#e8b93e;
    --teal:#19b8a6;
    --blue:#2f7ff0;
    --purple:#8b5cf6;
    --green:#22c07a;
    --orange:#f97340;
    --rose:#e0636c;
    /* semantic text tokens (muted lifted for 4.5:1+ on panels) */
    --text:#eef4f8;
    --muted:#a6bacc;
    --line:rgba(226,240,248,0.12);
    /* rhythm */
    --radius:14px;
    --radius-sm:9px;
    --glass-blur:saturate(150%) blur(14px);
    --shadow-1:0 4px 18px rgba(2,10,20,0.32);
    --shadow-2:0 10px 40px rgba(2,10,20,0.46);
    --spring:cubic-bezier(.34,1.56,.64,1);
    --focus:0 0 0 2px var(--bg), 0 0 0 4px var(--teal);
  }
  *{box-sizing:border-box;}
  html,body{height:100%;}
  body{
    margin:0;
    color:var(--text);
    font-family:'Tajawal',sans-serif;
    font-size:15px;line-height:1.65;
    -webkit-font-smoothing:antialiased;
    background:var(--bg);
    position:relative;
    overflow-x:hidden;
  }
  /* Signature: animated aurora mesh (the one bold element) */
  body::before, body::after{
    content:'';
    position:fixed; inset:-30%;
    z-index:-1;
    background:
      radial-gradient(38% 34% at 22% 24%, rgba(47,127,240,0.30), transparent 68%),
      radial-gradient(30% 30% at 82% 18%, rgba(139,92,246,0.22), transparent 66%),
      radial-gradient(34% 32% at 74% 82%, rgba(25,184,166,0.22), transparent 70%),
      radial-gradient(26% 26% at 14% 86%, rgba(249,115,64,0.13), transparent 66%);
    filter:blur(46px);
    animation:aurora 26s ease-in-out infinite alternate;
  }
  body::after{
    animation-duration:34s;
    animation-direction:alternate-reverse;
    opacity:.55;
    background:
      radial-gradient(30% 30% at 68% 30%, rgba(25,184,166,0.18), transparent 70%),
      radial-gradient(26% 28% at 24% 70%, rgba(47,127,240,0.18), transparent 70%);
  }
  @keyframes aurora{
    0%{transform:translate3d(0,0,0) rotate(0deg) scale(1);}
    50%{transform:translate3d(3%,-2%,0) rotate(2deg) scale(1.06);}
    100%{transform:translate3d(-3%,2%,0) rotate(-2deg) scale(1.02);}
  }
  @keyframes logoFloat{
    0%,100%{transform:translateY(0);filter:drop-shadow(0 6px 18px rgba(47,127,240,0.30));}
    50%{transform:translateY(-5px);filter:drop-shadow(0 12px 26px rgba(25,184,166,0.45));}
  }
  @keyframes shimmer{
    0%,100%{background-position:0% 0;}
    50%{background-position:100% 0;}
  }
  @keyframes rise{from{opacity:0;transform:translateY(12px);}to{opacity:1;transform:none;}}
  @keyframes pop{from{opacity:0;transform:translateY(20px) scale(.97);}to{opacity:1;transform:none;}}
  @keyframes fadeIn{from{opacity:0;}to{opacity:1;}}
  @media (prefers-reduced-motion: reduce){
    body::before, body::after{animation:none;}
    *{transition-duration:.01ms !important; animation-duration:.01ms !important;}
  }
  ::selection{background:var(--teal);color:#04211c;}

  /* Keyboard focus \2014  visible everywhere, removed nowhere */
  :focus{outline:none;}
  :focus-visible{box-shadow:var(--focus);border-radius:6px;}
  input:focus-visible,select:focus-visible,textarea:focus-visible{box-shadow:var(--focus);}

  h1,h2,h3,.display{font-family:'Tajawal',sans-serif;font-weight:800;line-height:1.35;}
  .mono{font-family:'IBM Plex Mono','Tajawal',monospace;letter-spacing:0.01em;direction:ltr;unicode-bidi:isolate;}

  /* ---- Shell ---- */
  #app{display:flex;min-height:100vh;max-width:1880px;margin:0 auto;}
  nav.sidebar{
    width:246px;flex-shrink:0;
    background:linear-gradient(180deg, rgba(13,44,74,0.88), rgba(9,30,52,0.88));
    backdrop-filter:var(--glass-blur);
    border-inline-start:1px solid var(--line);
    display:flex;flex-direction:column;
    padding:32px 0 18px;
    position:sticky; top:0; height:100vh;
  }
  .brand{padding:0 22px 22px;border-bottom:1px solid var(--line);margin-bottom:12px;}
  .brand img{
    filter:drop-shadow(0 6px 18px rgba(47,127,240,0.35));
    transition:transform .3s var(--spring);
    animation:logoFloat 6s ease-in-out infinite;
  }
  .brand img:hover{transform:scale(1.08) rotate(3deg);animation-play-state:paused;}
  .brand .display{
    font-size:20px;
    background:linear-gradient(115deg,#f2f7fa 20%, #9fd7cf 40%, #7fb2f0 55%, #f2f7fa 75%);
    background-size:220% 100%;
    -webkit-background-clip:text; background-clip:text; color:transparent;
    animation:shimmer 7s ease-in-out infinite;
  }
  .brand .mono{font-size:10.5px;color:var(--teal);letter-spacing:0.06em;margin-top:5px;display:block;direction:rtl;font-family:'Tajawal',sans-serif;opacity:.9;}

  .topaccount{
    display:flex;align-items:center;justify-content:space-between;gap:8px;
    padding:10px 14px;margin-bottom:6px;
    border-bottom:1px solid var(--line);
  }
  .topaccount .ta-name{
    font-size:12px;font-weight:800;color:var(--text);
    overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
  }
  .navtabs{display:flex;flex-direction:column;gap:4px;padding:0 12px;}
  .navtab{
    display:flex;align-items:center;gap:11px;
    min-height:44px;padding:10px 14px;border-radius:var(--radius-sm);
    color:var(--muted);cursor:pointer;font-size:14px;font-weight:700;
    position:relative;
    transition:background .2s, color .2s, transform .25s var(--spring);
  }
  .navtab::before{
    content:''; position:absolute; inset-inline-end:0; top:22%; bottom:22%;
    width:3px; border-radius:3px; background:linear-gradient(180deg,var(--teal),var(--blue));
    transform:scaleY(0); transition:transform .25s var(--spring);
  }
  .navtab:hover{background:rgba(226,240,248,0.06);color:var(--text);transform:translateX(-3px);}
  .navtab.active{
    background:linear-gradient(120deg, rgba(25,184,166,0.16), rgba(47,127,240,0.12));
    color:var(--paper);
  }
  .navtab.active::before{transform:scaleY(1);}
  .navtab svg{width:19px;height:19px;flex-shrink:0;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;opacity:.9;}
  .navtab.active svg{stroke:var(--teal);opacity:1;}
  .navtab .tabnum{display:none;}
  .navtab .count{
    margin-inline-start:auto;font-size:11px;font-family:'IBM Plex Mono',monospace;
    background:rgba(25,184,166,0.16);color:#93e3d9;
    border:1px solid rgba(25,184,166,0.35);
    padding:2px 9px;border-radius:99px;direction:ltr;
  }
  .sidebar-foot{margin-top:auto;padding:14px 22px 0;border-top:1px solid var(--line);font-size:11px;color:var(--muted);display:flex;align-items:center;gap:8px;min-height:44px;border-radius:var(--radius-sm);}
  .sidebar-foot:hover{color:var(--text);background:rgba(226,240,248,0.05);}
  #syncDot{width:9px;height:9px;border-radius:50%;background:#8b93a1;display:inline-block;box-shadow:0 0 10px currentColor;transition:background .3s;}

  main{flex:1;padding:38px 46px 70px;overflow-x:hidden;min-width:0;}

  /* ---- Page head ---- */
  .page-head{display:flex;justify-content:space-between;align-items:flex-end;gap:18px;flex-wrap:wrap;margin-bottom:24px;animation:rise .4s ease-out both;}
  .page-head h1{
    margin:0;font-size:30px;letter-spacing:-0.01em;
    background:linear-gradient(115deg,#f5fafd 40%, #a9e2da 75%, #8db9f2);
    -webkit-background-clip:text;background-clip:text;color:transparent;
  }
  .cand-edu{
    margin:2px 0 8px;font-size:11.5px;color:var(--muted);
    border-top:1px dashed var(--line);padding-top:8px;
  }
  .skillbank{
    background:rgba(8,26,44,0.35);border:1px solid var(--line);
    border-radius:var(--radius-sm);padding:12px 14px;margin-bottom:16px;
  }
  .skillbank .sb-head{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:10px;font-size:13px;}
  .skillbank .sb-target{font-size:11.5px;color:var(--muted);display:flex;gap:12px;align-items:center;}
  .skillbank .sb-target label{display:flex;gap:4px;align-items:center;cursor:pointer;}
  .sb-cats{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px;padding-bottom:10px;border-bottom:1px dashed var(--line);}
  .chip.sb-cat{cursor:pointer;opacity:.75;}
  .chip.sb-cat.on{opacity:1;border-color:var(--teal);color:var(--teal);background:rgba(25,184,166,0.1);}
  .sb-skills,.sb-suggested #sbSuggestedChips{display:flex;flex-wrap:wrap;gap:6px;}
  .chip.sb-skill{cursor:pointer;transition:all .15s;}
  .chip.sb-skill:hover{border-color:var(--teal);}
  .chip.sb-skill.on{background:rgba(25,184,166,0.16);border-color:var(--teal);color:var(--teal);font-weight:800;}
  .sb-suggested{margin-top:10px;padding-top:10px;border-top:1px dashed var(--line);}
  .qmeter{margin-bottom:14px;}
  .qm-top{display:flex;justify-content:space-between;font-size:12px;font-weight:800;margin-bottom:6px;}
  .qm-bar{height:7px;background:rgba(8,26,44,0.6);border-radius:99px;overflow:hidden;border:1px solid var(--line);}
  .qm-fill{height:100%;width:0;border-radius:99px;transition:width .4s ease, background .4s;}
  .qm-hints{display:flex;flex-direction:column;gap:2px;margin-top:8px;font-size:11.5px;color:var(--muted);}
  .jlive{
    background:rgba(25,184,166,0.06);border:1px solid rgba(25,184,166,0.25);
    border-radius:var(--radius-sm);padding:12px 14px;margin-bottom:12px;
    font-size:13px;line-height:1.8;min-height:44px;
  }
  .headstat{
    display:inline-flex;align-items:center;gap:6px;margin-top:8px;
    font-size:12px;font-weight:800;color:var(--teal);
    background:rgba(25,184,166,0.10);border:1px solid rgba(25,184,166,0.3);
    border-radius:99px;padding:4px 12px;
  }
  .page-head .sub{color:var(--muted);font-size:13.5px;margin-top:6px;max-width:640px;}

  /* ---- Stat tiles ---- */
  .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:24px;}
  .stat{
    background:var(--panel);
    backdrop-filter:var(--glass-blur);
    border:1px solid var(--line);
    border-radius:var(--radius);
    padding:18px 20px 16px;
    position:relative; overflow:hidden;
    box-shadow:var(--shadow-1);
    transition:transform .25s var(--spring), box-shadow .25s, border-color .25s;
    animation:rise .4s ease-out both;
  }
  .stats .stat:nth-child(2){animation-delay:.04s;}
  .stats .stat:nth-child(3){animation-delay:.08s;}
  .stats .stat:nth-child(4){animation-delay:.12s;}
  .stats .stat:nth-child(5){animation-delay:.16s;}
  .stats .stat:nth-child(6){animation-delay:.2s;}
  .stat:hover{transform:translateY(-3px);box-shadow:var(--shadow-2);border-color:rgba(25,184,166,0.35);}
  .stat .accent{position:absolute;inset-inline-start:0;top:0;bottom:0;width:3px;opacity:.9;}
  .stat .n{font-size:31px;font-weight:800;font-family:'IBM Plex Mono','Tajawal',monospace;letter-spacing:-0.02em;line-height:1.2;}
  .stat .l{font-size:12.5px;color:var(--muted);margin-top:4px;}

  /* ---- Toolbar + form controls ---- */
  .toolbar{display:flex;gap:10px;margin-bottom:18px;flex-wrap:wrap;animation:rise .4s ease-out both;}
  .searchbox{flex:1;min-width:220px;}
  input[type=text],input[type=email],input[type=tel],input[type=number],input[type=date],input[type=password],select,textarea{
    width:100%;
    background:rgba(8,26,44,0.55);
    border:1px solid var(--line);
    color:var(--text);border-radius:var(--radius-sm);
    min-height:44px;padding:10px 14px;font-size:14px;font-family:'Tajawal',sans-serif;
    outline:none;
    transition:border-color .2s, box-shadow .2s, background .2s;
  }
  input:focus,select:focus,textarea:focus{
    border-color:var(--teal);
    box-shadow:0 0 0 3px rgba(25,184,166,0.18);
    background:rgba(8,26,44,0.8);
  }
  select{cursor:pointer;}
  textarea{min-height:88px;line-height:1.6;}
  input[type=file]{padding:10px;background:rgba(8,26,44,0.45);border:1px dashed rgba(226,240,248,0.24);border-radius:var(--radius-sm);width:100%;color:var(--muted);font-size:12.5px;cursor:pointer;transition:border-color .2s;min-height:44px;}
  input[type=file]:hover{border-color:var(--teal);}
  label{display:block;font-size:12px;color:var(--muted);margin-bottom:6px;font-weight:700;letter-spacing:.02em;}

  /* ---- Cards ---- */
  .card-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(310px,1fr));gap:16px;}
  .idxcard{
    background:var(--panel);
    backdrop-filter:var(--glass-blur);
    border:1px solid var(--line);
    border-inline-start:3px solid var(--stage-color, var(--teal));
    border-radius:var(--radius);
    padding:18px;
    cursor:pointer;
    position:relative; overflow:hidden;
    box-shadow:var(--shadow-1);
    transition:transform .25s var(--spring), box-shadow .25s, border-color .25s;
    animation:rise .35s ease-out both;
  }
  .idxcard:hover{transform:translateY(-4px);box-shadow:var(--shadow-2);border-color:color-mix(in srgb, var(--stage-color, var(--teal)) 55%, transparent);}
  .top-row{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:10px;}
  .idxcard .name{font-size:16.5px;font-weight:800;color:var(--paper);}
  .idxcard .role{font-size:12.5px;color:var(--muted);margin-top:3px;}
  .seal{
    min-width:44px;height:44px;border-radius:50%;
    display:flex;align-items:center;justify-content:center;
    font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:700;color:#04121f;
    box-shadow:0 0 0 3px rgba(255,255,255,0.08), 0 4px 14px rgba(0,0,0,0.35);
    flex-shrink:0;
  }
  .skills{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0;}
  .chip{
    font-size:11px;font-family:'IBM Plex Mono',monospace;direction:ltr;
    background:rgba(47,127,240,0.13);color:#b3cff6;
    border:1px solid rgba(47,127,240,0.3);
    padding:4px 10px;border-radius:99px;
    transition:transform .15s var(--spring), background .15s;
  }
  .chip:hover{transform:scale(1.06);background:rgba(47,127,240,0.22);}
  .chip.ar{font-family:'Tajawal',sans-serif;direction:rtl;}
  .meta-row{display:flex;justify-content:space-between;align-items:center;font-size:12px;color:var(--muted);border-top:1px dashed var(--line);padding-top:10px;margin-top:6px;gap:8px;flex-wrap:wrap;}
  .stagepill{
    font-size:11px;color:#04121f;font-weight:800;
    padding:3px 11px;border-radius:99px;
    box-shadow:0 2px 8px color-mix(in srgb, currentColor 30%, transparent);
  }

  /* ---- Kanban ---- */
  .kanban{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:14px;align-items:start;}
  .kcol{
    background:rgba(10,32,54,0.5);
    backdrop-filter:var(--glass-blur);
    border:1px solid var(--line);border-radius:var(--radius);
    padding:12px;
    animation:rise .4s ease-out both;
  }
  .kcol-head{display:flex;justify-content:space-between;align-items:center;padding:2px 6px 10px;}
  .kcol-head .t{font-size:13px;font-weight:800;}
  .kcol-body{display:flex;flex-direction:column;gap:8px;min-height:60px;border-radius:var(--radius-sm);transition:background .2s, outline-color .2s;outline:2px dashed transparent;outline-offset:-2px;}
  .kcol-body.dragover{background:rgba(25,184,166,0.08);outline-color:rgba(25,184,166,0.5);}
  .kcard{
    background:rgba(18,52,86,0.88);
    border:1px solid var(--line);border-radius:var(--radius-sm);
    padding:11px 12px;cursor:grab;
    box-shadow:var(--shadow-1);
    transition:transform .2s var(--spring), box-shadow .2s, border-color .2s;
  }
  .kcard:hover{transform:translateY(-2px);border-color:rgba(25,184,166,0.45);box-shadow:var(--shadow-2);}
  .kcard.dragging{opacity:.45;transform:scale(.97);cursor:grabbing;}
  .kcard .kn{font-size:13.5px;font-weight:800;color:var(--paper);}
  .kcard .kr{font-size:11.5px;color:var(--muted);margin-top:2px;}
  .kcard .kmatch{
    display:inline-block;margin-top:4px;font-size:10px;font-weight:800;
    color:var(--teal);background:rgba(25,184,166,0.12);
    border:1px solid rgba(25,184,166,0.3);border-radius:99px;padding:2px 8px;
  }
  .kcard .kstage{
    width:100%;margin-top:8px;padding:6px 8px;font-size:11px;
    background:rgba(8,26,44,0.6);border:1px solid var(--line);
    border-radius:8px;color:var(--text);cursor:pointer;
  }
  .kcard .kstage:focus{border-color:var(--teal);outline:none;}
  .kcard .kd{font-size:10.5px;color:var(--muted);opacity:.8;margin-top:5px;font-family:'IBM Plex Mono',monospace;direction:ltr;text-align:right;}

  /* ---- Tables ---- */
  table{width:100%;border-collapse:separate;border-spacing:0;font-size:14px;background:var(--panel);backdrop-filter:var(--glass-blur);border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-1);}
  thead th{
    text-align:right;font-size:11px;letter-spacing:.05em;color:var(--muted);
    padding:12px;border-bottom:1px solid var(--line);
    background:rgba(8,26,44,0.5);font-weight:800;
  }
  tbody td{padding:13px 12px;border-bottom:1px solid var(--line);vertical-align:middle;}
  tbody tr{transition:background .15s;}
  tbody tr:nth-child(even){background:rgba(226,240,248,0.02);}
  tbody tr:hover{background:rgba(226,240,248,0.05);}
  tbody tr:last-child td{border-bottom:none;}
  .rowlink:hover strong{color:var(--teal);}
  .scoreband{font-family:'IBM Plex Mono',monospace;font-weight:700;direction:ltr;unicode-bidi:isolate;text-shadow:0 0 14px currentColor;}
  /* RTL tables: LTR number/date/email cells must stay under their
     right-aligned headers */
  td.scoreband, td.mono, tbody td[style*="direction:ltr"]{text-align:right;}

  /* ---- Buttons (44px touch minimum) ---- */
  .btn{
    border:none;cursor:pointer;font-family:'Tajawal',sans-serif;font-weight:800;
    font-size:14px;min-height:44px;padding:10px 20px;border-radius:var(--radius-sm);
    display:inline-flex;align-items:center;gap:6px;
    transition:transform .2s var(--spring), box-shadow .2s, background .2s, border-color .2s;
  }
  .btn:active{transform:scale(.97);}
  .btn-primary{
    background:linear-gradient(120deg,var(--teal),#128d7f 60%, var(--blue));
    background-size:180% 100%;
    color:#03110d;
    box-shadow:0 4px 16px rgba(25,184,166,0.35);
  }
  .btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 26px rgba(25,184,166,0.5);background-position:80% 0;}
  .btn-ghost{
    background:rgba(226,240,248,0.05);color:var(--text);
    border:1px solid var(--line);
  }
  .btn-ghost:hover{border-color:var(--teal);background:rgba(25,184,166,0.1);transform:translateY(-1px);}
  .btn-danger{background:rgba(224,99,108,0.12);color:#f3b1b6;border:1px solid rgba(224,99,108,0.4);}
  .btn-danger:hover{background:rgba(224,99,108,0.25);color:#ffd9dc;transform:translateY(-1px);}
  .btn-sm{min-height:36px;padding:6px 13px;font-size:12.5px;}
  .btn[disabled]{opacity:.5;cursor:default;transform:none !important;}

  /* ---- Empty state ---- */
  .empty{
    text-align:center;padding:56px 20px;color:var(--muted);
    background:var(--panel);backdrop-filter:var(--glass-blur);
    border:1px dashed rgba(226,240,248,0.18);border-radius:var(--radius);
    animation:rise .4s ease-out both;
  }
  .empty .display{font-size:19px;color:#cfdce5;margin-bottom:8px;}

  /* ---- Modal ---- */
  .overlay{
    position:fixed;inset:0;background:rgba(4,14,25,0.62);
    backdrop-filter:blur(8px);
    display:none;align-items:flex-start;justify-content:center;
    padding:40px 20px;overflow-y:auto;z-index:50;
  }
  .overlay.open{display:flex;animation:fadeIn .2s both;}
  .modal{
    background:linear-gradient(165deg, rgba(16,48,80,0.94), rgba(10,32,56,0.96));
    backdrop-filter:var(--glass-blur);
    border:1px solid rgba(226,240,248,0.14);
    border-radius:18px;max-width:680px;width:100%;
    padding:26px 28px 24px;
    box-shadow:0 30px 80px rgba(0,0,0,0.55);
    animation:pop .3s var(--spring) both;
  }
  .modal-head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px;gap:14px;}
  .modal-head h2{margin:0;font-size:21px;}
  .xbtn{cursor:pointer;font-size:24px;line-height:1;color:var(--muted);min-width:44px;min-height:44px;display:inline-flex;align-items:center;justify-content:center;border-radius:50%;transition:color .2s, transform .25s var(--spring), background .2s;}
  .xbtn:hover{color:var(--rose);background:rgba(224,99,108,0.1);transform:rotate(90deg);}
  .field{margin-bottom:14px;}
  .field-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
  .modal-actions{display:flex;gap:10px;justify-content:flex-start;flex-wrap:wrap;margin-top:20px;padding-top:16px;border-top:1px solid var(--line);}

  /* ---- Detail sections ---- */
  .detail-section{margin-bottom:22px;}
  .detail-section h3{
    font-size:12.5px;letter-spacing:.05em;color:var(--teal);margin:0 0 10px;
    display:flex;align-items:center;gap:8px;
  }
  .detail-section h3::after{content:'';flex:1;height:1px;background:linear-gradient(90deg, rgba(25,184,166,0.4), transparent);}
  .detail-header{display:flex;gap:14px;align-items:center;margin-bottom:14px;}
  .detail-tags{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px;}
  .stagesel{display:flex;gap:6px;flex-wrap:wrap;}
  .stagesel span{
    font-size:12.5px;min-height:38px;display:inline-flex;align-items:center;padding:6px 14px;border-radius:99px;cursor:pointer;
    border:1px solid var(--line);color:var(--muted);font-weight:700;
    transition:all .2s var(--spring);
  }
  .stagesel span:hover{border-color:var(--teal);color:var(--text);transform:translateY(-1px);}
  .stagesel span.active{color:#04121f;font-weight:800;box-shadow:0 2px 10px color-mix(in srgb, currentColor 30%, transparent);}
  .assess-row{display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px dashed var(--line);font-size:13px;gap:10px;}
  .assess-row:last-child{border-bottom:none;}
  .qlist{display:flex;flex-direction:column;gap:8px;}
  .qitem{
    background:rgba(8,26,44,0.5);border:1px solid var(--line);
    border-inline-start:3px solid var(--gold);
    border-radius:var(--radius-sm);padding:11px 14px;font-size:13px;line-height:1.7;
    transition:border-color .2s, transform .2s;
  }
  .qitem:hover{border-inline-start-color:var(--teal);transform:translateX(-3px);}
  .resume-box{
    background:rgba(8,26,44,0.5);border:1px solid var(--line);border-radius:var(--radius-sm);
    padding:14px;font-size:12px;line-height:1.8;font-family:'IBM Plex Mono',monospace;
    color:#d3dfe8;max-height:190px;overflow-y:auto;white-space:pre-wrap;direction:ltr;text-align:left;
  }

  /* ---- Insights ---- */
  .insights{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:12px;margin-bottom:24px;}
  .insight{
    background:var(--panel);backdrop-filter:var(--glass-blur);
    border:1px solid var(--line);border-radius:var(--radius);
    border-inline-start:3px solid var(--icolor,var(--teal));
    padding:14px 16px;font-size:13px;line-height:1.7;
    box-shadow:var(--shadow-1);
    animation:rise .4s ease-out both;
    transition:transform .2s var(--spring), box-shadow .2s;
  }
  .insight:hover{transform:translateY(-2px);box-shadow:var(--shadow-2);}
  .insight .ic{font-size:11px;font-weight:800;letter-spacing:.05em;color:var(--icolor,var(--teal));margin-bottom:5px;display:block;}
  .insight .iv{color:#e0ebf2;}
  .insight .im{font-family:'IBM Plex Mono',monospace;font-weight:700;color:var(--icolor,var(--teal));direction:ltr;unicode-bidi:isolate;}

  ::-webkit-scrollbar{width:9px;height:9px;}
  ::-webkit-scrollbar-track{background:transparent;}
  ::-webkit-scrollbar-thumb{background:rgba(166,186,204,0.25);border-radius:99px;}
  ::-webkit-scrollbar-thumb:hover{background:rgba(25,184,166,0.5);}

  /* ---- Public landing (pre-login) ---- */
  .landing, .apply-page{direction:rtl;text-align:right;}
  .landing{position:fixed;inset:0;z-index:200;overflow-y:auto;background:var(--bg);}
  .landing::before{
    content:'';position:fixed;inset:-30%;z-index:0;pointer-events:none;
    background:
      radial-gradient(38% 34% at 24% 22%, rgba(47,127,240,0.30), transparent 68%),
      radial-gradient(30% 30% at 80% 20%, rgba(139,92,246,0.22), transparent 66%),
      radial-gradient(34% 32% at 72% 84%, rgba(25,184,166,0.22), transparent 70%);
    filter:blur(46px);
    animation:aurora 26s ease-in-out infinite alternate;
  }
  .landing-inner{position:relative;z-index:1;max-width:1080px;margin:0 auto;padding:64px 28px 80px;}
  .landing-hero{text-align:center;padding:24px 0 44px;animation:rise .5s ease-out both;}
  .landing-hero img{width:120px;height:120px;object-fit:contain;display:block;margin:0 auto 18px;
    filter:drop-shadow(0 10px 30px rgba(47,127,240,0.4));animation:logoFloat 6s ease-in-out infinite;}
  .landing-hero h1{
    margin:0;font-size:38px;letter-spacing:-0.01em;
    background:linear-gradient(115deg,#f2f7fa 20%,#9fd7cf 40%,#7fb2f0 55%,#f2f7fa 75%);
    background-size:220% 100%;
    -webkit-background-clip:text;background-clip:text;color:transparent;
    animation:shimmer 7s ease-in-out infinite;
  }
  .landing-hero .org{font-size:16px;color:var(--text);margin-top:10px;font-weight:700;}
  .landing-hero .tag{font-size:13.5px;color:var(--muted);margin-top:6px;}
  .vm-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px;margin-bottom:40px;}
  .vm-card{
    background:var(--panel);backdrop-filter:var(--glass-blur);
    border:1px solid var(--line);border-radius:var(--radius);
    border-inline-start:3px solid var(--teal);
    padding:22px 24px;box-shadow:var(--shadow-1);
    animation:rise .5s ease-out both;
  }
  .vm-card:nth-child(2){border-inline-start-color:var(--blue);animation-delay:.06s;}
  .vm-card h2{margin:0 0 10px;font-size:17px;color:var(--teal);}
  .vm-card:nth-child(2) h2{color:#8db9f2;}
  .vm-card p{margin:0;font-size:14.5px;line-height:1.9;color:var(--text);}
  .landing-sec-title{
    text-align:center;font-size:22px;margin:0 0 18px;
    background:linear-gradient(115deg,#f5fafd 40%,#a9e2da 75%,#8db9f2);
    -webkit-background-clip:text;background-clip:text;color:transparent;
  }
  .sector-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin-bottom:48px;}
  .sector-card{
    background:var(--panel);backdrop-filter:var(--glass-blur);
    border:1px solid var(--line);border-radius:var(--radius);
    padding:20px;text-align:center;box-shadow:var(--shadow-1);
    transition:transform .25s var(--spring), box-shadow .25s, border-color .25s;
    animation:rise .5s ease-out both;
  }
  .sector-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-2);border-color:var(--scolor,var(--teal));}
  .sector-card svg{width:34px;height:34px;stroke:var(--scolor,var(--teal));fill:none;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;margin-bottom:10px;}
  .sector-card h3{margin:0 0 6px;font-size:15.5px;color:var(--paper);}
  .sector-card p{margin:0;font-size:12.5px;color:var(--muted);line-height:1.8;}
  .landing-cta{text-align:center;padding:8px 0 20px;animation:rise .5s ease-out both;}
  .landing-cta .btn{font-size:16px;padding:14px 44px;}
  .landing-login{max-width:400px;margin:22px auto 0;display:none;}
  .landing-login.open{display:block;animation:pop .3s var(--spring) both;}
  .landing-foot{text-align:center;font-size:11.5px;color:var(--muted);margin-top:40px;padding-top:18px;border-top:1px solid var(--line);}
  /* ---- Landing slides (scroll-snap) ---- */
  .landing, .apply-page{direction:rtl;text-align:right;}
  .landing{scroll-snap-type:y proximity;scroll-behavior:smooth;}
  .lslide{
    min-height:100vh;display:flex;align-items:center;justify-content:center;
    scroll-snap-align:start;position:relative;z-index:1;
    padding:56px 28px;
  }
  .landing-hero{text-align:center;}
  .scroll-hint{margin-top:34px;font-size:12.5px;color:var(--muted);animation:hintFloat 2.2s ease-in-out infinite;}
  @keyframes hintFloat{0%,100%{transform:translateY(0);opacity:.7;}50%{transform:translateY(6px);opacity:1;}}
  .sector-slide{--scolor:var(--teal);}
  .ss-grid{
    display:grid;grid-template-columns:1.05fr .95fr;gap:48px;align-items:center;
    max-width:1080px;width:100%;
  }
  .ss-grid.flip .ss-text{order:2;}
  .ss-grid.flip .ss-visual{order:1;}
  .ss-kicker{font-size:12px;font-weight:800;letter-spacing:.08em;color:var(--scolor);margin-bottom:8px;}
  .ss-text h2{
    margin:0 0 10px;font-size:34px;
    background:linear-gradient(115deg,#f5fafd 30%, color-mix(in srgb, var(--scolor) 70%, #fff) 80%);
    -webkit-background-clip:text;background-clip:text;color:transparent;
  }
  .ss-desc{font-size:15px;color:var(--text);margin:0 0 18px;line-height:1.9;}
  .ss-block{
    background:var(--panel);backdrop-filter:var(--glass-blur);
    border:1px solid var(--line);border-inline-start:3px solid var(--scolor);
    border-radius:var(--radius-sm);padding:12px 16px;margin-bottom:10px;
  }
  .ss-block span{display:block;font-size:11px;font-weight:800;letter-spacing:.05em;color:var(--scolor);margin-bottom:4px;}
  .ss-block p{margin:0;font-size:13.5px;line-height:1.85;color:var(--text);}
  .ss-chips{display:flex;flex-wrap:wrap;gap:7px;margin-top:14px;}
  .ss-visual{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;min-height:460px;}
  .ss-model{position:relative;width:min(340px,76vw);aspect-ratio:1;display:flex;align-items:center;justify-content:center;}
  .sector-art{width:88%;height:88%;stroke:var(--scolor);animation:artFloat 7s ease-in-out infinite;
    filter:drop-shadow(0 10px 26px color-mix(in srgb, var(--scolor) 24%, transparent));}
  .sector-art circle{fill:var(--scolor);stroke:none;}
  .sector-art circle[stroke-width]{fill:none;stroke:var(--scolor);}
  @keyframes artFloat{0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);}}
  .ss-pillars{display:flex;flex-direction:column;gap:8px;margin-top:14px;}
  .ss-pillar{
    background:rgba(8,26,44,0.45);border:1px solid var(--line);
    border-inline-start:3px solid color-mix(in srgb, var(--scolor) 65%, transparent);
    border-radius:var(--radius-sm);padding:10px 14px;
    transition:border-color .2s, transform .2s var(--spring);
  }
  .ss-pillar:hover{border-inline-start-color:var(--scolor);transform:translateX(-3px);}
  .ss-pillar strong{display:block;font-size:13.5px;color:var(--paper);margin-bottom:2px;}
  .ss-pillar p{margin:0;font-size:12.5px;color:var(--muted);line-height:1.75;}
  .ss-outcomes{
    width:min(340px,80vw);
    background:var(--panel);backdrop-filter:var(--glass-blur);
    border:1px solid var(--line);border-radius:var(--radius);
    padding:14px 18px;box-shadow:var(--shadow-1);
  }
  .ss-outcomes > span{display:block;font-size:11px;font-weight:800;letter-spacing:.05em;color:var(--scolor);margin-bottom:8px;}
  .ss-outcome{
    position:relative;font-size:13px;color:var(--text);line-height:1.8;
    padding-inline-start:22px;margin-bottom:6px;
  }
  .ss-outcome:last-child{margin-bottom:0;}
  .ss-outcome::before{
    content:'\2713 ';position:absolute;inset-inline-start:0;top:0;
    color:var(--scolor);font-weight:800;
  }
  .landing-cta{text-align:center;}
  .ap-progress{height:6px;background:#e6edf4;border-radius:99px;overflow:hidden;margin-bottom:10px;}
  .ap-bar{height:100%;width:0;border-radius:99px;
    background:linear-gradient(90deg,#149a8b,#2f7ff0 55%,#6d3fd6);
    transition:width .5s var(--spring);}
  .ap-steps{display:flex;gap:14px;margin-bottom:14px;font-size:12px;font-weight:800;}
  .ap-step{color:#8aa1b5;transition:color .3s;}
  .ap-step.active{color:#122b42;}
  .ap-check{
    width:74px;height:74px;border-radius:50%;margin:0 auto;
    display:flex;align-items:center;justify-content:center;
    font-size:38px;color:#fff;font-weight:800;
    background:linear-gradient(120deg,#149a8b,#2f7ff0);
    box-shadow:0 12px 34px rgba(25,184,166,0.35);
    animation:pop .5s var(--spring) both;
  }
  /* =========================================================
     THEMES \2014  \0623 \0648 \0631 \0648 \0631 \0627  (\0627 \0644 \0627 \0641 \062a \0631 \0627 \0636 \064a \060c  \0627 \0644 \0647 \0648 \064a \0629  \0627 \0644 \062d \0627 \0644 \064a \0629 ) / \062f \0627 \0643 \0646  \0647 \0627 \062f \0626  / \0641 \0627 \062a \062d .
     Aurora is the untouched default; the other two override the
     token layer plus the few hardcoded dark surfaces.
     ========================================================= */
  html[data-theme="dark"] body::before,
  html[data-theme="dark"] body::after{display:none;}
  html[data-theme="dark"]{
    --bg:#000000;
    --panel:#0c0e10;
    --panel-2:#131619;
    --line:rgba(255,255,255,0.09);
    --shadow-1:0 4px 18px rgba(0,0,0,0.55);
  }
  html[data-theme="dark"] body{background:#000000;}
  html[data-theme="dark"] .sidebar{background:#050607;border-left-color:var(--line);}
  html[data-theme="dark"] .modal{
    background:#0c0e10;backdrop-filter:none;
    border:1px solid rgba(255,255,255,0.1);
  }
  html[data-theme="dark"] .idxcard, html[data-theme="dark"] .kcard,
  html[data-theme="dark"] .detail-section, html[data-theme="dark"] table,
  html[data-theme="dark"] .toolbar, html[data-theme="dark"] .stat-tile{
    background:#0c0e10;border-color:var(--line);
  }
  html[data-theme="dark"] .kcol{background:#08090a;border-color:var(--line);}
  html[data-theme="dark"] .skillbank, html[data-theme="dark"] .kcard .kstage,
  html[data-theme="dark"] .qm-bar, html[data-theme="dark"] .resume-box,
  html[data-theme="dark"] input, html[data-theme="dark"] select,
  html[data-theme="dark"] textarea, html[data-theme="dark"] .searchbox{
    background:#08090b;border-color:rgba(255,255,255,0.1);color:var(--text);
  }
  html[data-theme="dark"] tbody tr:nth-child(even){background:#0a0c0e;}

  html[data-theme="light"] body::before,
  html[data-theme="light"] body::after{display:none;}
  html[data-theme="light"]{
    --bg:#f2f5f8;
    --panel:#ffffff;
    --panel-2:#f5f8fb;
    --text:#16324a;
    --muted:#5b7286;
    --line:#dfe8f0;
    --shadow-1:0 4px 18px rgba(18,43,66,0.08);
  }
  html[data-theme="light"] body{background:#f2f5f8;color:var(--text);}
  html[data-theme="light"] .modal{
    background:#ffffff;backdrop-filter:none;
    border:1px solid var(--line);box-shadow:0 18px 60px rgba(18,43,66,0.18);
  }
  html[data-theme="light"] .sidebar{background:#ffffff;border-left-color:var(--line);}
  html[data-theme="light"] .navtab.active{background:rgba(25,184,166,0.1);}
  html[data-theme="light"] .idxcard, html[data-theme="light"] .kcol,
  html[data-theme="light"] .kcard, html[data-theme="light"] .detail-section,
  html[data-theme="light"] table, html[data-theme="light"] .toolbar,
  html[data-theme="light"] .stat-tile{
    background:#ffffff;border-color:var(--line);
  }
  html[data-theme="light"] .kcol{background:#f5f8fb;}
  html[data-theme="light"] .skillbank, html[data-theme="light"] .kcard .kstage,
  html[data-theme="light"] .qm-bar, html[data-theme="light"] .resume-box,
  html[data-theme="light"] input, html[data-theme="light"] select,
  html[data-theme="light"] textarea, html[data-theme="light"] .searchbox{
    background:#fbfdfe;border-color:#d7e2ec;color:var(--text);
  }
  html[data-theme="light"] .mono[style*="rgba(8,26,44"]{
    background:#f0f4f8 !important;color:var(--text);
  }
  html[data-theme="light"] .btn-ghost{background:#ffffff;color:var(--text);border-color:#cfdae6;}
  html[data-theme="light"] .chip{background:#f0f5f9;border-color:#d7e2ec;color:#3d5a73;}
  html[data-theme="light"] .chip.sb-cat.on, html[data-theme="light"] .chip.sb-skill.on{
    background:rgba(25,184,166,0.12);border-color:var(--teal);color:#0f8577;
  }
  html[data-theme="light"] tbody tr:nth-child(even){background:#f7fafc;}
  /* Fix: chosen values in dropdowns were inheriting the dark theme's
     light text \2014  invisible on white. Force dark text everywhere. */
  html[data-theme="light"] select, html[data-theme="light"] select option,
  html[data-theme="light"] .toolbar select, html[data-theme="light"] .kcard .kstage{
    color:#16324a !important;background:#fbfdfe;
  }
  html[data-theme="light"] select option{background:#ffffff;}
  html[data-theme="light"] th{color:#3d5a73;}
  html[data-theme="light"] .brand-title, html[data-theme="light"] h1,
  html[data-theme="light"] h2, html[data-theme="light"] h3{color:var(--text);}

  /* ---- Official-site light theme (public landing + apply only;
          the internal workspace keeps its dark identity) ---- */
  .landing, .apply-page{direction:rtl;text-align:right;}
  .landing{
    background:#f5f8fb;color:#16324a;
    --l-ink:#122b42; --l-muted:#5b7286; --l-line:#e2eaf2; --l-card:#ffffff;
  }
  .landing::before{
    background:
      radial-gradient(34% 30% at 20% 16%, rgba(139,92,246,0.12), transparent 68%),
      radial-gradient(30% 28% at 84% 22%, rgba(25,184,166,0.12), transparent 66%),
      radial-gradient(32% 30% at 70% 88%, rgba(47,127,240,0.10), transparent 70%);
    filter:blur(70px);
  }
  .landing-nav{
    position:sticky;top:0;z-index:5;
    display:flex;align-items:center;justify-content:space-between;gap:14px;
    padding:10px 26px;
    background:rgba(255,255,255,0.85);backdrop-filter:saturate(150%) blur(12px);
    border-bottom:1px solid var(--l-line);
  }
  .landing-nav .nb{display:flex;align-items:center;gap:10px;}
  .landing-nav img{width:40px;height:40px;object-fit:contain;animation:none;filter:none;}
  .landing-nav .nt{font-size:15px;font-weight:800;color:var(--l-ink);}
  .landing-nav .nt small{display:block;font-size:10px;color:var(--l-muted);font-weight:700;}
  .landing-nav .na{display:flex;gap:8px;}
  .landing .landing-hero img{filter:drop-shadow(0 10px 26px rgba(139,92,246,0.25));}
  .landing .landing-hero h1{
    background:linear-gradient(115deg,#122b42 30%, #6d3fd6 60%, #149a8b 90%);
    background-size:220% 100%;
    -webkit-background-clip:text;background-clip:text;color:transparent;
  }
  .landing .landing-hero .org{color:var(--l-ink);}
  .landing .landing-hero .tag{color:var(--l-muted);}
  .landing .scroll-hint{color:var(--l-muted);}
  .landing .vm-card, .landing .ss-block, .landing .ss-pillar, .landing .ss-outcomes, .landing .modal{
    background:var(--l-card);border-color:var(--l-line);
    backdrop-filter:none;
    box-shadow:0 8px 30px rgba(18,43,66,0.07);
  }
  .landing .vm-card p, .landing .ss-block p{color:#2a4258;}
  .landing .ss-desc{color:#2a4258;}
  .landing .ss-text h2{
    background:linear-gradient(115deg,#122b42 30%, color-mix(in srgb, var(--scolor) 80%, #333) 85%);
    -webkit-background-clip:text;background-clip:text;color:transparent;
  }
  .landing .ss-pillar{background:#fbfdfe;}
  .landing .ss-pillar strong{color:var(--l-ink);}
  .landing .ss-pillar p{color:var(--l-muted);}
  .landing .ss-outcome{color:#2a4258;}
  .landing .landing-sec-title{
    background:linear-gradient(115deg,#122b42 40%, #6d3fd6 80%);
    -webkit-background-clip:text;background-clip:text;color:transparent;
  }
  .landing .chip.ar{background:rgba(139,92,246,0.08);color:#5b34b8;border-color:rgba(139,92,246,0.25);}
  .landing label{color:#42607a;}
  .landing input[type=text], .landing input[type=email], .landing input[type=tel],
  .landing input[type=number], .landing input[type=password], .landing select, .landing textarea{
    background:#fff;border-color:#d7e2ec;color:var(--l-ink);
  }
  .landing input:focus, .landing select:focus, .landing textarea:focus{
    border-color:var(--teal);box-shadow:0 0 0 3px rgba(25,184,166,0.15);background:#fff;
  }
  .landing input[type=file]{background:#fbfdfe;border-color:#cfdce8;color:var(--l-muted);}
  .landing .btn-ghost{background:#fff;color:var(--l-ink);border-color:#cfdae6;}
  .landing .btn-ghost:hover{border-color:var(--teal);background:rgba(25,184,166,0.06);}
  .landing .btn-primary{
    background:linear-gradient(120deg,#149a8b, #2f7ff0 55%, #6d3fd6);
    background-size:180% 100%;color:#fff;
    box-shadow:0 6px 20px rgba(47,127,240,0.28);
  }
  .landing .btn-primary:hover{box-shadow:0 10px 30px rgba(109,63,214,0.35);}
  .landing .modal .display{color:var(--l-ink);}
  .landing #loginErr{}
  .landing .landing-foot{
    color:#c7d6e4;background:#0d2b47;border-top:none;
    margin:60px -28px -80px;padding:26px 28px;
  }
  /* ---- Intro: KACST film hero + stats + news strip (landing only) ---- */
  .landing .li-hero-slide{padding:0;overflow:hidden;background:#0d2b47;}
  .landing .li-hero{position:relative;width:100%;min-height:100vh;display:flex;align-items:center;}
  .landing .li-hero video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
  .landing .li-hero::after{content:"";position:absolute;inset:0;
    background:linear-gradient(to left, rgba(13,43,71,0.88) 0%, rgba(13,43,71,0.58) 46%, rgba(13,43,71,0.22) 100%);}
  .landing .li-hero-inner{position:relative;z-index:2;max-width:1080px;margin:0 auto;padding:96px 28px 72px;width:100%;}
  .landing .li-eyebrow{display:inline-flex;align-items:center;gap:8px;color:#cfe4ec;font-size:13.5px;font-weight:700;margin-bottom:12px;}
  .landing .li-eyebrow::before{content:"";width:26px;height:2px;background:var(--teal);border-radius:2px;}
  .landing .li-hero h1{color:#ffffff;font-size:clamp(30px,4.4vw,46px);line-height:1.28;margin:0 0 14px;font-weight:800;}
  .landing .li-hero p{color:#dbe7ee;max-width:600px;font-size:clamp(14.5px,1.6vw,17px);line-height:1.95;margin:0 0 24px;}
  .landing .li-cta-row{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:44px;}
  .landing .li-btn-ghost{
    display:inline-flex;align-items:center;padding:12px 34px;border-radius:var(--radius-sm,8px);
    font-size:14.5px;font-weight:800;cursor:pointer;
    background:rgba(255,255,255,0.10);color:#fff;border:1px solid rgba(255,255,255,0.45);
    transition:background .18s;
  }
  .landing .li-btn-ghost:hover{background:rgba(255,255,255,0.22);}
  .landing .li-sound{
    position:absolute;z-index:3;bottom:18px;inset-inline-end:18px;width:42px;height:42px;border-radius:50%;
    border:1px solid rgba(255,255,255,0.5);background:rgba(13,43,71,0.55);color:#fff;font-size:16px;cursor:pointer;
  }
  .landing .li-sound:hover{background:rgba(13,43,71,0.85);}
  .landing .li-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;max-width:880px;}
  .landing .li-stat{
    background:rgba(255,255,255,0.10);border:1px solid rgba(255,255,255,0.22);
    backdrop-filter:blur(8px);border-radius:var(--radius-sm,10px);padding:16px 12px;text-align:center;
  }
  .landing .li-stat b{display:block;font-size:clamp(20px,2.4vw,27px);color:#fff;font-weight:800;margin-bottom:4px;}
  .landing .li-stat small{color:#cfe0ec;font-size:12px;line-height:1.7;display:block;}
  .landing .li-news-slide{flex-direction:column;justify-content:center;}
  .landing .li-news{max-width:1080px;width:100%;margin:0 auto;}
  .landing .li-news-head{display:flex;align-items:baseline;justify-content:space-between;gap:14px;margin-bottom:6px;}
  .landing .li-news-head h2{
    margin:0;font-size:clamp(22px,2.8vw,30px);
    background:linear-gradient(115deg,#122b42 40%, #149a8b 90%);
    -webkit-background-clip:text;background-clip:text;color:transparent;
  }
  .landing .li-news-head a{color:#0f8577;font-size:13px;font-weight:800;text-decoration:none;white-space:nowrap;}
  .landing .li-news-head a:hover{text-decoration:underline;}
  .landing .li-news-sub{color:var(--l-muted);font-size:14px;margin:0 0 20px;line-height:1.8;}
  .landing .li-news-scroll{
    display:grid;grid-auto-flow:column;grid-auto-columns:228px;gap:14px;
    overflow-x:auto;padding:4px 2px 16px;scroll-snap-type:x proximity;
  }
  .landing .li-news-scroll::-webkit-scrollbar{height:8px;}
  .landing .li-news-scroll::-webkit-scrollbar-thumb{background:#c8d4de;border-radius:8px;}
  .landing .li-news-card{
    scroll-snap-align:start;background:var(--l-card);border:1px solid var(--l-line);
    border-radius:var(--radius-sm,10px);overflow:hidden;cursor:pointer;margin:0;
    box-shadow:0 8px 30px rgba(18,43,66,0.07);transition:transform .18s, box-shadow .18s;
    display:flex;flex-direction:column;
  }
  .landing .li-news-card:hover{transform:translateY(-4px);box-shadow:0 14px 34px rgba(18,43,66,0.14);}
  .landing .li-news-card img{width:100%;aspect-ratio:9/16;object-fit:cover;object-position:top;display:block;background:#eef2f6;}
  .landing .li-news-card figcaption{padding:11px 13px;font-size:12.5px;color:#2a4258;line-height:1.7;border-top:1px solid var(--l-line);}
  .landing .li-lightbox{
    position:fixed;inset:0;background:rgba(10,22,33,0.86);z-index:999;
    display:none;align-items:center;justify-content:center;padding:28px;
  }
  .landing .li-lightbox.open{display:flex;}
  .landing .li-lightbox img{max-width:min(92vw,540px);max-height:92vh;border-radius:10px;box-shadow:0 20px 60px rgba(0,0,0,0.5);}
  .landing .li-lightbox button{
    position:absolute;top:18px;inset-inline-start:18px;width:44px;height:44px;border-radius:50%;border:none;
    background:rgba(255,255,255,0.14);color:#fff;font-size:20px;cursor:pointer;
  }
  .landing .li-lightbox button:hover{background:rgba(255,255,255,0.28);}
  @media(max-width:860px){
    .landing .li-stats{grid-template-columns:repeat(2,1fr);}
    .landing .li-news-scroll{grid-auto-columns:196px;}
  }
  @media(prefers-reduced-motion:reduce){
    .landing .li-news-card{transition:none;}
    .landing .li-news-card:hover{transform:none;}
  }
  /* ---- Large displays: 1440p ---- */
  @media(min-width:1600px){
    main{padding:46px 64px 80px;}
    nav.sidebar{width:268px;}
    .page-head h1{font-size:34px;}
    .cand-edu{
    margin:2px 0 8px;font-size:11.5px;color:var(--muted);
    border-top:1px dashed var(--line);padding-top:8px;
  }
  .skillbank{
    background:rgba(8,26,44,0.35);border:1px solid var(--line);
    border-radius:var(--radius-sm);padding:12px 14px;margin-bottom:16px;
  }
  .skillbank .sb-head{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:10px;font-size:13px;}
  .skillbank .sb-target{font-size:11.5px;color:var(--muted);display:flex;gap:12px;align-items:center;}
  .skillbank .sb-target label{display:flex;gap:4px;align-items:center;cursor:pointer;}
  .sb-cats{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px;padding-bottom:10px;border-bottom:1px dashed var(--line);}
  .chip.sb-cat{cursor:pointer;opacity:.75;}
  .chip.sb-cat.on{opacity:1;border-color:var(--teal);color:var(--teal);background:rgba(25,184,166,0.1);}
  .sb-skills,.sb-suggested #sbSuggestedChips{display:flex;flex-wrap:wrap;gap:6px;}
  .chip.sb-skill{cursor:pointer;transition:all .15s;}
  .chip.sb-skill:hover{border-color:var(--teal);}
  .chip.sb-skill.on{background:rgba(25,184,166,0.16);border-color:var(--teal);color:var(--teal);font-weight:800;}
  .sb-suggested{margin-top:10px;padding-top:10px;border-top:1px dashed var(--line);}
  .qmeter{margin-bottom:14px;}
  .qm-top{display:flex;justify-content:space-between;font-size:12px;font-weight:800;margin-bottom:6px;}
  .qm-bar{height:7px;background:rgba(8,26,44,0.6);border-radius:99px;overflow:hidden;border:1px solid var(--line);}
  .qm-fill{height:100%;width:0;border-radius:99px;transition:width .4s ease, background .4s;}
  .qm-hints{display:flex;flex-direction:column;gap:2px;margin-top:8px;font-size:11.5px;color:var(--muted);}
  .jlive{
    background:rgba(25,184,166,0.06);border:1px solid rgba(25,184,166,0.25);
    border-radius:var(--radius-sm);padding:12px 14px;margin-bottom:12px;
    font-size:13px;line-height:1.8;min-height:44px;
  }
  .headstat{
    display:inline-flex;align-items:center;gap:6px;margin-top:8px;
    font-size:12px;font-weight:800;color:var(--teal);
    background:rgba(25,184,166,0.10);border:1px solid rgba(25,184,166,0.3);
    border-radius:99px;padding:4px 12px;
  }
  .page-head .sub{font-size:14.5px;max-width:720px;}
    .stat .n{font-size:35px;}
    .stat .l{font-size:13px;}
    .navtab{font-size:15px;}
    .card-grid{grid-template-columns:repeat(auto-fill,minmax(345px,1fr));gap:18px;}
    .idxcard .name{font-size:17.5px;}
    .kanban{grid-template-columns:repeat(auto-fit,minmax(218px,1fr));gap:16px;}
    table{font-size:14.5px;}
    .insights{grid-template-columns:repeat(auto-fill,minmax(325px,1fr));}
    .insight{font-size:13.5px;}
    .modal{max-width:760px;}
    .ss-visual{min-height:520px;}
    .ss-model{width:min(400px,80vw);}
    .ss-outcomes{width:min(400px,80vw);}
  }
  /* ---- Very large displays: 4K ---- */
  @media(min-width:2200px){
    #app{max-width:2160px;border-inline:1px solid var(--line);}
    main{padding:56px 84px 96px;}
    nav.sidebar{width:296px;}
    .brand .display{font-size:23px;}
    .page-head h1{font-size:40px;}
    .cand-edu{
    margin:2px 0 8px;font-size:11.5px;color:var(--muted);
    border-top:1px dashed var(--line);padding-top:8px;
  }
  .skillbank{
    background:rgba(8,26,44,0.35);border:1px solid var(--line);
    border-radius:var(--radius-sm);padding:12px 14px;margin-bottom:16px;
  }
  .skillbank .sb-head{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:10px;font-size:13px;}
  .skillbank .sb-target{font-size:11.5px;color:var(--muted);display:flex;gap:12px;align-items:center;}
  .skillbank .sb-target label{display:flex;gap:4px;align-items:center;cursor:pointer;}
  .sb-cats{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px;padding-bottom:10px;border-bottom:1px dashed var(--line);}
  .chip.sb-cat{cursor:pointer;opacity:.75;}
  .chip.sb-cat.on{opacity:1;border-color:var(--teal);color:var(--teal);background:rgba(25,184,166,0.1);}
  .sb-skills,.sb-suggested #sbSuggestedChips{display:flex;flex-wrap:wrap;gap:6px;}
  .chip.sb-skill{cursor:pointer;transition:all .15s;}
  .chip.sb-skill:hover{border-color:var(--teal);}
  .chip.sb-skill.on{background:rgba(25,184,166,0.16);border-color:var(--teal);color:var(--teal);font-weight:800;}
  .sb-suggested{margin-top:10px;padding-top:10px;border-top:1px dashed var(--line);}
  .qmeter{margin-bottom:14px;}
  .qm-top{display:flex;justify-content:space-between;font-size:12px;font-weight:800;margin-bottom:6px;}
  .qm-bar{height:7px;background:rgba(8,26,44,0.6);border-radius:99px;overflow:hidden;border:1px solid var(--line);}
  .qm-fill{height:100%;width:0;border-radius:99px;transition:width .4s ease, background .4s;}
  .qm-hints{display:flex;flex-direction:column;gap:2px;margin-top:8px;font-size:11.5px;color:var(--muted);}
  .jlive{
    background:rgba(25,184,166,0.06);border:1px solid rgba(25,184,166,0.25);
    border-radius:var(--radius-sm);padding:12px 14px;margin-bottom:12px;
    font-size:13px;line-height:1.8;min-height:44px;
  }
  .headstat{
    display:inline-flex;align-items:center;gap:6px;margin-top:8px;
    font-size:12px;font-weight:800;color:var(--teal);
    background:rgba(25,184,166,0.10);border:1px solid rgba(25,184,166,0.3);
    border-radius:99px;padding:4px 12px;
  }
  .page-head .sub{font-size:15.5px;max-width:820px;}
    .stats{gap:18px;}
    .stat{padding:24px 26px 22px;}
    .stat .n{font-size:41px;}
    .stat .l{font-size:14px;}
    .navtab{font-size:16px;}
    .card-grid{grid-template-columns:repeat(auto-fill,minmax(395px,1fr));gap:22px;}
    .idxcard{padding:22px;}
    .idxcard .name{font-size:19px;}
    .idxcard .role{font-size:14px;}
    .chip{font-size:12.5px;}
    .kanban{grid-template-columns:repeat(auto-fit,minmax(252px,1fr));gap:18px;}
    .kcard .kn{font-size:15px;}
    table{font-size:15.5px;}
    thead th{font-size:12.5px;padding:15px;}
    tbody td{padding:16px 15px;}
    .btn{font-size:15.5px;padding:12px 24px;}
    .insights{grid-template-columns:repeat(auto-fill,minmax(365px,1fr));}
    .insight{font-size:14.5px;padding:17px 19px;}
    .modal{max-width:860px;}
    input[type=text],input[type=email],input[type=tel],input[type=number],input[type=date],input[type=password],select,textarea{font-size:15px;padding:12px 16px;}
  }
  @media(max-width:900px){
    #app{flex-direction:column;}
    nav.sidebar{width:100%;flex-direction:row;overflow-x:auto;padding:12px;border-inline-start:none;position:static;height:auto;}
    .brand{display:none;}
    .topaccount{
    display:flex;align-items:center;justify-content:space-between;gap:8px;
    padding:10px 14px;margin-bottom:6px;
    border-bottom:1px solid var(--line);
  }
  .topaccount .ta-name{
    font-size:12px;font-weight:800;color:var(--text);
    overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
  }
  .navtabs{flex-direction:row;}
    .sidebar-foot{display:none;}
    main{padding:22px 18px 50px;}
    .stats{grid-template-columns:repeat(2,1fr);}
    .kanban{grid-template-columns:1fr;}
    .field-row{grid-template-columns:1fr;}
    .ss-grid{grid-template-columns:1fr;gap:20px;}
    .ss-grid.flip .ss-text{order:1;}
    .ss-grid.flip .ss-visual{order:2;}
    .ss-text h2{font-size:26px;}
    .lslide{min-height:auto;padding:44px 18px;}
    .ss-visual{min-height:auto;}
    .ss-model{width:min(280px,74vw);}
  }
</style>
<script>
  // Apply the saved theme before the body paints.
  (function(){try{
    var t = localStorage.getItem('tad_theme');
    if(t === 'dark' || t === 'light') document.documentElement.setAttribute('data-theme', t);
    var l = localStorage.getItem('tad_lang');
    l = (l === 'ar') ? 'ar' : 'en';           // English is the default
    document.documentElement.setAttribute('lang', l);
    document.documentElement.setAttribute('dir', l === 'ar' ? 'rtl' : 'ltr');
  }catch(e){}})();
</script>
<style id="rdSkin">
/* ================= REDESIGN SKIN (landing + apply) =================
   Dark KACST redesign ported from the Claude Design prototype.
   Loaded last so it overrides the earlier .landing theme. */
.landing{
  --rd-bg:#050f1e; --rd-bg2:#081426; --rd-card:#0b1a30;
  --rd-ink:#eef6fa; --rd-mut:#9db4c6; --rd-line:rgba(157,180,198,.16);
  --rd-violet:#8b5cf6; --rd-blue:#2f7ff0; --rd-gold:#e8b93e; --rd-teal:#19b8a6; --rd-rose:#f4536e;
  --rd-grad:linear-gradient(120deg,#2f7ff0,#8b5cf6);
  background:var(--rd-bg) !important;
  color:var(--rd-ink);
  font-family:'Tajawal','Segoe UI',Tahoma,sans-serif !important;
  scroll-snap-type:none !important;
}
.landing .lslide{scroll-snap-align:none !important;}
.landing ::selection{background:rgba(139,92,246,.35);}

/* ---- nav ---- */
.landing .landing-nav{
  position:fixed;top:0;right:0;left:0;z-index:50;display:flex;align-items:center;justify-content:space-between;
  padding:12px 26px;background:rgba(5,15,30,.72) !important;backdrop-filter:blur(14px);
  border-bottom:1px solid var(--rd-line) !important;box-shadow:none !important;
}
.landing .landing-nav::before{content:"";position:absolute;top:0;right:0;left:0;height:3px;
  background:linear-gradient(90deg,#f4536e,#e8b93e,#19b8a6,#2f7ff0,#8b5cf6);}
.landing .landing-nav .nb{display:flex;align-items:center;gap:12px;}
.landing .landing-nav .nb img{width:40px;height:40px;object-fit:contain;}
.landing .landing-nav .nt{font-weight:800;font-size:15px;color:var(--rd-ink) !important;line-height:1.3;}
.landing .landing-nav .nt small{display:block;font-weight:400;font-size:10.5px;color:var(--rd-mut) !important;}
.landing .landing-nav .na{display:flex;gap:10px;}
.landing .btn{font-family:'Tajawal',sans-serif;}
.landing .btn-primary{
  background:var(--rd-grad) !important;color:#fff !important;border:none !important;border-radius:999px !important;
  font-weight:800;box-shadow:0 8px 26px rgba(47,127,240,.35) !important;
}
.landing .btn-primary:hover{filter:brightness(1.12);}
.landing .btn-ghost{
  background:rgba(255,255,255,.05) !important;color:var(--rd-ink) !important;
  border:1px solid rgba(157,180,198,.35) !important;border-radius:999px !important;font-weight:700;
}
.landing .btn-ghost:hover{background:rgba(255,255,255,.12) !important;}

/* ---- reveal-on-scroll ---- */
.landing .rd-rev{opacity:0;transform:translateY(26px);transition:opacity .7s ease,transform .7s ease;}
.landing .rd-rev.in{opacity:1;transform:none;}
@media (prefers-reduced-motion:reduce){ .landing .rd-rev{opacity:1;transform:none;transition:none;} }

/* ---- hero ---- */
.landing .rd-hero{position:relative;min-height:100vh;display:flex;align-items:center;overflow:hidden;background:var(--rd-bg);}
.landing .rd-hero video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.55;}
.landing .rd-hero::after{content:"";position:absolute;inset:0;
  background:linear-gradient(to left, rgba(5,15,30,.9) 0%, rgba(5,15,30,.55) 50%, rgba(5,15,30,.35) 100%);}
.landing .rd-hero-inner{position:relative;z-index:2;max-width:1180px;margin:0 auto;width:100%;padding:130px 30px 60px;}
.landing .rd-hero h1{
  font-size:clamp(42px,7.2vw,92px);line-height:1.12;font-weight:900;color:#fff;margin:0 0 22px;max-width:760px;
}
.landing .rd-hero h1 .g{
  background:linear-gradient(100deg,#8b5cf6 10%,#f4536e 90%);
  -webkit-background-clip:text;background-clip:text;color:transparent;
}
.landing .rd-hero p{color:#c8d9e6;max-width:640px;font-size:clamp(15px,1.6vw,18px);line-height:2;margin:0 0 30px;}
.landing .rd-cta-row{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:56px;}
.landing .rd-btn-lg{font-size:16px !important;padding:15px 48px !important;}
.landing .rd-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--rd-line);
  border:1px solid var(--rd-line);border-radius:16px;overflow:hidden;max-width:1000px;}
.landing .rd-stat{background:rgba(8,20,38,.82);backdrop-filter:blur(8px);padding:22px 16px;text-align:center;position:relative;}
.landing .rd-stat b{display:block;font-size:clamp(24px,2.8vw,34px);font-weight:900;color:#fff;}
.landing .rd-stat b sup{color:var(--sc,#19b8a6);font-size:.55em;margin-inline-start:2px;}
.landing .rd-stat small{color:var(--rd-mut);font-size:12px;line-height:1.7;display:block;margin-top:4px;}
.landing .rd-stat::after{content:"";position:absolute;bottom:0;right:20%;left:20%;height:3px;border-radius:3px;background:var(--sc,#19b8a6);}
.landing .rd-sound{
  position:absolute;z-index:3;bottom:20px;inset-inline-end:20px;width:44px;height:44px;border-radius:50%;
  border:1px solid rgba(157,180,198,.4);background:rgba(5,15,30,.6);color:#fff;font-size:16px;cursor:pointer;
}
.landing .rd-sound:hover{background:rgba(5,15,30,.9);}

/* ---- marquee ---- */
.landing .rd-marquee{border-block:1px solid var(--rd-line);padding:16px 0;overflow:hidden;background:var(--rd-bg2);}
.landing .rd-mq-track{display:flex;gap:14px;width:max-content;animation:rdmq 32s linear infinite;}
@keyframes rdmq{from{transform:translateX(0)}to{transform:translateX(50%)}}
.landing .rd-chip{
  font-family:'IBM Plex Mono',monospace;font-size:12.5px;color:var(--rd-mut);white-space:nowrap;
  border:1px solid var(--rd-line);border-radius:999px;padding:8px 18px;
}
@media (prefers-reduced-motion:reduce){ .landing .rd-mq-track{animation:none;flex-wrap:wrap;width:auto;} }

/* ---- section shells ---- */
.landing .rd-wrap{max-width:1180px;margin:0 auto;padding:90px 30px;}
.landing .rd-kicker{font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:1px;color:var(--rd-teal);margin-bottom:10px;display:block;}
.landing .rd-title{font-size:clamp(28px,4vw,44px);font-weight:900;color:#fff;margin:0 0 14px;line-height:1.3;}

/* ---- vision / mission ---- */
.landing .rd-vm{display:grid;grid-template-columns:1fr 1fr;gap:18px;}
.landing .rd-vm-card{background:var(--rd-card);border:1px solid var(--rd-line);border-radius:18px;padding:30px 28px;}
.landing .rd-vm-card h3{margin:0 0 8px;font-size:15px;color:var(--rd-teal);font-weight:800;}
.landing .rd-vm-card strong{display:block;font-size:clamp(18px,2vw,23px);color:#fff;font-weight:800;margin-bottom:10px;line-height:1.6;}
.landing .rd-vm-card p{margin:0;color:var(--rd-mut);font-size:14px;line-height:2;}

/* ---- timeline ---- */
.landing .rd-tl{position:relative;height:520vh;}
.landing .rd-tl-sticky{position:sticky;top:0;height:100vh;display:flex;align-items:center;overflow:hidden;background:radial-gradient(ellipse at 70% 30%, rgba(25,184,166,.08), transparent 55%), var(--rd-bg);}
.landing .rd-tl-inner{max-width:1180px;margin:0 auto;width:100%;height:100%;padding:80px 30px 40px;position:relative;}
.landing .rd-ch{position:absolute;inset-inline:30px;top:50%;transform:translateY(-50%);opacity:0;pointer-events:none;max-width:620px;will-change:opacity,transform;}
.landing .rd-ch.on{pointer-events:auto;}
.landing .rd-tl-photos{position:absolute;inset:0;pointer-events:none;}
.landing .rd-tl-photo{position:absolute;inset:0;background-size:cover;background-position:center;opacity:0;filter:saturate(.55) brightness(.8);will-change:opacity;}
.landing .rd-tl-shade{position:absolute;inset:0;background:linear-gradient(to left, rgba(5,15,30,.94) 15%, rgba(5,15,30,.78) 55%, rgba(5,15,30,.62) 100%);}
.landing .rd-tl-beam{position:absolute;top:16%;bottom:16%;inset-inline-end:38px;width:3px;border-radius:3px;background:rgba(157,180,198,.18);overflow:hidden;}
.landing .rd-tl-beam i{position:absolute;top:0;right:0;left:0;height:0%;border-radius:3px;background:linear-gradient(180deg,#19b8a6,#2f7ff0,#8b5cf6);}
.landing .rd-tl-credit{position:absolute;bottom:30px;inset-inline-end:30px;font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:1.5px;color:rgba(157,180,198,.55);}
.landing .rd-ch .num{font-family:'IBM Plex Mono',monospace;font-size:12.5px;color:var(--rd-mut);direction:ltr;display:inline-block;}
.landing .rd-ch .num i{font-style:normal;color:var(--cc,#19b8a6);}
.landing .rd-ch .yr{font-size:clamp(56px,8.5vw,110px);font-weight:900;line-height:1;color:var(--cc,#19b8a6);margin:6px 0 0;}
.landing .rd-ch .tt{font-size:clamp(24px,3.2vw,40px);font-weight:900;color:#fff;margin:2px 0 14px;}
.landing .rd-ch .ds{color:var(--rd-mut);font-size:clamp(14px,1.5vw,16.5px);line-height:2;max-width:560px;}
.landing .rd-tl-dots{position:absolute;bottom:30px;inset-inline:30px;display:flex;align-items:center;gap:8px;
  font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--rd-mut);}
.landing .rd-tl-dots .d{width:26px;height:12px;border-radius:3px;background:linear-gradient(rgba(157,180,198,.25),rgba(157,180,198,.25)) center/100% 3px no-repeat;cursor:pointer;transition:background .3s;}
.landing .rd-tl-dots .d.on{background:linear-gradient(var(--rd-teal),var(--rd-teal)) center/100% 3px no-repeat;}
@media (prefers-reduced-motion:reduce){
  .landing .rd-tl{height:auto;}
  .landing .rd-tl-sticky{position:static;height:auto;display:block;padding:40px 0;}
  .landing .rd-ch{position:static;opacity:1;transform:none;margin:0 auto 60px;max-width:1120px;padding:0 30px;}
  .landing .rd-tl-dots{display:none;}
  .landing .rd-tl-beam,.landing .rd-tl-photos,.landing .rd-tl-credit{display:none;}
  .landing .rd-ch{opacity:1;}
}

/* ---- sectors ---- */
.landing .rd-sector{position:relative;border-top:1px solid var(--rd-line);overflow:hidden;}
.landing .rd-sector .wm{
  position:absolute;top:10px;inset-inline-start:-10px;font-size:clamp(160px,26vw,340px);font-weight:900;line-height:1;
  color:transparent;-webkit-text-stroke:1px rgba(157,180,198,.12);pointer-events:none;font-family:'IBM Plex Mono',monospace;
}
.landing .rd-sec-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:44px;align-items:start;position:relative;}
.landing .rd-sec-head .rd-kicker{color:var(--sc);}
.landing .rd-sec-head h2{font-size:clamp(30px,4.4vw,52px);font-weight:900;margin:0 0 12px;color:var(--sc);}
.landing .rd-sec-head p{color:#c8d9e6;font-size:clamp(14.5px,1.6vw,17px);line-height:2;margin:0 0 26px;max-width:560px;}
.landing .rd-sub{background:var(--rd-card);border:1px solid var(--rd-line);border-inline-start:3px solid var(--sc);
  border-radius:12px;padding:16px 18px;margin-bottom:12px;}
.landing .rd-sub strong{display:block;color:#fff;font-size:15px;font-weight:800;margin-bottom:4px;}
.landing .rd-sub span{color:var(--rd-mut);font-size:13px;line-height:1.9;}
.landing .rd-impact{background:rgba(8,20,38,.7);border:1px dashed rgba(157,180,198,.35);border-radius:14px;padding:20px 22px;margin-top:26px;}
.landing .rd-impact h4{margin:0 0 12px;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:1px;color:var(--sc);font-weight:600;}
.landing .rd-impact div{color:#d7e4ee;font-size:13.5px;line-height:1.9;margin-bottom:8px;}
.landing .rd-impact div::before{content:"\2726 ";color:var(--sc);margin-inline-end:8px;font-size:11px;}
.landing .rd-sec-art{display:flex;align-items:center;justify-content:center;padding-top:40px;}
.landing .rd-sec-art svg{width:min(240px,60%);height:auto;stroke:var(--sc);opacity:.9;}

/* ---- news (restyle existing li-news markup) ---- */
.landing .li-news-slide{background:var(--rd-bg2);border-top:1px solid var(--rd-line);padding:90px 0 !important;min-height:0 !important;display:block !important;}
.landing .li-news{max-width:1180px;padding:0 30px;}
.landing .li-news-head h2{background:none !important;-webkit-text-fill-color:currentColor;color:#fff !important;font-weight:900;}
.landing .li-news-head a{color:var(--rd-teal) !important;}
.landing .li-news-sub{color:var(--rd-mut) !important;}
.landing .li-news-scroll::-webkit-scrollbar-thumb{background:#28405a !important;}
.landing .li-news-card{background:var(--rd-card) !important;border-color:var(--rd-line) !important;box-shadow:none !important;}
.landing .li-news-card figcaption{color:#c8d9e6 !important;border-top-color:var(--rd-line) !important;}

/* ---- CTA ---- */
.landing .rd-cta{padding:120px 30px;text-align:center;background:
  radial-gradient(ellipse at 50% 0%, rgba(139,92,246,.14), transparent 60%), var(--rd-bg);}
.landing .rd-cta h2{font-size:clamp(38px,6vw,72px);font-weight:900;color:#fff;margin:0 0 14px;}
.landing .rd-cta h2 .dot{color:var(--rd-violet);}
.landing .rd-cta p{color:var(--rd-mut);font-size:clamp(14.5px,1.7vw,17px);margin:0 0 30px;}
.landing .rd-staff{display:block;margin-top:20px;color:var(--rd-mut);font-size:13px;cursor:pointer;text-decoration:underline;text-underline-offset:4px;}
.landing .rd-staff:hover{color:var(--rd-ink);}
.landing .landing-login{max-width:420px;margin:26px auto 0;display:none;text-align:right;}
.landing .landing-login.open{display:block;}
.landing .landing-login .modal{background:var(--rd-card) !important;border:1px solid var(--rd-line) !important;border-radius:16px !important;box-shadow:0 30px 80px rgba(0,0,0,.5) !important;padding:26px !important;}
.landing .rd-foot{border-top:1px solid var(--rd-line);padding:26px 30px;display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;
  color:var(--rd-mut);font-size:12.5px;background:var(--rd-bg2);}
.landing .rd-foot .mono{font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:1px;}

/* ---- forms on dark (login card + apply page) ---- */
.landing .field label{color:#c8d9e6 !important;font-weight:700;}
.landing .field input,.landing .field select,.landing .field textarea{
  background:rgba(5,15,30,.6) !important;border:1px solid rgba(157,180,198,.3) !important;
  color:var(--rd-ink) !important;border-radius:10px !important;
}
.landing .field input:focus,.landing .field select:focus,.landing .field textarea:focus{
  border-color:var(--rd-teal) !important;box-shadow:0 0 0 3px rgba(25,184,166,.18) !important;outline:none;
}
.landing .field input::placeholder,.landing .field textarea::placeholder{color:#5b7186 !important;}

/* ---- apply page ---- */
.landing .landing-inner{padding-top:110px;}
.landing .landing-inner .landing-hero h1{font-size:clamp(30px,5vw,44px) !important;font-weight:900;color:#fff !important;}
.landing .landing-inner .landing-hero h1 .g{background:linear-gradient(100deg,#8b5cf6,#2f7ff0);-webkit-background-clip:text;background-clip:text;color:transparent;}
.landing .rd-join-kicker{font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:2px;color:var(--rd-teal);display:block;margin-bottom:8px;}
.landing .landing-inner .tag{color:var(--rd-mut) !important;}
.landing .landing-inner .modal{background:var(--rd-card) !important;border:1px solid var(--rd-line) !important;border-radius:18px !important;box-shadow:0 30px 90px rgba(0,0,0,.45) !important;}
.landing .ap-progress{background:rgba(157,180,198,.15) !important;border-radius:99px;}
.landing .ap-bar{background:var(--rd-grad) !important;}
.landing .ap-step{color:var(--rd-mut) !important;}
.landing .ap-step.active{color:#fff !important;font-weight:800;}
.landing #apFile{border:1.5px dashed rgba(25,184,166,.5) !important;background:rgba(25,184,166,.05) !important;padding:26px 14px !important;border-radius:14px !important;width:100%;cursor:pointer;}
.landing #apFile:hover{background:rgba(25,184,166,.1) !important;}
.landing .landing-foot{background:transparent !important;color:var(--rd-mut) !important;margin:40px 0 0 !important;padding:20px 0 !important;border-top:1px solid var(--rd-line) !important;}

@media (max-width:900px){
  .landing .rd-stats{grid-template-columns:repeat(2,1fr);}
  .landing .rd-vm{grid-template-columns:1fr;}
  .landing .rd-sec-grid{grid-template-columns:1fr;gap:20px;}
  .landing .rd-sec-art{order:-1;padding-top:0;}
  .landing .rd-sec-art svg{width:120px;}
  .landing .rd-wrap{padding:64px 22px;}
  .landing .rd-hero-inner{padding:110px 22px 50px;}
  .landing .landing-nav{padding:10px 16px;}
  .landing .landing-nav .nt small{display:none;}
}
</style>
</head>
<body>
<div id="app">
  <nav class="sidebar">
    <div class="brand">
      <img src="data:image/png;base64,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" alt="KACST" style="width:76px;height:76px;display:block;margin:4px auto 16px;object-fit:contain;">
      <div class="display" id="brandName">&#x625;&#x62F;&#x627;&#x631;&#x629; &#x627;&#x633;&#x62A;&#x642;&#x637;&#x627;&#x628; &#x627;&#x644;&#x643;&#x641;&#x627;&#x621;&#x627;&#x62A;</div>
      <span class="mono" id="brandOrg">&#x645;&#x62F;&#x64A;&#x646;&#x629; &#x627;&#x644;&#x645;&#x644;&#x643; &#x639;&#x628;&#x62F;&#x627;&#x644;&#x639;&#x632;&#x64A;&#x632; &#x644;&#x644;&#x639;&#x644;&#x648;&#x645; &#x648;&#x627;&#x644;&#x62A;&#x642;&#x646;&#x64A;&#x629;</span>
    </div>
    <div class="topaccount" id="topAccount" style="display:none;">
      <span class="ta-name" id="topAccountName"></span>
      <button class="btn btn-sm btn-ghost" id="btnTopLogout"></button>
    </div>
    <div class="navtabs" id="navtabs"></div>
    <div class="sidebar-foot" id="sidebarFoot" style="cursor:pointer;" title="&#x62A;&#x63A;&#x64A;&#x64A;&#x631; &#x643;&#x644;&#x645;&#x629; &#x627;&#x644;&#x645;&#x631;&#x648;&#x631; / &#x62A;&#x633;&#x62C;&#x64A;&#x644; &#x627;&#x644;&#x62E;&#x631;&#x648;&#x62C;">
      <span class="mono" style="display:flex;align-items:center;gap:6px;">
        <span id="syncDot" style="width:7px;height:7px;border-radius:50%;background:#8b93a1;flex-shrink:0;"></span>
        &#x645;&#x633;&#x627;&#x62D;&#x629; &#x639;&#x645;&#x644; &#x645;&#x634;&#x62A;&#x631;&#x643;&#x629; &#xB7; &#x645;&#x628;&#x627;&#x634;&#x631;&#x629; &#x644;&#x643;&#x644; &#x645;&#x646; &#x64A;&#x645;&#x644;&#x643; &#x647;&#x630;&#x627; &#x627;&#x644;&#x631;&#x627;&#x628;&#x637;
      </span>
    </div>
  </nav>
  <main id="main"></main>
</div>

<div class="overlay" id="overlay"><div class="modal" id="modalRoot"></div></div>

<script>
/* ---------------------------------------------------------
   API CLIENT \u2014 PostgreSQL-backed
   Replaces the old whole-database-in-memory model. Data is
   queried per view with server-side filtering and pagination, and
   every change updates a single record instead of rewriting the
   entire dataset. This is what lets the app stay responsive with
   tens of thousands of candidates.
--------------------------------------------------------- */
// Identity comes from the login session; the server attributes every
// change to the logged-in account automatically.
let CURRENT_USER = null;
async function apiFetch(url, opts){
  const res = await fetch(url, opts);
  if(res.status === 401 && url !== '/api/me' && url !== '/api/login'){
    // Session expired mid-use \u2014 show the login screen.
    showLogin();
    throw new Error('\u0627\u0646\u062a\u0647\u062a \u0627\u0644\u062c\u0644\u0633\u0629 \u2014 \u0633\u062c\u0651\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0645\u0646 \u062c\u062f\u064a\u062f');
  }
  if(!res.ok){
    let msg = 'HTTP ' + res.status;
    try { const j = await res.json(); if(j.error) msg = j.error; } catch(e){}
    throw new Error(msg);
  }
  return res.status === 204 ? null : res.json();
}
const api = {
  jobs:        ()            => apiFetch('/api/jobs'),
  createJob:   (j)           => apiFetch('/api/jobs', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(j)}),
  deleteJob:   (id)          => apiFetch('/api/jobs/'+encodeURIComponent(id), {method:'DELETE'}),

  candidates:  (params={})   => apiFetch('/api/candidates?' + new URLSearchParams(params)),
  candidate:   (id)          => apiFetch('/api/candidates/'+encodeURIComponent(id)),
  createCandidate: (c)       => apiFetch('/api/candidates', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(c)}),
  updateCandidate: (id,c)    => apiFetch('/api/candidates/'+encodeURIComponent(id), {method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify(c)}),
  setStage:    (id,stage)    => apiFetch('/api/candidates/'+encodeURIComponent(id)+'/stage', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({stage})}),
  setAltJob:   (id,jobId)    => apiFetch('/api/candidates/'+encodeURIComponent(id)+'/alt-job', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({alternativeJobId:jobId})}),
  deleteCandidate: (id)      => apiFetch('/api/candidates/'+encodeURIComponent(id), {method:'DELETE'}),

  assessments: (params={})   => apiFetch('/api/assessments?' + new URLSearchParams(params)),
  createAssessment: (a)      => apiFetch('/api/assessments', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(a)}),
  deleteAssessment: (id)     => apiFetch('/api/assessments/'+encodeURIComponent(id), {method:'DELETE'}),

  rankings:    (params={})   => apiFetch('/api/rankings?' + new URLSearchParams(params)),
  insights:    ()            => apiFetch('/api/insights'),
  audit:       (params={})   => apiFetch('/api/audit?' + new URLSearchParams(params)),
  me:          ()            => apiFetch('/api/me'),
  login:       (b)           => apiFetch('/api/login', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(b)}),
  logout:      ()            => apiFetch('/api/logout', {method:'POST'}),
  changePassword: (b)        => apiFetch('/api/change-password', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(b)}),
  users:       ()            => apiFetch('/api/users'),
  createUser:  (b)           => apiFetch('/api/users', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(b)}),
  deleteUser:  (id)          => apiFetch('/api/users/'+encodeURIComponent(id), {method:'DELETE'}),
  forgotPassword: (b)        => apiFetch('/api/forgot-password', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(b)}),
  resetPassword:  (b)        => apiFetch('/api/reset-password', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(b)}),
  jobMatches:  (jobId)       => apiFetch('/api/jobs/'+encodeURIComponent(jobId)+'/matches'),
  jobPreview:  (b)           => apiFetch('/api/jobs/preview', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(b)}),
  tfaSetup:    ()            => apiFetch('/api/2fa/setup', {method:'POST'}),
  tfaVerify:   (b)           => apiFetch('/api/2fa/verify', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(b)}),
  tfaDisable:  (b)           => apiFetch('/api/2fa/disable', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(b)}),
  kpis:        (params={})   => apiFetch('/api/kpis?' + new URLSearchParams(params)),
  pipeline:    (params={})   => apiFetch('/api/pipeline?' + new URLSearchParams(params)),
  settings:    ()            => apiFetch('/api/settings'),
  saveSettings:(s)           => apiFetch('/api/settings', {method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify(s)})
};

function setSyncStatus(status){
  const el = document.getElementById('syncDot');
  if(!el) return;
  const map = {saving:['#d4a24c','\u062c\u0627\u0631\u064d \u0627\u0644\u062d\u0641\u0638\u2026'], saved:['#5fb87a','\u062a\u0645 \u0627\u0644\u062d\u0641\u0638'], error:['#c1585f','\u0641\u0634\u0644 \u0627\u0644\u062d\u0641\u0638']};
  const [color,label] = map[status] || ['#8b93a1',''];
  el.style.background = color; el.title = label;
}
// Wrap a mutation so the sync indicator and error handling are consistent.
async function mutate(fn){
  try{
    setSyncStatus('saving');
    const out = await fn();
    setSyncStatus('saved');
    return out;
  }catch(e){
    setSyncStatus('error');
    console.error('Save failed:', e);
    alert('\u062a\u0639\u0630\u0651\u0631 \u062d\u0641\u0638 \u0627\u0644\u062a\u063a\u064a\u064a\u0631: ' + e.message);
    throw e;
  }
}

const STAGES = ['\u0627\u0644\u0641\u0631\u0632','\u0627\u0644\u0645\u0642\u0627\u0628\u0644\u0629 \u0627\u0644\u0647\u0627\u062a\u0641\u064a\u0629','\u0627\u0644\u0645\u0642\u0627\u0628\u0644\u0629','\u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u0648\u0638\u064a\u0641\u064a','\u062a\u0645 \u0627\u0644\u062a\u0639\u064a\u064a\u0646','\u0645\u0631\u0641\u0648\u0636','\u0645\u0646\u0627\u0633\u0628 \u0644\u0634\u0627\u063a\u0631 \u0622\u062e\u0631'];
const STAGE_COLOR = {
  '\u0627\u0644\u0641\u0631\u0632':'#8b93a1', '\u0627\u0644\u0645\u0642\u0627\u0628\u0644\u0629 \u0627\u0644\u0647\u0627\u062a\u0641\u064a\u0629':'#3fa796', '\u0627\u0644\u0645\u0642\u0627\u0628\u0644\u0629':'#d4a24c',
  '\u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u0648\u0638\u064a\u0641\u064a':'#7aa7d9', '\u062a\u0645 \u0627\u0644\u062a\u0639\u064a\u064a\u0646':'#5fb87a', '\u0645\u0631\u0641\u0648\u0636':'#c1585f', '\u0645\u0646\u0627\u0633\u0628 \u0644\u0634\u0627\u063a\u0631 \u0622\u062e\u0631':'#9b6fd1'
};
const REGULAR_STAGES = STAGES.filter(s=>s!=='\u0645\u0646\u0627\u0633\u0628 \u0644\u0634\u0627\u063a\u0631 \u0622\u062e\u0631');

const SKILL_BANK = {
  javascript:['\u0635\u0641 \u0645\u0648\u0642\u0641\u064b\u0627 \u0642\u0645\u062a \u0641\u064a\u0647 \u0628\u062a\u062d\u0633\u064a\u0646 \u062f\u0627\u0644\u0629 JavaScript \u0628\u0637\u064a\u0626\u0629. \u0645\u0627 \u0643\u0627\u0646 \u0633\u0628\u0628 \u0627\u0644\u0628\u0637\u0621\u061f','\u0643\u064a\u0641 \u062a\u062a\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u0628\u0631\u0645\u062c\u0629 \u063a\u064a\u0631 \u0627\u0644\u0645\u062a\u0632\u0627\u0645\u0646\u0629 \u0648\u062d\u0627\u0644\u0627\u062a \u0627\u0644\u062a\u0633\u0627\u0628\u0642 \u0641\u064a \u062a\u0637\u0628\u064a\u0642 \u0625\u0646\u062a\u0627\u062c\u064a\u061f'],
  python:['\u0635\u0641 \u0645\u0634\u0631\u0648\u0639 Python \u0643\u0627\u0646 \u0627\u0644\u0623\u062f\u0627\u0621 \u0641\u064a\u0647 \u0623\u0645\u0631\u064b\u0627 \u0645\u0647\u0645\u064b\u0627. \u0645\u0627 \u0627\u0644\u0630\u064a \u0642\u0645\u062a \u0628\u062a\u062d\u0644\u064a\u0644\u0647 \u0648\u062a\u063a\u064a\u064a\u0631\u0647\u061f','\u0643\u064a\u0641 \u062a\u0646\u0638\u0651\u0645 \u0642\u0627\u0639\u062f\u0629 \u0643\u0648\u062f Python \u0645\u062a\u0648\u0633\u0637\u0629 \u0627\u0644\u062d\u062c\u0645 \u0644\u062a\u0628\u0642\u0649 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0635\u064a\u0627\u0646\u0629\u061f'],
  sql:['\u0627\u0634\u0631\u062d \u0628\u0635\u0648\u062a \u0645\u0633\u0645\u0648\u0639 \u0643\u064a\u0641 \u0633\u062a\u062c\u062f \u0627\u0644\u0633\u062c\u0644\u0627\u062a \u0627\u0644\u0645\u0643\u0631\u0631\u0629 \u0641\u064a \u062c\u062f\u0648\u0644 \u0643\u0628\u064a\u0631.','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0645\u0631\u0629 \u0643\u0627\u0646 \u0641\u064a\u0647\u0627 \u0627\u0633\u062a\u0639\u0644\u0627\u0645 \u0628\u0637\u064a\u0626\u064b\u0627 \u062c\u062f\u064b\u0627 \u2014 \u0643\u064a\u0641 \u0634\u062e\u0651\u0635\u062a \u0627\u0644\u0645\u0634\u0643\u0644\u0629\u061f'],
  react:['\u0643\u064a\u0641 \u062a\u0642\u0631\u0631 \u0645\u062a\u0649 \u064a\u062d\u062a\u0627\u062c \u0627\u0644\u0645\u0643\u0648\u0651\u0646 \u0625\u0644\u0649 \u0627\u0644\u062a\u0642\u0633\u064a\u0645\u061f','\u0635\u0641 \u062e\u0637\u0623 \u0635\u0639\u0628\u064b\u0627 \u0641\u064a \u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u062d\u0627\u0644\u0629 \u0648\u0627\u062c\u0647\u062a\u0647 \u0648\u0623\u0635\u0644\u062d\u062a\u0647 \u0641\u064a \u062a\u0637\u0628\u064a\u0642 React.'],
  leadership:['\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0645\u0648\u0642\u0641 \u0627\u0636\u0637\u0631\u0631\u062a \u0641\u064a\u0647 \u0644\u062a\u0642\u062f\u064a\u0645 \u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0635\u0639\u0628\u0629 \u0644\u0623\u062d\u062f \u0623\u0639\u0636\u0627\u0621 \u0641\u0631\u064a\u0642\u0643.','\u0635\u0641 \u0642\u0631\u0627\u0631\u064b\u0627 \u0627\u062a\u062e\u0630\u062a\u0647 \u0648\u0644\u0645 \u064a\u0648\u0627\u0641\u0642 \u0639\u0644\u064a\u0647 \u0641\u0631\u064a\u0642\u0643. \u0645\u0627\u0630\u0627 \u062d\u062f\u062b\u061f'],
  management:['\u0643\u064a\u0641 \u062a\u0631\u062a\u0628 \u0623\u0648\u0644\u0648\u064a\u0627\u062a\u0643 \u0639\u0646\u062f\u0645\u0627 \u064a\u0631\u064a\u062f \u062b\u0644\u0627\u062b\u0629 \u0623\u0637\u0631\u0627\u0641 \u0645\u0639\u0646\u064a\u0629 \u062b\u0644\u0627\u062b\u0629 \u0623\u0645\u0648\u0631 \u0645\u062e\u062a\u0644\u0641\u0629 \u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u0623\u0633\u0628\u0648\u0639\u061f','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0645\u0648\u0638\u0641 \u062a\u0627\u0628\u0639 \u0644\u0643 \u0627\u0636\u0637\u0631\u0631\u062a \u0644\u0625\u062f\u0627\u0631\u0629 \u0623\u062f\u0627\u0626\u0647.'],
  sales:['\u0627\u0634\u0631\u062d \u0639\u0645\u0644\u064a\u062a\u0643 \u0641\u064a \u062a\u0623\u0647\u064a\u0644 \u0627\u0644\u0639\u0645\u064a\u0644 \u0627\u0644\u0645\u062d\u062a\u0645\u0644.','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0623\u0635\u0639\u0628 \u0635\u0641\u0642\u0629 \u062e\u0633\u0631\u062a\u0647\u0627 \u2014 \u0645\u0627\u0630\u0627 \u0643\u0646\u062a \u0633\u062a\u0641\u0639\u0644 \u0628\u0634\u0643\u0644 \u0645\u062e\u062a\u0644\u0641\u061f'],
  marketing:['\u0635\u0641 \u062d\u0645\u0644\u0629 \u0644\u0645 \u062a\u062d\u0642\u0642 \u0627\u0644\u0623\u062f\u0627\u0621 \u0627\u0644\u0645\u062a\u0648\u0642\u0639. \u0645\u0627\u0630\u0627 \u062a\u0639\u0644\u0645\u062a \u0645\u0646 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a\u061f','\u0643\u064a\u0641 \u062a\u0642\u0631\u0631 \u0627\u0644\u0642\u0646\u0627\u0629 \u0627\u0644\u062a\u064a \u0633\u062a\u0633\u062a\u062b\u0645\u0631 \u0641\u064a\u0647\u0627 \u0627\u0644\u0642\u0627\u062f\u0645\u0629\u061f'],
  design:['\u0627\u0634\u0631\u062d \u0639\u0645\u0644\u064a\u062a\u0643 \u0645\u0646 \u0627\u0633\u062a\u0644\u0627\u0645 \u0627\u0644\u0645\u0648\u062c\u0632 \u0648\u062d\u062a\u0649 \u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0646\u0647\u0627\u0626\u064a.','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0645\u0648\u0642\u0641 \u0623\u0628\u0637\u0644 \u0641\u064a\u0647 \u0627\u062e\u062a\u0628\u0627\u0631 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0627\u0641\u062a\u0631\u0627\u0636\u064b\u0627 \u062a\u0635\u0645\u064a\u0645\u064a\u064b\u0627 \u0644\u062f\u064a\u0643.'],
  communication:['\u0635\u0641 \u0645\u0648\u0642\u0641\u064b\u0627 \u0627\u0636\u0637\u0631\u0631\u062a \u0641\u064a\u0647 \u0644\u0634\u0631\u062d \u0623\u0645\u0631 \u062a\u0642\u0646\u064a \u0644\u062c\u0645\u0647\u0648\u0631 \u063a\u064a\u0631 \u062a\u0642\u0646\u064a.','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0633\u0648\u0621 \u0641\u0647\u0645 \u0645\u0639 \u0632\u0645\u064a\u0644 \u0648\u0643\u064a\u0641 \u0642\u0645\u062a \u0628\u062d\u0644\u0647.'],
  'project management':['\u0643\u064a\u0641 \u062a\u062a\u0639\u0627\u0645\u0644 \u0645\u0639 \u0645\u0634\u0631\u0648\u0639 \u064a\u062a\u062c\u0627\u0648\u0632 \u0627\u0644\u0645\u0648\u0639\u062f \u0627\u0644\u0646\u0647\u0627\u0626\u064a\u061f','\u0635\u0641 \u0643\u064a\u0641 \u062a\u062d\u0627\u0641\u0638 \u0639\u0644\u0649 \u062a\u0648\u0627\u0641\u0642 \u0641\u0631\u064a\u0642 \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0648\u0638\u0627\u0626\u0641.'],
  finance:['\u0627\u0634\u0631\u062d \u0643\u064a\u0641 \u0633\u062a\u0628\u0646\u064a \u0646\u0645\u0648\u0630\u062c\u064b\u0627 \u0645\u0627\u0644\u064a\u064b\u0627 \u0644\u062e\u0637 \u0645\u0646\u062a\u062c \u062c\u062f\u064a\u062f.','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u062a\u0648\u0642\u0639 \u0645\u0627\u0644\u064a \u0643\u0627\u0646 \u062e\u0627\u0637\u0626\u064b\u0627 \u2014 \u0645\u0627 \u0627\u0644\u0630\u064a \u0641\u0627\u062a\u0643\u061f'],
  writing:['\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0646\u0635 \u0643\u062a\u0628\u062a\u0647 \u0648\u062a\u0641\u062a\u062e\u0631 \u0628\u0647 \u0648\u0644\u0645\u0627\u0630\u0627.','\u0643\u064a\u0641 \u062a\u064f\u0643\u064a\u0651\u0641 \u0623\u0633\u0644\u0648\u0628\u0643 \u062d\u0633\u0628 \u0627\u0644\u062c\u0645\u0647\u0648\u0631 \u0627\u0644\u0645\u062e\u062a\u0644\u0641\u061f'],
  'customer support':['\u0635\u0641 \u0623\u0635\u0639\u0628 \u062a\u0641\u0627\u0639\u0644 \u0645\u0639 \u0639\u0645\u064a\u0644 \u062a\u0639\u0627\u0645\u0644\u062a \u0645\u0639\u0647.','\u0643\u064a\u0641 \u062a\u0642\u0631\u0631 \u0645\u062a\u0649 \u062a\u0635\u0639\u0651\u062f \u0645\u0634\u0643\u0644\u0629 \u0645\u0627\u061f'],
  data:['\u0627\u0634\u0631\u062d \u0643\u064a\u0641 \u062a\u062a\u062d\u0642\u0642 \u0645\u0646 \u0635\u062d\u0629 \u0645\u062c\u0645\u0648\u0639\u0629 \u0628\u064a\u0627\u0646\u0627\u062a \u0642\u0628\u0644 \u0627\u0644\u0648\u062b\u0648\u0642 \u0628\u062a\u062d\u0644\u064a\u0644\u0647\u0627.','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0645\u0648\u0642\u0641 \u063a\u064a\u0651\u0631 \u0641\u064a\u0647 \u062a\u062d\u0644\u064a\u0644\u0643 \u0642\u0631\u0627\u0631\u064b\u0627 \u0645\u0627.']
};
const GENERIC_QUESTIONS = [
  '\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0645\u0634\u0631\u0648\u0639 \u062a\u0641\u062a\u062e\u0631 \u0628\u0647 \u0648\u062f\u0648\u0631\u0643 \u0627\u0644\u0645\u062d\u062f\u062f \u0641\u064a\u0647.',
  '\u0635\u0641 \u0645\u0648\u0642\u0641\u064b\u0627 \u0627\u062e\u062a\u0644\u0641\u062a \u0641\u064a\u0647 \u0645\u0639 \u0642\u0631\u0627\u0631 \u0641\u064a \u0627\u0644\u0639\u0645\u0644 \u2014 \u0645\u0627\u0630\u0627 \u0641\u0639\u0644\u062a\u061f',
  '\u0645\u0627 \u0646\u0648\u0639 \u0627\u0644\u0628\u064a\u0626\u0629 \u0627\u0644\u062a\u064a \u062a\u0646\u062c\u0632 \u0641\u064a\u0647\u0627 \u0623\u0641\u0636\u0644 \u0623\u0639\u0645\u0627\u0644\u0643\u061f',
  '\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0645\u0648\u0642\u0641 \u0627\u0636\u0637\u0631\u0631\u062a \u0641\u064a\u0647 \u0644\u062a\u0639\u0644\u0645 \u0634\u064a\u0621 \u0628\u0633\u0631\u0639\u0629 \u0644\u0625\u0646\u062c\u0627\u0632 \u0645\u0647\u0645\u0629 \u0645\u0627.'
];

// DB is now a per-view CACHE, not the whole database. jobs and
// settings are small enough to hold in full; candidates hold only the
// current page; assessments/rankings/KPIs are fetched per view.
async function refreshJobs(){
  DB.jobs = await api.jobs();
}
async function refreshSettings(){
  DB.settings = await api.settings();
}
function uid(prefix){ return prefix + '_' + Math.random().toString(36).slice(2,9); }

/* ---------------------------------------------------------
   EXPORT HELPERS
--------------------------------------------------------- */
function safeFilename(name){
  return (name||'\u0645\u0631\u0634\u062d').replace(/[\\/:*?"<>|]/g,'_').trim() || '\u0645\u0631\u0634\u062d';
}
function downloadBlob(filename, content, mime){
  const blob = new Blob([content], {type: mime});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(()=>URL.revokeObjectURL(url), 1000);
}

/* ---------------------------------------------------------
   ORIGINAL FILE STORAGE \u2014 keeps the actual uploaded r\u00e9sum\u00e9
   (PDF/DOCX/TXT) downloadable later, not just its extracted text.
   Stored under its own key per candidate (not inside the main
   app-data blob) so large files don't bloat/slow down every save.
--------------------------------------------------------- */
function fileToBase64(file){
  return new Promise((resolve, reject)=>{
    const reader = new FileReader();
    reader.onload = ()=> resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
const MIME_BY_EXT = {pdf:'application/pdf', docx:'application/vnd.openxmlformats-officedocument.wordprocessingml.document', txt:'text/plain'};
// The original file is stored server-side with the candidate record;
// downloads stream straight from the API endpoint.
function downloadCandidateCV(candidate){
  if(candidate.hasOriginalFile){
    // Let the browser fetch it directly \u2014 no need to pull megabytes
    // of base64 through JS just to re-encode it as a blob.
    window.location.href = '/api/candidates/' + encodeURIComponent(candidate.id) + '/resume-file';
    return;
  }
  downloadBlob(safeFilename(candidate.name) + '.txt', candidate.resumeText || '\u0644\u0627 \u064a\u0648\u062c\u062f \u0646\u0635 \u0633\u064a\u0631\u0629 \u0630\u0627\u062a\u064a\u0629 \u0645\u0633\u062c\u0644.', 'text/plain;charset=utf-8;');
}

// CSV export is now generated by the server (/api/export/candidates.csv)
// so it works at any table size without loading everything client-side.

// Stage transitions (including remembering the previous stage when a
// candidate enters the alt-vacancy pool) are handled by the server in
// a single transaction \u2014 see POST /api/candidates/:id/stage.
const ALT_STAGE = '\u0645\u0646\u0627\u0633\u0628 \u0644\u0634\u0627\u063a\u0631 \u0622\u062e\u0631';

/* ---------------------------------------------------------
   R\u00c9SUM\u00c9 FILE PARSING
--------------------------------------------------------- */
if(window.pdfjsLib){
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}
async function extractResumeText(file){
  const ext = file.name.split('.').pop().toLowerCase();
  if(ext === 'txt'){ return await file.text(); }
  if(ext === 'pdf'){
    const buf = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({data: buf}).promise;
    let text = '';
    for(let i=1; i<=pdf.numPages; i++){
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      // pdf.js returns individual text runs, not visual lines \u2014 group
      // them into lines using each run's Y position (transform[5]),
      // since runs on the same visual line share (roughly) the same Y.
      let lastY = null;
      let line = '';
      const lines = [];
      content.items.forEach(item=>{
        const y = item.transform[5];
        if(lastY!==null && Math.abs(y-lastY)>2){
          lines.push(line.trim());
          line = '';
        }
        line += item.str + (item.hasEOL ? '' : ' ');
        lastY = y;
      });
      if(line.trim()) lines.push(line.trim());
      text += lines.join('\n') + '\n\n';
    }
    return text.trim();
  }
  if(ext === 'docx'){
    const buf = await file.arrayBuffer();
    const result = await mammoth.extractRawText({arrayBuffer: buf});
    return result.value.trim();
  }
  throw new Error('\u0646\u0648\u0639 \u0645\u0644\u0641 \u063a\u064a\u0631 \u0645\u062f\u0639\u0648\u0645: .' + ext + ' (\u0627\u0633\u062a\u062e\u062f\u0645 PDF \u0623\u0648 DOCX \u0623\u0648 TXT)');
}
function guessNameFromFilename(filename){
  return filename.replace(/\.(pdf|docx|txt)$/i,'')
    .replace(/[_\-]+/g,' ')
    .replace(/\b(resume|cv|final|updated|v\d+)\b/gi,'')
    .trim()
    .replace(/\s+/g,' ')
    .replace(/\b\w/g, c=>c.toUpperCase()) || '\u0645\u0631\u0634\u062d \u0628\u062f\u0648\u0646 \u0627\u0633\u0645';
}
function guessEmailFromText(text){
  const strict = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  let m = text.match(strict);
  if(m) return m[0];
  // PDF extraction often injects spaces inside the address
  // ("ahmed . otaibi @ gmail . com") \u2014 re-glue around @ and the dots,
  // then retry the strict pattern on the repaired copy.
  const glued = text
    .replace(/\s*@\s*/g, '@')
    .replace(/([a-zA-Z0-9])\s*([_-])\s*(?=[a-zA-Z0-9])/g, '$1$2')
    .replace(/([a-zA-Z0-9_%+-])\s*\.\s*(?=[a-zA-Z0-9])/g, '$1.');
  m = glued.match(strict);
  return m ? m[0] : '';
}
function guessPhoneFromText(text){
  text = normalizeDigits(text);
  // Prefer an explicit Saudi mobile (05xxxxxxxx or +9665xxxxxxxx) \u2014
  // unambiguous, so it can never be confused with dates or IDs.
  let m = text.match(/(?:\+?\s?9\s?6\s?6[\s.-]?|0)5\d(?:[\s.-]?\d){7}/);
  if(m) return m[0].replace(/\s+/g,' ').trim();
  // Fallback: general phone-looking numbers, excluding year ranges
  // like "2021 - 2025" that a loose pattern can swallow.
  const matches = text.match(/(\+?\d{1,3}[\s.-]?)?\(?\d{2,4}\)?[\s.-]?\d{3}[\s.-]?\d{3,4}/g) || [];
  const candidate = matches
    .map(s=>s.trim())
    .find(s=>{
      if(/^(19|20)\d{2}\s*[-\u2013\u2014]\s*(19|20)\d{2}$/.test(s)) return false;
      const digits = s.replace(/\D/g,'');
      return digits.length>=7 && digits.length<=15;
    });
  return candidate || '';
}
// Lines that are structural parts of a r\u00e9sum\u00e9, not the person's name
// or title \u2014 section headers, locations, links. A naive parser (like
// many real ATS systems) grabs these by mistake.
const NOT_NAME_PATTERNS = /\b(summary|profile|objective|contact|education|experience|skills|projects|certifications?|languages?|references?|address|linkedin|github|portfolio|riyadh|jeddah|dammam|makkah|madinah|saudi|arabia|ksa)\b|\u0627\u0644\u0645\u0644\u062e\u0635|\u0646\u0628\u0630\u0629|\u0627\u0644\u0647\u062f\u0641|\u0627\u0644\u062a\u0648\u0627\u0635\u0644|\u0627\u0644\u062a\u0639\u0644\u064a\u0645|\u0627\u0644\u0645\u0624\u0647\u0644\u0627\u062a|\u0627\u0644\u062e\u0628\u0631\u0627\u062a|\u0627\u0644\u062e\u0628\u0631\u0629|\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a|\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639|\u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a|\u0627\u0644\u0644\u063a\u0627\u062a|\u0627\u0644\u0639\u0646\u0648\u0627\u0646|\u0627\u0644\u0631\u064a\u0627\u0636|\u062c\u062f\u0629|\u0627\u0644\u062f\u0645\u0627\u0645|\u0645\u0643\u0629|\u0627\u0644\u0645\u062f\u064a\u0646\u0629|\u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629/i;
// ATS extractors for degree / specialization / city \u2014 shared by the
// add-candidate modal, the bulk import, and the public apply page.
function guessDegreeFromText(text){
  if(/\u062f\u0643\u062a\u0648\u0631\u0627\u0647|Ph\.?D/i.test(text)) return '\u062f\u0643\u062a\u0648\u0631\u0627\u0647';
  if(/\u0645\u0627\u062c\u0633\u062a\u064a\u0631|Master|M\.?Sc/i.test(text)) return '\u0645\u0627\u062c\u0633\u062a\u064a\u0631';
  if(/\u0628\u0643\u0627\u0644\u0648\u0631\u064a\u0648\u0633|Bachelor|B\.?Sc/i.test(text)) return '\u0628\u0643\u0627\u0644\u0648\u0631\u064a\u0648\u0633';
  if(/\u062f\u0628\u0644\u0648\u0645|Diploma/i.test(text)) return '\u062f\u0628\u0644\u0648\u0645';
  return '';
}
function guessSpecializationFromText(text){
  const m = text.match(/(?:\u0628\u0643\u0627\u0644\u0648\u0631\u064a\u0648\u0633|\u0645\u0627\u062c\u0633\u062a\u064a\u0631|\u062f\u0643\u062a\u0648\u0631\u0627\u0647|\u062f\u0628\u0644\u0648\u0645)\s*(?:\u0641\u064a|\u062a\u062e\u0635\u0635)?\s+([^\n\u060c,.\u061b:()0-9\-\u2014\u2013]{3,40})/)
    || text.match(/(?:Bachelor(?:'s)?|Master(?:'s)?|B\.?Sc\.?|M\.?Sc\.?|PhD)\s+(?:of|in)\s+([A-Za-z &]{3,40})/i);
  return m ? m[1].trim() : '';
}
function guessCityFromText(text){
  const m = text.match(/\u0627\u0644\u0631\u064a\u0627\u0636|\u062c\u062f\u0629|\u0645\u0643\u0629 \u0627\u0644\u0645\u0643\u0631\u0645\u0629|\u0645\u0643\u0629|\u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629|\u0627\u0644\u062f\u0645\u0627\u0645|\u0627\u0644\u062e\u0628\u0631|\u0627\u0644\u0638\u0647\u0631\u0627\u0646|\u0627\u0644\u0623\u062d\u0633\u0627\u0621|\u0628\u0631\u064a\u062f\u0629|\u0627\u0644\u0642\u0635\u064a\u0645|\u0623\u0628\u0647\u0627|\u062e\u0645\u064a\u0633 \u0645\u0634\u064a\u0637|\u062a\u0628\u0648\u0643|\u062d\u0627\u0626\u0644|\u062c\u0627\u0632\u0627\u0646|\u0646\u062c\u0631\u0627\u0646|\u0627\u0644\u0637\u0627\u0626\u0641|Riyadh|Jeddah|Dammam|Khobar|Makkah|Madinah|Tabuk/i);
  return m ? m[0] : '';
}

function guessEmployersFromText(text){
  const t = String(text || '');
  const found = [];
  const seen = new Set();
  const push = (name)=>{
    const clean = name.trim().replace(/\s+/g,' ').replace(/[.\u060c,;:]+$/,'');
    if(clean.length < 3 || clean.length > 60) return;
    const key = clean.toLowerCase();
    if(seen.has(key)) return;
    seen.add(key); found.push(clean);
  };
  const eduNear = (idx)=>{
    const behind = t.slice(Math.max(0, idx-45), idx+10);
    return /\u0628\u0643\u0627\u0644\u0648\u0631\u064a\u0648\u0633|\u0645\u0627\u062c\u0633\u062a\u064a\u0631|\u062f\u0643\u062a\u0648\u0631\u0627\u0647|\u062f\u0628\u0644\u0648\u0645|\u062f\u0631\u062c\u0629|\u062a\u062e\u0631\u062c|Bachelor|Master|PhD|Degree|GPA|\u0627\u0644\u0645\u0639\u062f\u0644/i.test(behind);
  };
  let m;
  const ar = /(?:\u0634\u0631\u0643\u0629|\u0645\u0624\u0633\u0633\u0629|\u0645\u062c\u0645\u0648\u0639\u0629|\u0628\u0646\u0643|\u0645\u0633\u062a\u0634\u0641\u0649|\u0647\u064a\u0626\u0629|\u0648\u0632\u0627\u0631\u0629|\u0645\u0635\u0646\u0639|\u0645\u0631\u0643\u0632|\u0645\u062f\u064a\u0646\u0629)\s+([^\n\u060c,.\u061b:()\-]{2,45})/g;
  while((m = ar.exec(t))){ if(!eduNear(m.index)) push(m[0]); }
  const arUni = /\u062c\u0627\u0645\u0639\u0629\s+([^\n\u060c,.\u061b:()\-]{2,40})/g;
  while((m = arUni.exec(t))){ if(!eduNear(m.index)) push(m[0]); }
  const enAt = /\b(?:at|with)\s+([A-Z][A-Za-z0-9&.'\-]*(?:\s+[A-Z][A-Za-z0-9&.'\-]*){0,4})/g;
  while((m = enAt.exec(t))){ if(!eduNear(m.index)) push(m[1]); }
  const enSuffix = /^\s*([A-Z][A-Za-z0-9&.'\- ]{2,50}?\s(?:Inc|LLC|Ltd|Co|Corp|Company|Group|Bank|Hospital|Solutions|Technologies)\.?)\s*$/gm;
  while((m = enSuffix.exec(t))) push(m[1]);
  return found.slice(0, 6);
}

function guessNameFromText(text){
  const lines = text.split('\n').map(l=>l.trim()).filter(Boolean);
  for(let i=0;i<Math.min(lines.length,8);i++){
    const line = lines[i];
    if(line.length<3 || line.length>60) continue;
    if(line.includes('@') || line.includes('http')) continue;
    if((line.match(/\d/g)||[]).length>2) continue;
    const wordCount = line.split(/\s+/).length;
    if(wordCount<2 || wordCount>5) continue;
    if(/^(cv|resume|r\u00e9sum\u00e9|\u0627\u0644\u0633\u064a\u0631\u0629 \u0627\u0644\u0630\u0627\u062a\u064a\u0629|\u0633\u064a\u0631\u0629 \u0630\u0627\u062a\u064a\u0629)$/i.test(line)) continue;
    if(NOT_NAME_PATTERNS.test(line)) continue;
    return line;
  }
  return '';
}
const TITLE_KEYWORDS = ['engineer','developer','manager','director','analyst','designer','consultant',
  'specialist','coordinator','accountant','officer','executive','assistant','lead','architect',
  'administrator','supervisor','representative','technician','scientist','researcher','intern',
  '\u0645\u0647\u0646\u062f\u0633','\u0645\u0647\u0646\u062f\u0633\u0629','\u0645\u062f\u064a\u0631','\u0645\u062f\u064a\u0631\u0629','\u0645\u062d\u0644\u0644','\u0645\u062d\u0644\u0644\u0629','\u0645\u0637\u0648\u0631','\u0645\u0637\u0648\u0631\u0629','\u0645\u0635\u0645\u0645','\u0645\u0635\u0645\u0645\u0629','\u0645\u0633\u062a\u0634\u0627\u0631','\u0645\u0633\u062a\u0634\u0627\u0631\u0629',
  '\u0645\u062e\u062a\u0635','\u0645\u062e\u062a\u0635\u0629','\u0645\u0646\u0633\u0642','\u0645\u0646\u0633\u0642\u0629','\u0645\u062d\u0627\u0633\u0628','\u0645\u062d\u0627\u0633\u0628\u0629','\u0645\u0633\u0624\u0648\u0644','\u0645\u0633\u0624\u0648\u0644\u0629','\u0645\u0633\u0627\u0639\u062f','\u0645\u0633\u0627\u0639\u062f\u0629','\u0631\u0626\u064a\u0633','\u0631\u0626\u064a\u0633\u0629',
  '\u0645\u0634\u0631\u0641','\u0645\u0634\u0631\u0641\u0629','\u0641\u0646\u064a','\u0641\u0646\u064a\u0629','\u0623\u062e\u0635\u0627\u0626\u064a','\u0623\u062e\u0635\u0627\u0626\u064a\u0629','\u0645\u0648\u0638\u0641','\u0645\u0648\u0638\u0641\u0629'];
// Education-context words: a line like "College of Engineering" contains
// "engineer" but is a school, not a job title.
const EDU_LINE = /university|college|bachelor|master|phd|diploma|degree|faculty|institute|gpa|\u062c\u0627\u0645\u0639\u0629|\u0643\u0644\u064a\u0629|\u0628\u0643\u0627\u0644\u0648\u0631\u064a\u0648\u0633|\u0645\u0627\u062c\u0633\u062a\u064a\u0631|\u062f\u0643\u062a\u0648\u0631\u0627\u0647|\u062f\u0628\u0644\u0648\u0645|\u0645\u0639\u0647\u062f|\u0627\u0644\u0645\u0639\u062f\u0644|\u0634\u0647\u0627\u062f\u0629/i;
function guessJobTitleFromText(text){
  const lines = text.split('\n').map(l=>l.trim()).filter(Boolean);
  for(let i=0;i<Math.min(lines.length,30);i++){
    const line = lines[i];
    if(line.length<3 || line.length>80) continue;
    if(EDU_LINE.test(line)) continue;
    const low = line.toLowerCase();
    if(TITLE_KEYWORDS.some(k=>low.includes(k))) return line;
  }
  return '';
}
const KNOWN_SKILLS = Object.keys(SKILL_BANK).concat(['html','css','node','typescript','excel','powerpoint','negotiation','recruiting','operations','analytics','aws','docker','kubernetes']);
function guessSkillsFromText(text){
  const low = text.toLowerCase();
  return KNOWN_SKILLS.filter(s=>low.includes(s));
}
function normalizeDigits(text){
  const arabicIndic = '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
  return text.replace(/[\u0660-\u0669]/g, d => String(arabicIndic.indexOf(d)));
}
// Section headers that tell us what part of the r\u00e9sum\u00e9 we're in.
const EXP_SECTION = /^\s*(?:professional\s+)?(?:work\s+)?(?:experience|employment(?:\s+history)?|career(?:\s+history)?|\u0627\u0644\u062e\u0628\u0631\u0627\u062a?(?:\s+\u0627\u0644\u0639\u0645\u0644\u064a\u0629| \u0627\u0644\u0645\u0647\u0646\u064a\u0629)?|\u0627\u0644\u062e\u0628\u0631\u0629(?:\s+\u0627\u0644\u0639\u0645\u0644\u064a\u0629| \u0627\u0644\u0645\u0647\u0646\u064a\u0629)?|\u0627\u0644\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0648\u0638\u064a\u0641\u064a|\u0627\u0644\u0633\u062c\u0644 \u0627\u0644\u0648\u0638\u064a\u0641\u064a)\s*:?\s*$/i;
const EDU_SECTION = /^\s*(?:education|academic(?:\s+background)?|qualifications?|\u0627\u0644\u062a\u0639\u0644\u064a\u0645|\u0627\u0644\u0645\u0624\u0647\u0644\u0627\u062a?(?:\s+\u0627\u0644\u0639\u0644\u0645\u064a\u0629| \u0627\u0644\u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629)?|\u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a \u0627\u0644\u0639\u0644\u0645\u064a\u0629|\u0627\u0644\u062f\u0631\u0627\u0633\u0629)\s*:?\s*$/i;
const OTHER_SECTION = /^\s*(?:skills|projects|certifications?|courses?|training|languages?|volunteer(?:ing)?|references?|awards?|interests?|\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a|\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639|\u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a|\u0627\u0644\u062f\u0648\u0631\u0627\u062a(?:\s+\u0627\u0644\u062a\u062f\u0631\u064a\u0628\u064a\u0629)?|\u0627\u0644\u062a\u062f\u0631\u064a\u0628|\u0627\u0644\u0644\u063a\u0627\u062a|\u0627\u0644\u062a\u0637\u0648\u0639|\u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062a\u0637\u0648\u0639\u064a\u0629|\u0627\u0644\u0645\u0631\u0627\u062c\u0639|\u0627\u0644\u062c\u0648\u0627\u0626\u0632|\u0627\u0644\u0627\u0647\u062a\u0645\u0627\u0645\u0627\u062a)\s*:?\s*$/i;

function guessExperienceYears(text){
  text = normalizeDigits(text);

  // Tier 1: an explicit statement of total experience. The keyword
  // "experience/\u062e\u0628\u0631\u0629" must actually be attached to the number \u2014
  // otherwise "a 4-year program" or "\u0645\u062f\u0629 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062c 4 \u0633\u0646\u0648\u0627\u062a" in the
  // education section gets mistaken for work experience.
  let m = text.match(/(\d{1,2})\s*\+?\s*(?:years?|yrs?)(?:\s+of)?\s+(?:\w+\s+){0,2}?experience/i);
  if(m) return Math.min(45, Number(m[1]));
  m = text.match(/experience\s*[:\-]?\s*(\d{1,2})\s*\+?\s*(?:years?|yrs?)/i);
  if(m) return Math.min(45, Number(m[1]));
  m = text.match(/(?:\u062e\u0628\u0631\u0629|\u0627\u0644\u062e\u0628\u0631\u0629)\D{0,15}?(\d{1,2})\s*(?:\u0633\u0646\u0629|\u0633\u0646\u0648\u0627\u062a|\u0633\u0646\u0647|\u0639\u0627\u0645|\u0623\u0639\u0648\u0627\u0645)/);
  if(m) return Math.min(45, Number(m[1]));
  m = text.match(/(\d{1,2})\s*(?:\u0633\u0646\u0629|\u0633\u0646\u0648\u0627\u062a|\u0633\u0646\u0647|\u0639\u0627\u0645|\u0623\u0639\u0648\u0627\u0645)\s*(?:\u0645\u0646\s+)?(?:\u0627\u0644)?\u062e\u0628\u0631\u0629/);
  if(m) return Math.min(45, Number(m[1]));

  // Tier 2: infer from year ranges \u2014 but section-aware. Ranges inside
  // the education section (Bachelor 2021\u20132025) are NOT experience;
  // that's the classic ATS mistake that turns a fresh graduate into
  // "4 years of experience". A line's own content can also mark it as
  // education (e.g. "\u0628\u0643\u0627\u0644\u0648\u0631\u064a\u0648\u0633 ... 2021 - 2025" with no section header).
  const currentYear = new Date().getFullYear();
  const presentRe = /present|current|now|\u062d\u062a\u0649 \u0627\u0644\u0622\u0646|\u062d\u062a\u0649 \u0627\u0644\u0627\u0646|\u0627\u0644\u0622\u0646 \u062d\u0627\u0644\u064a\u064b\u0627|\u062d\u0627\u0644\u064a\u0627|\u062d\u0627\u0644\u064a\u064b\u0627|\u0645\u0627 \u0632\u0627\u0644|\u0645\u0627\u0632\u0627\u0644|\u0625\u0644\u0649 \u0627\u0644\u0622\u0646|\u0627\u0644\u0649 \u0627\u0644\u0627\u0646/i;
  const lines = text.split('\n');
  let section = 'other';           // until a header says otherwise
  let sawExpSection = false;
  const expRanges = [], otherRanges = [];

  for(const raw of lines){
    const line = raw.trim();
    if(!line) continue;
    if(EXP_SECTION.test(line)){ section='experience'; sawExpSection=true; continue; }
    if(EDU_SECTION.test(line)){ section='education'; continue; }
    if(OTHER_SECTION.test(line)){ section='other'; continue; }

    const isEduLine = EDU_LINE.test(line);
    const years = [...line.matchAll(/\b(19[7-9]\d|20[0-4]\d)\b/g)].map(x=>Number(x[1]));
    if(!years.length) continue;
    const hasPresent = presentRe.test(line);
    let span = null;
    if(years.length>=2) span = Math.max(...years) - Math.min(...years);
    else if(hasPresent) span = currentYear - years[0];
    if(span===null || span<0 || span>45) continue;

    if(section==='education' || isEduLine){ continue; }
    if(section==='experience') expRanges.push(span);
    else otherRanges.push(span);
  }

  // Prefer ranges from an explicit experience section; sum them so two
  // jobs of 2 years each read as 4, not as the outer span of 6 with a
  // gap. Cap at 45.
  const sum = a => a.reduce((s,x)=>s+x,0);
  if(sawExpSection && expRanges.length) return Math.min(45, sum(expRanges));
  if(!sawExpSection && otherRanges.length) return Math.min(45, sum(otherRanges));
  return 0;
}

/* ---------------------------------------------------------
   ASSESSMENT PDF PARSING \u2014 score out of 30, plus signature line
--------------------------------------------------------- */
function guessScoreFromAssessmentText(text){
  let m = text.match(/(\d{1,2}(?:\.\d+)?)\s*\/\s*30/);
  if(m) return Math.max(0, Math.min(30, Number(m[1])));
  m = text.match(/(?:score|total score|\u0627\u0644\u062f\u0631\u062c\u0629|\u0627\u0644\u0646\u062a\u064a\u062c\u0629|\u0627\u0644\u062f\u0631\u062c\u0629 \u0627\u0644\u0643\u0644\u064a\u0629|\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u062f\u0631\u062c\u0629)\s*[:\-]?\s*(\d{1,2}(?:\.\d+)?)/i);
  if(m) return Math.max(0, Math.min(30, Number(m[1])));
  return null;
}
function guessSignatureFromAssessmentText(text){
  const m = text.match(/(?:signed by|signature|\u0627\u0644\u062a\u0648\u0642\u064a\u0639|\u062a\u0648\u0642\u064a\u0639|\u0645\u0648\u0642\u0651\u0639 \u0645\u0646|\u0645\u0648\u0642\u0639 \u0645\u0646)\s*[:\-]?\s*([^\n]{2,60})/i);
  return m ? m[1].trim() : '';
}

// DB is a per-view cache, not the whole database (see the API client above).
let DB = null;

/* ---------------------------------------------------------
   SMART SCORING
--------------------------------------------------------- */
function matchScore(candidate, job){
  if(!job) return null;
  const text = (candidate.resumeText+' '+candidate.skills.join(' ')).toLowerCase();
  const req = job.requiredSkills||[];
  const nice = job.niceSkills||[];
  if(req.length===0 && nice.length===0) return 50;
  let hitReq=0, hitNice=0;
  req.forEach(s=>{ if(text.includes(s.toLowerCase())) hitReq++; });
  nice.forEach(s=>{ if(text.includes(s.toLowerCase())) hitNice++; });
  const reqScore = req.length ? (hitReq/req.length) : 1;
  const niceScore = nice.length ? (hitNice/nice.length) : 1;
  let score = reqScore*70 + niceScore*20;
  const seniorityTarget = {'\u0645\u0628\u062a\u062f\u0626':1,'\u0645\u062a\u0648\u0633\u0637':3,'\u0643\u0628\u064a\u0631':5,'\u0642\u064a\u0627\u062f\u064a':8}[job.seniority] || 3;
  const gap = Math.abs((candidate.experienceYears||0) - seniorityTarget);
  const expScore = Math.max(0, 10 - gap*2);
  score += expScore;
  return Math.round(Math.min(100, score));
}
const ASSESSMENT_MAX = 30;
// Assessment aggregates now arrive with each candidate from the
// server (assessAvg / assessMax / assessCount), computed in SQL \u2014
// no need to scan a full in-memory assessments table.
function compositeRank(candidate){
  const job = DB.jobs.find(j=>j.id===candidate.appliedFor);
  // No linked job = nothing to match against: 0%, shown neutral gray \u2014
  // the real score appears once a job is selected (smart match mode).
  const m = matchScore(candidate, job) ?? 0;
  const a = candidate.assessAvg ?? null;
  const aNormalized = a!==null ? (a/ASSESSMENT_MAX)*100 : null;
  const composite = aNormalized!==null ? Math.round(m*0.55 + aNormalized*0.45) : m;
  return {matchPct:m, assessAvg:a, composite};
}
function scoreColor(score){
  if(score>=80) return '#5fb87a';
  if(score>=60) return '#d4a24c';
  if(score>=30) return '#8fa3b3';
  return '#b9c4cf';
}
function assessmentScoreColor(score){
  const pct = (score/ASSESSMENT_MAX)*100;
  if(pct>=80) return '#5fb87a';
  if(pct>=60) return '#d4a24c';
  return '#c1585f';
}
// \u0628\u0646\u0643 \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u2014 a large curated library the recruiter picks from
// when building a job. Separate from SKILL_BANK (interview questions).
// \u0628\u0646\u0643 \u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0645\u0642\u0627\u0628\u0644\u0627\u062a \u2014 \u0645\u0646\u0638\u0645 \u062d\u0633\u0628 \u0627\u0644\u0645\u062c\u0627\u0644 (\u0661\u0665 \u0645\u062c\u0627\u0644\u064b\u0627) \u0648\u0627\u0644\u0645\u0633\u062a\u0648\u0649
// (\u0645\u0628\u062a\u062f\u0626/\u0645\u062a\u0648\u0633\u0637/\u0643\u0628\u064a\u0631/\u0642\u064a\u0627\u062f\u064a). \u0645\u0628\u0646\u064a \u0639\u0644\u0649 \u0623\u0641\u0636\u0644 \u0645\u0645\u0627\u0631\u0633\u0627\u062a \u0627\u0644\u0645\u0642\u0627\u0628\u0644\u0627\u062a \u0627\u0644\u0645\u0646\u0634\u0648\u0631\u0629:
// \u0627\u0644\u0645\u0628\u062a\u062f\u0626 \u064a\u064f\u0642\u0627\u0633 \u0628\u0642\u0627\u0628\u0644\u064a\u0629 \u0627\u0644\u062a\u0639\u0644\u0645 \u0644\u0627 \u0628\u0642\u0635\u0635 \u062e\u0628\u0631\u0629 \u0644\u0627 \u064a\u0645\u0644\u0643\u0647\u0627\u060c \u0648\u0627\u0644\u0645\u062a\u0648\u0633\u0637
// \u0628\u0627\u0644\u0627\u0633\u062a\u0642\u0644\u0627\u0644\u064a\u0629 \u0648\u0627\u0644\u062a\u0623\u062b\u064a\u0631 \u0628\u0644\u0627 \u0633\u0644\u0637\u0629\u060c \u0648\u0627\u0644\u0643\u0628\u064a\u0631 \u0628\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u063a\u0645\u0648\u0636 \u0648\u0627\u0644\u0642\u064a\u0627\u062f\u0629 \u0639\u0628\u0631
// \u0627\u0644\u0622\u062e\u0631\u064a\u0646\u060c \u0648\u0627\u0644\u0642\u064a\u0627\u062f\u064a \u0628\u0627\u0644\u0642\u0631\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u0624\u0633\u0633\u064a\u0629 \u0648\u0627\u0644\u0645\u0633\u0627\u0621\u0644\u0629.
const QUESTION_BANK = {
'\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0648\u0627\u0644\u0628\u0631\u0645\u062c\u0629': {
 '\u0645\u0628\u062a\u062f\u0626':['\u0627\u0634\u0631\u062d \u0645\u0634\u0631\u0648\u0639\u064b\u0627 \u0628\u0631\u0645\u062c\u064a\u064b\u0627 \u0628\u0646\u064a\u062a\u0647 \u0623\u062b\u0646\u0627\u0621 \u0627\u0644\u062f\u0631\u0627\u0633\u0629 \u0623\u0648 \u062a\u062f\u0631\u064a\u0628\u0643 \u2014 \u0645\u0627 \u062f\u0648\u0631\u0643 \u0641\u064a\u0647 \u0628\u0627\u0644\u0636\u0628\u0637\u061f','\u0643\u064a\u0641 \u062a\u062a\u0635\u0631\u0641 \u062d\u064a\u0646 \u062a\u0648\u0627\u062c\u0647 \u062e\u0637\u0623 \u0628\u0631\u0645\u062c\u064a\u064b\u0627 \u0644\u0627 \u062a\u0641\u0647\u0645 \u0633\u0628\u0628\u0647\u061f \u0635\u0641 \u062e\u0637\u0648\u0627\u062a\u0643.','\u0645\u0627 \u0627\u0644\u0641\u0631\u0642 \u0628\u064a\u0646 \u0642\u0627\u0639\u062f\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0639\u0644\u0627\u0626\u0642\u064a\u0629 \u0648\u063a\u064a\u0631 \u0627\u0644\u0639\u0644\u0627\u0626\u0642\u064a\u0629\u061f \u0648\u0645\u062a\u0649 \u062a\u062e\u062a\u0627\u0631 \u0643\u0644\u064b\u0627 \u0645\u0646\u0647\u0645\u0627\u061f'],
 '\u0645\u062a\u0648\u0633\u0637':['\u0635\u0641 \u0646\u0638\u0627\u0645\u064b\u0627 \u0635\u0645\u0645\u062a\u0647 \u0623\u0648 \u0637\u0648\u0631\u062a\u0647 \u0645\u0646 \u0627\u0644\u0628\u062f\u0627\u064a\u0629 \u0644\u0644\u0646\u0647\u0627\u064a\u0629 \u2014 \u0645\u0627 \u0627\u0644\u0642\u0631\u0627\u0631\u0627\u062a \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u062a\u064a \u0627\u062a\u062e\u0630\u062a\u0647\u0627 \u0648\u0644\u0645\u0627\u0630\u0627\u061f','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u0625\u0646\u062a\u0627\u062c \u062a\u0639\u0627\u0645\u0644\u062a \u0645\u0639\u0647 \u2014 \u0643\u064a\u0641 \u0634\u062e\u0635\u062a\u0647 \u0648\u0645\u0627 \u0627\u0644\u0630\u064a \u063a\u064a\u0631\u062a\u0647 \u0628\u0639\u062f\u0647\u061f','\u0643\u064a\u0641 \u062a\u0648\u0627\u0632\u0646 \u0628\u064a\u0646 \u0633\u0631\u0639\u0629 \u0627\u0644\u062a\u0633\u0644\u064a\u0645 \u0648\u062c\u0648\u062f\u0629 \u0627\u0644\u0643\u0648\u062f \u0639\u0646\u062f\u0645\u0627 \u064a\u0636\u063a\u0637 \u0627\u0644\u062c\u062f\u0648\u0644 \u0627\u0644\u0632\u0645\u0646\u064a\u061f'],
 '\u0643\u0628\u064a\u0631':['\u0635\u0641 \u0642\u0631\u0627\u0631\u064b\u0627 \u0645\u0639\u0645\u0627\u0631\u064a\u064b\u0627 \u0627\u062a\u062e\u0630\u062a\u0647 \u0648\u0643\u0627\u0646 \u0645\u062b\u064a\u0631\u064b\u0627 \u0644\u0644\u062c\u062f\u0644 \u062f\u0627\u062e\u0644 \u0627\u0644\u0641\u0631\u064a\u0642 \u2014 \u0643\u064a\u0641 \u062d\u0633\u0645\u062a\u0647\u061f','\u0643\u064a\u0641 \u062a\u0631\u0641\u0639 \u0645\u0633\u062a\u0648\u0649 \u0645\u0637\u0648\u0631\u064a\u0646 \u0623\u0642\u0644 \u062e\u0628\u0631\u0629 \u0645\u0646\u0643 \u062f\u0648\u0646 \u0623\u0646 \u062a\u0643\u062a\u0628 \u0627\u0644\u0643\u0648\u062f \u0628\u062f\u0644\u064b\u0627 \u0639\u0646\u0647\u0645\u061f','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u062f\u064a\u0646 \u062a\u0642\u0646\u064a \u0648\u0631\u062b\u062a\u0647 \u2014 \u0643\u064a\u0641 \u0642\u064a\u0651\u0645\u062a \u0645\u0627 \u064a\u0633\u062a\u062d\u0642 \u0627\u0644\u0625\u0635\u0644\u0627\u062d \u0648\u0645\u0627 \u064a\u064f\u0624\u062c\u0644\u061f'],
 '\u0642\u064a\u0627\u062f\u064a':['\u0643\u064a\u0641 \u062a\u0628\u0646\u064a \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 \u062a\u0642\u0646\u064a\u0629 \u0644\u0625\u062f\u0627\u0631\u0629 \u0643\u0627\u0645\u0644\u0629 \u0648\u062a\u0631\u0628\u0637\u0647\u0627 \u0628\u0623\u0647\u062f\u0627\u0641 \u0627\u0644\u0645\u0646\u0634\u0623\u0629\u061f','\u0635\u0641 \u0642\u0631\u0627\u0631\u064b\u0627 \u062a\u0642\u0646\u064a\u064b\u0627 \u0645\u0643\u0644\u0641\u064b\u0627 \u0627\u062a\u062e\u0630\u062a\u0647 \u0648\u062a\u062d\u0645\u0644\u062a \u0645\u0633\u0624\u0648\u0644\u064a\u0629 \u0646\u062a\u0627\u0626\u062c\u0647 \u0623\u0645\u0627\u0645 \u0627\u0644\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0639\u0644\u064a\u0627.','\u0643\u064a\u0641 \u062a\u0648\u0627\u0632\u0646 \u0628\u064a\u0646 \u0627\u0644\u0627\u0628\u062a\u0643\u0627\u0631 \u0648\u0627\u0644\u0627\u0633\u062a\u0642\u0631\u0627\u0631 \u0627\u0644\u062a\u0634\u063a\u064a\u0644\u064a \u0641\u064a \u0623\u0646\u0638\u0645\u0629 \u062d\u0633\u0627\u0633\u0629\u061f']},
'\u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a': {
 '\u0645\u0628\u062a\u062f\u0626':['\u0627\u0634\u0631\u062d \u0645\u0634\u0631\u0648\u0639 \u062a\u062d\u0644\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0623\u0646\u062c\u0632\u062a\u0647 \u2014 \u0645\u0627 \u0627\u0644\u0633\u0624\u0627\u0644 \u0627\u0644\u0630\u064a \u0623\u062c\u0628\u062a \u0639\u0646\u0647 \u0648\u0645\u0627 \u0623\u062f\u0648\u0627\u062a\u0643\u061f','\u0645\u0627 \u0627\u0644\u0641\u0631\u0642 \u0628\u064a\u0646 \u0627\u0644\u0645\u062a\u0648\u0633\u0637 \u0648\u0627\u0644\u0648\u0633\u064a\u0637\u060c \u0648\u0645\u062a\u0649 \u064a\u0636\u0644\u0644\u0643 \u0627\u0644\u0645\u062a\u0648\u0633\u0637\u061f','\u0643\u064a\u0641 \u062a\u062a\u0639\u0627\u0645\u0644 \u0645\u0639 \u0628\u064a\u0627\u0646\u0627\u062a \u0646\u0627\u0642\u0635\u0629 \u0623\u0648 \u0645\u0643\u0631\u0631\u0629 \u0642\u0628\u0644 \u0627\u0644\u062a\u062d\u0644\u064a\u0644\u061f'],
 '\u0645\u062a\u0648\u0633\u0637':['\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u062a\u062d\u0644\u064a\u0644 \u0642\u062f\u0645\u062a\u0647 \u063a\u064a\u0651\u0631 \u0642\u0631\u0627\u0631\u064b\u0627 \u0641\u0639\u0644\u064a\u064b\u0627 \u0644\u062f\u0649 \u0635\u0627\u062d\u0628 \u0627\u0644\u0639\u0645\u0644 \u2014 \u0643\u064a\u0641 \u0639\u0631\u0636\u062a\u0647\u061f','\u0643\u064a\u0641 \u062a\u062a\u062d\u0642\u0642 \u0645\u0646 \u0635\u062d\u0629 \u0646\u0645\u0648\u0630\u062c \u062a\u0646\u0628\u0624\u064a \u0642\u0628\u0644 \u0627\u0644\u0627\u0639\u062a\u0645\u0627\u062f \u0639\u0644\u064a\u0647\u061f','\u0635\u0641 \u0644\u0648\u062d\u0629 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0628\u0646\u064a\u062a\u0647\u0627 \u2014 \u0643\u064a\u0641 \u0627\u062e\u062a\u0631\u062a \u0645\u0624\u0634\u0631\u0627\u062a\u0647\u0627 \u0648\u0644\u0645\u0646\u061f'],
 '\u0643\u0628\u064a\u0631':['\u0635\u0641 \u0645\u0634\u0631\u0648\u0639 \u0628\u064a\u0627\u0646\u0627\u062a \u0641\u0634\u0644 \u0623\u0648 \u0623\u0639\u0637\u0649 \u0646\u062a\u0627\u0626\u062c \u0645\u0636\u0644\u0644\u0629 \u2014 \u0645\u0627 \u0627\u0644\u0630\u064a \u062a\u0639\u0644\u0645\u062a\u0647 \u0639\u0646 \u062c\u0648\u062f\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a\u061f','\u0643\u064a\u0641 \u062a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0645\u0644\u0627\u0621\u0645\u0629 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0644\u0645\u0634\u0643\u0644\u0629 \u0645\u0627 \u0628\u062f\u0644 \u0627\u0644\u062d\u0644\u0648\u0644 \u0627\u0644\u062a\u0642\u0644\u064a\u062f\u064a\u0629\u061f','\u0643\u064a\u0641 \u062a\u0628\u0646\u064a \u062d\u0648\u0643\u0645\u0629 \u0628\u064a\u0627\u0646\u0627\u062a \u062a\u062d\u0645\u064a \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629 \u062f\u0648\u0646 \u062e\u0646\u0642 \u0627\u0644\u062a\u062d\u0644\u064a\u0644\u061f'],
 '\u0642\u064a\u0627\u062f\u064a':['\u0643\u064a\u0641 \u062a\u0628\u0646\u064a \u0642\u062f\u0631\u0629 \u0628\u064a\u0627\u0646\u0627\u062a \u0645\u0624\u0633\u0633\u064a\u0629 \u0645\u0646 \u0627\u0644\u0635\u0641\u0631: \u0627\u0644\u0641\u0631\u064a\u0642 \u0648\u0627\u0644\u0623\u062f\u0648\u0627\u062a \u0648\u0627\u0644\u062b\u0642\u0627\u0641\u0629\u061f','\u0635\u0641 \u0645\u0648\u0642\u0641\u064b\u0627 \u062f\u0627\u0641\u0639\u062a \u0641\u064a\u0647 \u0639\u0646 \u0627\u0633\u062a\u0646\u062a\u0627\u062c \u062a\u062d\u0644\u064a\u0644\u064a \u0623\u0645\u0627\u0645 \u0642\u064a\u0627\u062f\u0629 \u0644\u0645 \u064a\u0639\u062c\u0628\u0647\u0627 \u2014 \u0645\u0627\u0630\u0627 \u0641\u0639\u0644\u062a\u061f','\u0643\u064a\u0641 \u062a\u0642\u064a\u0633 \u0627\u0644\u0639\u0627\u0626\u062f \u0627\u0644\u0641\u0639\u0644\u064a \u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u0646\u0634\u0623\u0629 \u0641\u064a \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a\u061f']},
'\u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629': {
 '\u0645\u0628\u062a\u062f\u0626':['\u0644\u0645\u0627\u0630\u0627 \u0627\u062e\u062a\u0631\u062a \u0645\u062c\u0627\u0644 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629\u061f \u0648\u0645\u0627 \u0627\u0644\u0630\u064a \u062a\u0639\u0631\u0641\u0647 \u0639\u0646 \u062f\u0648\u0631\u0629 \u062d\u064a\u0627\u0629 \u0627\u0644\u0645\u0648\u0638\u0641\u061f','\u0643\u064a\u0641 \u062a\u062a\u0639\u0627\u0645\u0644 \u0645\u0639 \u0645\u0648\u0638\u0641 \u062c\u0627\u0621\u0643 \u0628\u0634\u0643\u0648\u0649 \u0648\u0623\u0646\u062a \u0644\u0627 \u062a\u0645\u0644\u0643 \u0635\u0644\u0627\u062d\u064a\u0629 \u062d\u0644\u0647\u0627\u061f','\u0645\u0627 \u0627\u0644\u0641\u0631\u0642 \u0628\u064a\u0646 \u0627\u0644\u0627\u0633\u062a\u0642\u0637\u0627\u0628 \u0648\u0627\u0644\u062a\u0648\u0638\u064a\u0641\u061f'],
 '\u0645\u062a\u0648\u0633\u0637':['\u0635\u0641 \u0634\u0627\u063a\u0631\u064b\u0627 \u0635\u0639\u0628\u064b\u0627 \u0623\u063a\u0644\u0642\u062a\u0647 \u2014 \u0645\u0627 \u0627\u0644\u0642\u0646\u0648\u0627\u062a \u0627\u0644\u062a\u064a \u062c\u0631\u0628\u062a\u0647\u0627 \u0648\u0645\u0627 \u0627\u0644\u0630\u064a \u0646\u062c\u062d\u061f','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u062d\u0627\u0644\u0629 \u0645\u0648\u0638\u0641 \u0645\u062a\u0639\u062b\u0631 \u0627\u0644\u0623\u062f\u0627\u0621 \u0634\u0627\u0631\u0643\u062a \u0641\u064a \u0645\u0639\u0627\u0644\u062c\u062a\u0647\u0627 \u2014 \u0645\u0627 \u062e\u0637\u062a\u0643\u061f','\u0643\u064a\u0641 \u062a\u0648\u0627\u0632\u0646 \u0628\u064a\u0646 \u0645\u0635\u0644\u062d\u0629 \u0627\u0644\u0645\u0648\u0638\u0641 \u0648\u0645\u0635\u0644\u062d\u0629 \u0627\u0644\u0645\u0646\u0634\u0623\u0629 \u0641\u064a \u0646\u0632\u0627\u0639 \u0628\u064a\u0646\u0647\u0645\u0627\u061f'],
 '\u0643\u0628\u064a\u0631':['\u0635\u0641 \u0645\u0628\u0627\u062f\u0631\u0629 \u0645\u0648\u0627\u0631\u062f \u0628\u0634\u0631\u064a\u0629 \u0635\u0645\u0645\u062a\u0647\u0627 \u0648\u0642\u0627\u062f\u062a\u0647\u0627 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u2014 \u0643\u064a\u0641 \u0642\u0633\u062a \u0623\u062b\u0631\u0647\u0627\u061f','\u0643\u064a\u0641 \u062a\u0628\u0646\u064a \u062e\u0637\u0629 \u062a\u0639\u0627\u0642\u0628 \u0648\u0638\u064a\u0641\u064a \u0644\u0644\u0623\u062f\u0648\u0627\u0631 \u0627\u0644\u062d\u0631\u062c\u0629\u061f','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0642\u0631\u0627\u0631 \u0625\u0646\u0647\u0627\u0621 \u062e\u062f\u0645\u0629 \u0635\u0639\u0628 \u0634\u0627\u0631\u0643\u062a \u0641\u064a\u0647 \u2014 \u0643\u064a\u0641 \u0636\u0645\u0646\u062a \u0627\u0644\u0639\u062f\u0627\u0644\u0629 \u0648\u0627\u0644\u0646\u0638\u0627\u0645\u064a\u0629\u061f'],
 '\u0642\u064a\u0627\u062f\u064a':['\u0643\u064a\u0641 \u062a\u0631\u0628\u0637 \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 \u0631\u0623\u0633 \u0627\u0644\u0645\u0627\u0644 \u0627\u0644\u0628\u0634\u0631\u064a \u0628\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 \u0627\u0644\u0645\u0646\u0634\u0623\u0629\u061f','\u0635\u0641 \u062a\u062d\u0648\u0644\u064b\u0627 \u062b\u0642\u0627\u0641\u064a\u064b\u0627 \u0642\u062f\u062a\u0647 \u0641\u064a \u0645\u0646\u0634\u0623\u0629 \u2014 \u0645\u0627 \u0645\u0642\u0627\u0648\u0645\u062a\u0647 \u0648\u0643\u064a\u0641 \u062a\u062c\u0627\u0648\u0632\u062a\u0647\u0627\u061f','\u0643\u064a\u0641 \u062a\u0648\u0627\u0632\u0646 \u0628\u064a\u0646 \u0636\u063a\u0637 \u0627\u0644\u062a\u0648\u0637\u064a\u0646 \u0648\u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0643\u0641\u0627\u0621\u0629 \u0627\u0644\u0646\u0627\u062f\u0631\u0629\u061f']},
'\u0627\u0644\u0645\u0627\u0644\u064a\u0629 \u0648\u0627\u0644\u0645\u062d\u0627\u0633\u0628\u0629': {
 '\u0645\u0628\u062a\u062f\u0626':['\u0627\u0634\u0631\u062d \u0627\u0644\u0641\u0631\u0642 \u0628\u064a\u0646 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062f\u062e\u0644 \u0648\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0627\u0644\u064a \u0648\u0627\u0644\u062a\u062f\u0641\u0642\u0627\u062a \u0627\u0644\u0646\u0642\u062f\u064a\u0629.','\u0645\u0627 \u0627\u0644\u0642\u064a\u062f \u0627\u0644\u0645\u062d\u0627\u0633\u0628\u064a \u0644\u0634\u0631\u0627\u0621 \u0623\u0635\u0644 \u0628\u0627\u0644\u0623\u062c\u0644\u061f','\u0643\u064a\u0641 \u062a\u062a\u0623\u0643\u062f \u0645\u0646 \u062f\u0642\u0629 \u0639\u0645\u0644\u0643 \u0639\u0646\u062f \u0625\u062f\u062e\u0627\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0645\u0627\u0644\u064a\u0629 \u0643\u062b\u064a\u0631\u0629\u061f'],
 '\u0645\u062a\u0648\u0633\u0637':['\u0635\u0641 \u0625\u0642\u0641\u0627\u0644\u064b\u0627 \u0634\u0647\u0631\u064a\u064b\u0627 \u0623\u0648 \u0633\u0646\u0648\u064a\u064b\u0627 \u062a\u0648\u0644\u064a\u062a\u0647 \u2014 \u0645\u0627 \u0623\u0635\u0639\u0628 \u0628\u0646\u0648\u062f\u0647 \u0648\u0643\u064a\u0641 \u0639\u0627\u0644\u062c\u062a\u0647\u061f','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0641\u0631\u0642 \u063a\u064a\u0631 \u0645\u0628\u0631\u0631 \u0627\u0643\u062a\u0634\u0641\u062a\u0647 \u0641\u064a \u0627\u0644\u062a\u0633\u0648\u064a\u0627\u062a \u2014 \u0643\u064a\u0641 \u062a\u062a\u0628\u0639\u062a\u0647\u061f','\u0643\u064a\u0641 \u062a\u0639\u062f \u0645\u0648\u0627\u0632\u0646\u0629 \u062a\u0642\u062f\u064a\u0631\u064a\u0629 \u0644\u0625\u062f\u0627\u0631\u0629 \u0644\u0627 \u062a\u0645\u0644\u0643 \u0628\u064a\u0627\u0646\u0627\u062a \u062a\u0627\u0631\u064a\u062e\u064a\u0629 \u0643\u0627\u0641\u064a\u0629\u061f'],
 '\u0643\u0628\u064a\u0631':['\u0635\u0641 \u0645\u0644\u0627\u062d\u0638\u0629 \u062a\u062f\u0642\u064a\u0642 \u062c\u0648\u0647\u0631\u064a\u0629 \u0623\u064f\u063a\u0644\u0642\u062a \u062a\u062d\u062a \u0625\u0634\u0631\u0627\u0641\u0643 \u2014 \u0645\u0627 \u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u062c\u0630\u0631\u064a\u0629\u061f','\u0643\u064a\u0641 \u062a\u0642\u064a\u0645 \u0627\u0644\u062c\u062f\u0648\u0649 \u0627\u0644\u0645\u0627\u0644\u064a\u0629 \u0644\u0645\u0634\u0631\u0648\u0639 \u0627\u0633\u062a\u062b\u0645\u0627\u0631\u064a\u061f \u0627\u0630\u0643\u0631 \u0627\u0644\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u062a\u064a \u062a\u0639\u062a\u0645\u062f\u0647\u0627.','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0645\u0648\u0642\u0641 \u0627\u0643\u062a\u0634\u0641\u062a \u0641\u064a\u0647 \u0645\u0645\u0627\u0631\u0633\u0629 \u0645\u0627\u0644\u064a\u0629 \u063a\u064a\u0631 \u0633\u0644\u064a\u0645\u0629 \u2014 \u0645\u0627\u0630\u0627 \u0641\u0639\u0644\u062a\u061f'],
 '\u0642\u064a\u0627\u062f\u064a':['\u0643\u064a\u0641 \u062a\u0628\u0646\u064a \u062e\u0637\u0629 \u0645\u0627\u0644\u064a\u0629 \u062e\u0645\u0633\u064a\u0629 \u0644\u0645\u0646\u0634\u0623\u0629 \u0641\u064a \u0628\u064a\u0626\u0629 \u0625\u064a\u0631\u0627\u062f\u0627\u062a \u0645\u062a\u0642\u0644\u0628\u0629\u061f','\u0635\u0641 \u0642\u0631\u0627\u0631\u064b\u0627 \u0645\u0627\u0644\u064a\u064b\u0627 \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u064b\u0627 (\u062a\u0645\u0648\u064a\u0644/\u0627\u0633\u062a\u062d\u0648\u0627\u0630/\u062e\u0641\u0636 \u062a\u0643\u0627\u0644\u064a\u0641) \u0634\u0627\u0631\u0643\u062a \u0641\u064a \u0635\u0646\u0639\u0647.','\u0643\u064a\u0641 \u062a\u0648\u0627\u0632\u0646 \u0628\u064a\u0646 \u0627\u0644\u0631\u0642\u0627\u0628\u0629 \u0627\u0644\u0645\u0627\u0644\u064a\u0629 \u0627\u0644\u0635\u0627\u0631\u0645\u0629 \u0648\u062a\u0645\u0643\u064a\u0646 \u0627\u0644\u0625\u062f\u0627\u0631\u0627\u062a \u0645\u0646 \u0627\u0644\u062a\u062d\u0631\u0643\u061f']},
'\u0627\u0644\u0647\u0646\u062f\u0633\u0629': {
 '\u0645\u0628\u062a\u062f\u0626':['\u0627\u0634\u0631\u062d \u0645\u0634\u0631\u0648\u0639 \u062a\u062e\u0631\u062c\u0643 \u0627\u0644\u0647\u0646\u062f\u0633\u064a \u2014 \u0645\u0627 \u0627\u0644\u0645\u0634\u0643\u0644\u0629 \u0648\u0645\u0627 \u062d\u0644\u0651\u0643\u061f','\u0645\u0627 \u0627\u0644\u0627\u0639\u062a\u0628\u0627\u0631\u0627\u062a \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629 \u0639\u0646\u062f \u0642\u0631\u0627\u0621\u0629 \u0645\u062e\u0637\u0637 \u062a\u0646\u0641\u064a\u0630\u064a \u0642\u0628\u0644 \u0628\u062f\u0621 \u0627\u0644\u0639\u0645\u0644\u061f','\u0643\u064a\u0641 \u062a\u062a\u0635\u0631\u0641 \u0644\u0648 \u0644\u0627\u062d\u0638\u062a \u0641\u064a \u0627\u0644\u0645\u0648\u0642\u0639 \u062a\u0646\u0641\u064a\u0630\u064b\u0627 \u0645\u062e\u0627\u0644\u0641\u064b\u0627 \u0644\u0644\u0645\u062e\u0637\u0637\u061f'],
 '\u0645\u062a\u0648\u0633\u0637':['\u0635\u0641 \u0645\u0634\u0643\u0644\u0629 \u062a\u0646\u0641\u064a\u0630\u064a\u0629 \u0648\u0627\u062c\u0647\u062a\u0647\u0627 \u0641\u064a \u0645\u0634\u0631\u0648\u0639 \u2014 \u0643\u064a\u0641 \u0634\u062e\u0635\u062a\u0647\u0627 \u0648\u0645\u0627 \u0627\u0644\u0628\u062f\u0627\u0626\u0644 \u0627\u0644\u062a\u064a \u0637\u0631\u062d\u062a\u0647\u0627\u061f','\u0643\u064a\u0641 \u062a\u062f\u064a\u0631 \u0627\u0644\u062a\u0639\u0627\u0631\u0636 \u0628\u064a\u0646 \u0627\u0644\u062c\u0648\u062f\u0629 \u0648\u0627\u0644\u062a\u0643\u0644\u0641\u0629 \u0648\u0627\u0644\u062c\u062f\u0648\u0644 \u0641\u064a \u0645\u0634\u0631\u0648\u0639 \u0647\u0646\u062f\u0633\u064a\u061f','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u062a\u0646\u0633\u064a\u0642\u0643 \u0645\u0639 \u062a\u062e\u0635\u0635\u0627\u062a \u0647\u0646\u062f\u0633\u064a\u0629 \u0623\u062e\u0631\u0649 \u2014 \u0623\u064a\u0646 \u062a\u062d\u062f\u062b \u0627\u0644\u0641\u062c\u0648\u0627\u062a \u0639\u0627\u062f\u0629\u061f'],
 '\u0643\u0628\u064a\u0631':['\u0635\u0641 \u0645\u0634\u0631\u0648\u0639\u064b\u0627 \u0623\u062f\u0631\u062a \u062c\u0648\u0627\u0646\u0628\u0647 \u0627\u0644\u0641\u0646\u064a\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u2014 \u0643\u064a\u0641 \u0636\u0628\u0637\u062a \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a \u0648\u0623\u0648\u0627\u0645\u0631 \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u061f','\u0643\u064a\u0641 \u062a\u0631\u0627\u062c\u0639 \u062a\u0635\u0627\u0645\u064a\u0645 \u0645\u0647\u0646\u062f\u0633\u064a\u0646 \u0623\u0642\u0644 \u062e\u0628\u0631\u0629 \u0648\u062a\u0631\u0641\u0639 \u0645\u0633\u062a\u0648\u0627\u0647\u0645\u061f','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u062d\u0627\u062f\u062b \u0633\u0644\u0627\u0645\u0629 \u0623\u0648 \u0643\u0627\u062f \u064a\u0642\u0639 \u2014 \u0645\u0627 \u0627\u0644\u0630\u064a \u063a\u064a\u0631\u062a\u0647 \u0628\u0639\u062f\u0647 \u062c\u0630\u0631\u064a\u064b\u0627\u061f'],
 '\u0642\u064a\u0627\u062f\u064a':['\u0643\u064a\u0641 \u062a\u0628\u0646\u064a \u0645\u0646\u0638\u0648\u0645\u0629 \u0625\u062f\u0627\u0631\u0629 \u0645\u0634\u0627\u0631\u064a\u0639 \u0647\u0646\u062f\u0633\u064a\u0629 \u0644\u0645\u062d\u0641\u0638\u0629 \u0645\u0634\u0627\u0631\u064a\u0639 \u0645\u062a\u0648\u0627\u0632\u064a\u0629\u061f','\u0635\u0641 \u0642\u0631\u0627\u0631\u064b\u0627 \u0647\u0646\u062f\u0633\u064a\u064b\u0627 \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u064b\u0627 \u062a\u062d\u0645\u0644\u062a \u0645\u0633\u0624\u0648\u0644\u064a\u062a\u0647 \u0623\u0645\u0627\u0645 \u0627\u0644\u062c\u0647\u0627\u062a \u0627\u0644\u0639\u0644\u064a\u0627.','\u0643\u064a\u0641 \u062a\u0648\u0627\u0632\u0646 \u0628\u064a\u0646 \u062a\u0648\u0637\u064a\u0646 \u0633\u0644\u0627\u0633\u0644 \u0627\u0644\u0625\u0645\u062f\u0627\u062f \u0627\u0644\u0647\u0646\u062f\u0633\u064a\u0629 \u0648\u0636\u0645\u0627\u0646 \u0627\u0644\u062c\u0648\u062f\u0629 \u0627\u0644\u0639\u0627\u0644\u0645\u064a\u0629\u061f']},
'\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639': {
 '\u0645\u0628\u062a\u062f\u0626':['\u0645\u0627 \u0645\u0631\u0627\u062d\u0644 \u062f\u0648\u0631\u0629 \u062d\u064a\u0627\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639\u061f \u0648\u0645\u0627 \u062f\u0648\u0631 \u0645\u062f\u064a\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0641\u064a \u0643\u0644 \u0645\u0631\u062d\u0644\u0629\u061f','\u0643\u064a\u0641 \u062a\u062a\u0627\u0628\u0639 \u0645\u0647\u0627\u0645\u0643 \u062d\u064a\u0646 \u062a\u0639\u0645\u0644 \u0639\u0644\u0649 \u0623\u0643\u062b\u0631 \u0645\u0646 \u0645\u0647\u0645\u0629 \u0628\u0645\u0648\u0627\u0639\u064a\u062f \u0645\u062a\u0642\u0627\u0631\u0628\u0629\u061f','\u0645\u0627 \u0627\u0644\u0641\u0631\u0642 \u0628\u064a\u0646 \u0627\u0644\u0646\u0637\u0627\u0642 \u0648\u0627\u0644\u062c\u062f\u0648\u0644 \u0648\u0627\u0644\u0645\u064a\u0632\u0627\u0646\u064a\u0629\u061f \u0648\u0645\u0627\u0630\u0627 \u064a\u062d\u062f\u062b \u062d\u064a\u0646 \u064a\u062a\u063a\u064a\u0631 \u0623\u062d\u062f\u0647\u0627\u061f'],
 '\u0645\u062a\u0648\u0633\u0637':['\u0635\u0641 \u0645\u0634\u0631\u0648\u0639\u064b\u0627 \u0623\u062f\u0631\u062a\u0647 \u0645\u0646 \u0627\u0644\u0628\u062f\u0627\u064a\u0629 \u0644\u0644\u0625\u063a\u0644\u0627\u0642 \u2014 \u0645\u0627 \u0623\u0643\u0628\u0631 \u0627\u0646\u062d\u0631\u0627\u0641 \u062d\u062f\u062b \u0648\u0643\u064a\u0641 \u0639\u0627\u0644\u062c\u062a\u0647\u061f','\u0643\u064a\u0641 \u062a\u062f\u064a\u0631 \u0635\u0627\u062d\u0628 \u0645\u0635\u0644\u062d\u0629 \u0645\u0639\u0637\u0650\u0651\u0644\u064b\u0627 \u0644\u0627 \u064a\u062d\u0636\u0631 \u0648\u0644\u0627 \u064a\u0639\u062a\u0645\u062f\u061f','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u062e\u0637\u0631 \u062a\u0648\u0642\u0639\u062a\u0647 \u0645\u0628\u0643\u0631\u064b\u0627 \u0648\u062e\u0637\u0629 \u0627\u0633\u062a\u062c\u0627\u0628\u062a\u0643 \u0644\u0647.'],
 '\u0643\u0628\u064a\u0631':['\u0635\u0641 \u0645\u0634\u0631\u0648\u0639\u064b\u0627 \u0645\u062a\u0639\u062b\u0631\u064b\u0627 \u0627\u0633\u062a\u064f\u062f\u0639\u064a\u062a \u0644\u0625\u0646\u0642\u0627\u0630\u0647 \u2014 \u0645\u0627 \u0623\u0648\u0644 \u062b\u0644\u0627\u062b\u0629 \u0623\u0634\u064a\u0627\u0621 \u0641\u0639\u0644\u062a\u0647\u0627\u061f','\u0643\u064a\u0641 \u062a\u0648\u0627\u0632\u0646 \u0645\u062d\u0641\u0638\u0629 \u0645\u0634\u0627\u0631\u064a\u0639 \u062a\u062a\u0646\u0627\u0641\u0633 \u0639\u0644\u0649 \u0646\u0641\u0633 \u0627\u0644\u0645\u0648\u0627\u0631\u062f\u061f','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0642\u0631\u0627\u0631 \u0625\u064a\u0642\u0627\u0641 \u0645\u0634\u0631\u0648\u0639 \u2014 \u0643\u064a\u0641 \u0628\u0646\u064a\u062a \u0627\u0644\u062a\u0648\u0635\u064a\u0629 \u0648\u0623\u0642\u0646\u0639\u062a \u0628\u0647\u0627\u061f'],
 '\u0642\u064a\u0627\u062f\u064a':['\u0643\u064a\u0641 \u062a\u0628\u0646\u064a \u0645\u0643\u062a\u0628 \u0625\u062f\u0627\u0631\u0629 \u0645\u0634\u0627\u0631\u064a\u0639 (PMO) \u064a\u0636\u064a\u0641 \u0642\u064a\u0645\u0629 \u0648\u0644\u0627 \u064a\u062a\u062d\u0648\u0644 \u0644\u0628\u064a\u0631\u0648\u0642\u0631\u0627\u0637\u064a\u0629\u061f','\u0635\u0641 \u062a\u062d\u0648\u0644\u064b\u0627 \u0645\u0646\u0647\u062c\u064a\u064b\u0627 \u0642\u062f\u062a\u0647 (Agile/\u062a\u0642\u0644\u064a\u062f\u064a) \u2014 \u0645\u0627 \u0627\u0644\u0645\u0642\u0627\u0648\u0645\u0629 \u0648\u0643\u064a\u0641 \u0623\u062f\u0631\u062a\u0647\u0627\u061f','\u0643\u064a\u0641 \u062a\u0631\u0628\u0637 \u0645\u062d\u0641\u0638\u0629 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0628\u0627\u0644\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 \u0648\u062a\u0642\u064a\u0633 \u0642\u064a\u0645\u062a\u0647\u0627 \u0627\u0644\u0641\u0639\u0644\u064a\u0629\u061f']},
'\u0627\u0644\u062a\u0633\u0648\u064a\u0642 \u0648\u0627\u0644\u0627\u062a\u0635\u0627\u0644': {
 '\u0645\u0628\u062a\u062f\u0626':['\u0635\u0641 \u0645\u062d\u062a\u0648\u0649 \u0623\u0646\u0634\u0623\u062a\u0647 (\u0645\u0646\u0634\u0648\u0631/\u062a\u0635\u0645\u064a\u0645/\u0641\u064a\u062f\u064a\u0648) \u2014 \u0645\u0627 \u0647\u062f\u0641\u0647 \u0648\u0643\u064a\u0641 \u0642\u0633\u062a \u062a\u0641\u0627\u0639\u0644\u0647\u061f','\u0645\u0627 \u0627\u0644\u0641\u0631\u0642 \u0628\u064a\u0646 \u0627\u0644\u062a\u0633\u0648\u064a\u0642 \u0648\u0627\u0644\u0639\u0644\u0627\u0642\u0627\u062a \u0627\u0644\u0639\u0627\u0645\u0629\u061f','\u0623\u064a \u0645\u0646\u0635\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u062a\u0646\u0627\u0633\u0628 \u062c\u0647\u0629 \u062d\u0643\u0648\u0645\u064a\u0629 \u0639\u0644\u0645\u064a\u0629 \u0648\u0644\u0645\u0627\u0630\u0627\u061f'],
 '\u0645\u062a\u0648\u0633\u0637':['\u0635\u0641 \u062d\u0645\u0644\u0629 \u062e\u0637\u0637\u062a\u0647\u0627 \u0648\u0646\u0641\u0630\u062a\u0647\u0627 \u2014 \u0645\u0627 \u0645\u0624\u0634\u0631\u0627\u062a\u0647\u0627 \u0648\u0645\u0627 \u0627\u0644\u0630\u064a \u0643\u0646\u062a \u0633\u062a\u063a\u064a\u0631\u0647\u061f','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0623\u0632\u0645\u0629 \u0625\u0639\u0644\u0627\u0645\u064a\u0629 \u0623\u0648 \u062a\u0639\u0644\u064a\u0642 \u0633\u0644\u0628\u064a \u0648\u0627\u0633\u0639 \u062a\u0639\u0627\u0645\u0644\u062a \u0645\u0639\u0647.','\u0643\u064a\u0641 \u062a\u0648\u0627\u0626\u0645 \u0628\u064a\u0646 \u0647\u0648\u064a\u0629 \u0627\u0644\u062c\u0647\u0629 \u0627\u0644\u0631\u0633\u0645\u064a\u0629 \u0648\u062c\u0627\u0630\u0628\u064a\u0629 \u0627\u0644\u0645\u062d\u062a\u0648\u0649\u061f'],
 '\u0643\u0628\u064a\u0631':['\u0635\u0641 \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 \u0627\u062a\u0635\u0627\u0644 \u0633\u0646\u0648\u064a\u0629 \u0628\u0646\u064a\u062a\u0647\u0627 \u2014 \u0643\u064a\u0641 \u0631\u0628\u0637\u062a\u0647\u0627 \u0628\u0623\u0647\u062f\u0627\u0641 \u0627\u0644\u062c\u0647\u0629\u061f','\u0643\u064a\u0641 \u062a\u062f\u064a\u0631 \u0648\u0643\u0627\u0644\u0627\u062a \u062e\u0627\u0631\u062c\u064a\u0629 \u0648\u062a\u0636\u0645\u0646 \u062c\u0648\u062f\u0629 \u0645\u062e\u0631\u062c\u0627\u062a\u0647\u0627\u061f','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0631\u0633\u0627\u0644\u0629 \u0645\u0624\u0633\u0633\u064a\u0629 \u062d\u0633\u0627\u0633\u0629 \u0635\u063a\u062a\u0647\u0627 \u2014 \u0645\u0627 \u0627\u0644\u0627\u0639\u062a\u0628\u0627\u0631\u0627\u062a \u0627\u0644\u062a\u064a \u0648\u0627\u0632\u0646\u062a \u0628\u064a\u0646\u0647\u0627\u061f'],
 '\u0642\u064a\u0627\u062f\u064a':['\u0643\u064a\u0641 \u062a\u0628\u0646\u064a \u0633\u0645\u0639\u0629 \u0645\u0624\u0633\u0633\u064a\u0629 \u0648\u0637\u0646\u064a\u0629 \u0648\u062f\u0648\u0644\u064a\u0629 \u0644\u062c\u0647\u0629 \u0639\u0644\u0645\u064a\u0629\u061f','\u0635\u0641 \u0645\u0648\u0642\u0641\u064b\u0627 \u0646\u0635\u062d\u062a \u0641\u064a\u0647 \u0627\u0644\u0642\u064a\u0627\u062f\u0629 \u0627\u0644\u0639\u0644\u064a\u0627 \u0628\u0639\u0643\u0633 \u0645\u0627 \u062a\u0631\u064a\u062f \u0625\u0639\u0644\u0627\u0645\u064a\u064b\u0627 \u2014 \u0645\u0627\u0630\u0627 \u062d\u062f\u062b\u061f','\u0643\u064a\u0641 \u062a\u0642\u064a\u0633 \u0623\u062b\u0631 \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0627\u0644\u0645\u0624\u0633\u0633\u064a \u0628\u0645\u0627 \u064a\u062a\u062c\u0627\u0648\u0632 \u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u062a\u0641\u0627\u0639\u0644\u061f']},
'\u0627\u0644\u0625\u062f\u0627\u0631\u0629 \u0648\u0627\u0644\u0642\u064a\u0627\u062f\u0629': {
 '\u0645\u0628\u062a\u062f\u0626':['\u0635\u0641 \u0645\u0648\u0642\u0641\u064b\u0627 \u0642\u062f\u062a \u0641\u064a\u0647 \u0645\u062c\u0645\u0648\u0639\u0629 (\u062f\u0631\u0627\u0633\u0629/\u062a\u0637\u0648\u0639) \u2014 \u0645\u0627 \u0627\u0644\u0630\u064a \u062a\u0639\u0644\u0645\u062a\u0647 \u0639\u0646 \u0646\u0641\u0633\u0643\u061f','\u0643\u064a\u0641 \u062a\u0646\u0638\u0645 \u0623\u0648\u0644\u0648\u064a\u0627\u062a\u0643 \u062d\u064a\u0646 \u064a\u0637\u0644\u0628 \u0645\u0646\u0643 \u0631\u0626\u064a\u0633\u0627\u0646 \u0645\u0647\u0645\u062a\u064a\u0646 \u0645\u062a\u0639\u0627\u0631\u0636\u062a\u064a\u0646\u061f','\u0645\u0627 \u0627\u0644\u0630\u064a \u064a\u062c\u0639\u0644 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639 \u0646\u0627\u062c\u062d\u064b\u0627 \u0641\u064a \u0631\u0623\u064a\u0643\u061f'],
 '\u0645\u062a\u0648\u0633\u0637':['\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0645\u0628\u0627\u062f\u0631\u0629 \u0627\u0642\u062a\u0631\u062d\u062a\u0647\u0627 \u0648\u0646\u0641\u0630\u062a\u0647\u0627 \u062f\u0648\u0646 \u0623\u0646 \u064a\u064f\u0637\u0644\u0628 \u0645\u0646\u0643 \u2014 \u0645\u0627 \u0623\u062b\u0631\u0647\u0627\u061f','\u0635\u0641 \u0645\u0648\u0642\u0641\u064b\u0627 \u0623\u062b\u0651\u0631\u062a \u0641\u064a\u0647 \u0639\u0644\u0649 \u0642\u0631\u0627\u0631 \u0632\u0645\u064a\u0644 \u0623\u0648 \u0625\u062f\u0627\u0631\u0629 \u0623\u062e\u0631\u0649 \u062f\u0648\u0646 \u0633\u0644\u0637\u0629 \u0639\u0644\u064a\u0647\u0645.','\u0643\u064a\u0641 \u062a\u0639\u0627\u0645\u0644\u062a \u0645\u0639 \u0632\u0645\u064a\u0644 \u064a\u0639\u0631\u0642\u0644 \u0639\u0645\u0644 \u0627\u0644\u0641\u0631\u064a\u0642\u061f'],
 '\u0643\u0628\u064a\u0631':['\u0635\u0641 \u0641\u0631\u064a\u0642\u064b\u0627 \u0628\u0646\u064a\u062a\u0647 \u0623\u0648 \u0623\u0639\u062f\u062a \u0628\u0646\u0627\u0621\u0647 \u2014 \u0643\u064a\u0641 \u0627\u062e\u062a\u0631\u062a \u0627\u0644\u0623\u062f\u0648\u0627\u0631 \u0648\u0639\u0627\u0644\u062c\u062a \u0627\u0644\u0641\u062c\u0648\u0627\u062a\u061f','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0642\u0631\u0627\u0631 \u0635\u0639\u0628 \u0627\u062a\u062e\u0630\u062a\u0647 \u0628\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0646\u0627\u0642\u0635\u0629 \u2014 \u0643\u064a\u0641 \u0641\u0643\u0631\u062a\u061f','\u0643\u064a\u0641 \u062a\u0641\u0648\u0651\u0636 \u0639\u0645\u0644\u064b\u0627 \u062d\u0633\u0627\u0633\u064b\u0627 \u0648\u062a\u0636\u0645\u0646 \u062c\u0648\u062f\u062a\u0647 \u062f\u0648\u0646 \u0625\u062f\u0627\u0631\u0629 \u062a\u0641\u0635\u064a\u0644\u064a\u0629\u061f'],
 '\u0642\u064a\u0627\u062f\u064a':['\u0643\u064a\u0641 \u062a\u0642\u0648\u062f \u062a\u063a\u064a\u064a\u0631\u064b\u0627 \u0645\u0624\u0633\u0633\u064a\u064b\u0627 \u064a\u0642\u0627\u0648\u0645\u0647 \u0627\u0644\u0645\u062a\u0623\u062b\u0631\u0648\u0646 \u0628\u0647\u061f','\u0635\u0641 \u0642\u0631\u0627\u0631\u064b\u0627 \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u064b\u0627 \u0641\u0634\u0644 \u2014 \u0643\u064a\u0641 \u062a\u062d\u0645\u0644\u062a \u0645\u0633\u0624\u0648\u0644\u064a\u062a\u0647 \u0648\u0645\u0627\u0630\u0627 \u062a\u063a\u064a\u0631 \u0628\u0639\u062f\u0647\u061f','\u0643\u064a\u0641 \u062a\u0648\u0627\u0632\u0646 \u0628\u064a\u0646 \u0627\u0644\u0646\u062a\u0627\u0626\u062c \u0642\u0635\u064a\u0631\u0629 \u0627\u0644\u0645\u062f\u0649 \u0648\u0628\u0646\u0627\u0621 \u0627\u0644\u0642\u062f\u0631\u0627\u062a \u0637\u0648\u064a\u0644 \u0627\u0644\u0645\u062f\u0649\u061f']},
'\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u0643\u062a\u0628\u064a\u0629': {
 '\u0645\u0628\u062a\u062f\u0626':['\u0645\u0627 \u0645\u0633\u062a\u0648\u0649 \u0625\u062a\u0642\u0627\u0646\u0643 \u0644\u0628\u0631\u0627\u0645\u062c \u0623\u0648\u0641\u064a\u0633\u061f \u0627\u0630\u0643\u0631 \u0623\u0639\u0642\u062f \u0634\u064a\u0621 \u0623\u0646\u062c\u0632\u062a\u0647 \u0628\u0647\u0627.','\u0643\u064a\u0641 \u062a\u0646\u0638\u0645 \u0645\u0644\u0641\u0627\u062a \u0648\u0645\u0631\u0627\u0633\u0644\u0627\u062a \u0625\u062f\u0627\u0631\u0629 \u0643\u0627\u0645\u0644\u0629 \u0628\u062d\u064a\u062b \u064a\u062c\u062f\u0647\u0627 \u0623\u064a \u0634\u062e\u0635\u061f','\u0635\u0641 \u064a\u0648\u0645\u0643 \u062d\u064a\u0646 \u062a\u062a\u0632\u0627\u062d\u0645 \u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u0635\u063a\u064a\u0631\u0629 \u2014 \u0643\u064a\u0641 \u062a\u0631\u062a\u0628\u0647\u0627\u061f'],
 '\u0645\u062a\u0648\u0633\u0637':['\u0635\u0641 \u062a\u062d\u0633\u064a\u0646\u064b\u0627 \u0623\u062f\u062e\u0644\u062a\u0647 \u0639\u0644\u0649 \u0625\u062c\u0631\u0627\u0621 \u0625\u062f\u0627\u0631\u064a \u0648\u0641\u0651\u0631 \u0648\u0642\u062a\u064b\u0627 \u0641\u0639\u0644\u064a\u064b\u0627.','\u0643\u064a\u0641 \u062a\u062f\u064a\u0631 \u062c\u062f\u0648\u0644 \u0645\u062f\u064a\u0631 \u0645\u0634\u063a\u0648\u0644 \u0648\u062a\u062d\u0645\u064a \u0648\u0642\u062a\u0647 \u0645\u0646 \u0627\u0644\u062a\u0636\u0627\u0631\u0628\u061f','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0645\u062d\u0636\u0631 \u0627\u062c\u062a\u0645\u0627\u0639 \u062d\u0633\u0627\u0633 \u0623\u0639\u062f\u062f\u062a\u0647 \u2014 \u0645\u0627 \u0627\u0644\u0630\u064a \u062a\u062d\u0631\u0635 \u0639\u0644\u064a\u0647\u061f'],
 '\u0643\u0628\u064a\u0631':['\u0643\u064a\u0641 \u062a\u0628\u0646\u064a \u0645\u0646\u0638\u0648\u0645\u0629 \u0623\u0631\u0634\u0641\u0629 \u0648\u0645\u062a\u0627\u0628\u0639\u0629 \u0645\u0639\u0627\u0645\u0644\u0627\u062a \u0644\u0625\u062f\u0627\u0631\u0629 \u0643\u0627\u0645\u0644\u0629\u061f','\u0635\u0641 \u0645\u0648\u0642\u0641\u064b\u0627 \u0623\u062f\u0631\u062a \u0641\u064a\u0647 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0633\u0631\u064a\u0629 \u2014 \u0645\u0627 \u0636\u0648\u0627\u0628\u0637\u0643\u061f','\u0643\u064a\u0641 \u062a\u062f\u0631\u0628 \u0645\u0648\u0638\u0641\u064a \u062f\u0639\u0645 \u0625\u062f\u0627\u0631\u064a \u062c\u062f\u062f \u0648\u062a\u0631\u0641\u0639 \u062c\u0627\u0647\u0632\u064a\u062a\u0647\u0645 \u0628\u0633\u0631\u0639\u0629\u061f'],
 '\u0642\u064a\u0627\u062f\u064a':['\u0643\u064a\u0641 \u062a\u0639\u064a\u062f \u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0625\u062f\u0627\u0631\u064a\u0629 \u0627\u0644\u0645\u0633\u0627\u0646\u062f\u0629 \u0644\u062a\u0642\u0627\u0633 \u0628\u0645\u0624\u0634\u0631\u0627\u062a \u062e\u062f\u0645\u0629\u061f','\u0635\u0641 \u062a\u062d\u0648\u0644\u064b\u0627 \u0631\u0642\u0645\u064a\u064b\u0627 \u0625\u062f\u0627\u0631\u064a\u064b\u0627 (\u062a\u0639\u0627\u0645\u0644\u0627\u062a \u0628\u0644\u0627 \u0648\u0631\u0642) \u0634\u0627\u0631\u0643\u062a \u0641\u064a \u0642\u064a\u0627\u062f\u062a\u0647.','\u0643\u064a\u0641 \u062a\u0648\u0627\u0632\u0646 \u0628\u064a\u0646 \u0627\u0644\u0636\u0628\u0637 \u0627\u0644\u0625\u062c\u0631\u0627\u0626\u064a \u0648\u0633\u0631\u0639\u0629 \u0625\u0646\u062c\u0627\u0632 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062a\u061f']},
'\u0627\u0644\u0644\u063a\u0627\u062a': {
 '\u0645\u0628\u062a\u062f\u0626':['\u062a\u0631\u062c\u0645 \u0644\u064a \u0634\u0641\u0647\u064a\u064b\u0627 \u0647\u0630\u0647 \u0627\u0644\u062c\u0645\u0644\u0629 \u0648\u0633\u0623\u0642\u064a\u0651\u0645 \u062f\u0642\u062a\u0643 \u0648\u0633\u0644\u0627\u0633\u062a\u0643.','\u0645\u0627 \u0627\u0644\u0641\u0631\u0642 \u0628\u064a\u0646 \u0627\u0644\u062a\u0631\u062c\u0645\u0629 \u0627\u0644\u062d\u0631\u0641\u064a\u0629 \u0648\u062a\u0631\u062c\u0645\u0629 \u0627\u0644\u0645\u0639\u0646\u0649\u061f \u0648\u0645\u062a\u0649 \u062a\u0635\u062d \u0643\u0644 \u0645\u0646\u0647\u0645\u0627\u061f','\u0643\u064a\u0641 \u062a\u062a\u062d\u0642\u0642 \u0645\u0646 \u0645\u0635\u0637\u0644\u062d \u062a\u0642\u0646\u064a \u0644\u0627 \u062a\u0639\u0631\u0641 \u0645\u0642\u0627\u0628\u0644\u0647\u061f'],
 '\u0645\u062a\u0648\u0633\u0637':['\u0635\u0641 \u0646\u0635\u064b\u0627 \u0635\u0639\u0628\u064b\u0627 \u062a\u0631\u062c\u0645\u062a\u0647 \u0623\u0648 \u062f\u0642\u0642\u062a\u0647 \u2014 \u0645\u0627 \u0623\u0635\u0639\u0628 \u0645\u0627 \u0641\u064a\u0647\u061f','\u0643\u064a\u0641 \u062a\u062d\u0627\u0641\u0638 \u0639\u0644\u0649 \u0627\u062a\u0633\u0627\u0642 \u0627\u0644\u0645\u0635\u0637\u0644\u062d\u0627\u062a \u0641\u064a \u0645\u0633\u062a\u0646\u062f\u0627\u062a \u062c\u0647\u0629 \u0643\u0627\u0645\u0644\u0629\u061f','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u062e\u0637\u0623 \u0644\u063a\u0648\u064a \u062c\u0648\u0647\u0631\u064a \u0627\u0643\u062a\u0634\u0641\u062a\u0647 \u0642\u0628\u0644 \u0627\u0644\u0646\u0634\u0631 \u2014 \u0643\u064a\u0641 \u0623\u0645\u0633\u0643\u062a\u0647\u061f'],
 '\u0643\u0628\u064a\u0631':['\u0643\u064a\u0641 \u062a\u0628\u0646\u064a \u062f\u0644\u064a\u0644 \u0623\u0633\u0644\u0648\u0628 \u0644\u063a\u0648\u064a (Style Guide) \u0644\u062c\u0647\u0629 \u0631\u0633\u0645\u064a\u0629\u061f','\u0635\u0641 \u062a\u0631\u062c\u0645\u0629 \u0641\u0648\u0631\u064a\u0629 \u0623\u0648 \u062a\u062d\u0631\u064a\u0631\u064a\u0629 \u0639\u0627\u0644\u064a\u0629 \u0627\u0644\u062d\u0633\u0627\u0633\u064a\u0629 \u0623\u0646\u062c\u0632\u062a\u0647\u0627 \u2014 \u0645\u0627 \u0636\u0648\u0627\u0628\u0637\u0643\u061f','\u0643\u064a\u0641 \u062a\u0642\u064a\u0651\u0645 \u062c\u0648\u062f\u0629 \u0645\u062a\u0631\u062c\u0645\u064a\u0646 \u0622\u062e\u0631\u064a\u0646 \u0648\u062a\u0648\u062d\u062f \u0645\u062e\u0631\u062c\u0627\u062a\u0647\u0645\u061f'],
 '\u0642\u064a\u0627\u062f\u064a':['\u0643\u064a\u0641 \u062a\u0628\u0646\u064a \u0648\u062d\u062f\u0629 \u062a\u0631\u062c\u0645\u0629 \u0648\u062a\u062d\u0631\u064a\u0631 \u0644\u063a\u0648\u064a \u062a\u062e\u062f\u0645 \u0645\u0646\u0634\u0623\u0629 \u0628\u0623\u0643\u0645\u0644\u0647\u0627\u061f','\u0645\u0627 \u0645\u0648\u0642\u0641\u0643 \u0645\u0646 \u0627\u0644\u062a\u0631\u062c\u0645\u0629 \u0627\u0644\u0622\u0644\u064a\u0629 \u2014 \u0623\u064a\u0646 \u062a\u0639\u062a\u0645\u062f\u0647\u0627 \u0648\u0623\u064a\u0646 \u062a\u0645\u0646\u0639\u0647\u0627\u061f','\u0643\u064a\u0641 \u062a\u062d\u0645\u064a \u0627\u0644\u0647\u0648\u064a\u0629 \u0627\u0644\u0644\u063a\u0648\u064a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0641\u064a \u0628\u064a\u0626\u0629 \u0639\u0645\u0644 \u062b\u0646\u0627\u0626\u064a\u0629 \u0627\u0644\u0644\u063a\u0629\u061f']},
'\u0627\u0644\u0628\u062d\u062b \u0627\u0644\u0639\u0644\u0645\u064a': {
 '\u0645\u0628\u062a\u062f\u0626':['\u0644\u062e\u0635 \u0644\u064a \u0628\u062d\u062b \u062a\u062e\u0631\u062c\u0643: \u0627\u0644\u0633\u0624\u0627\u0644\u060c \u0627\u0644\u0645\u0646\u0647\u062c\u060c \u0627\u0644\u0646\u062a\u064a\u062c\u0629.','\u0645\u0627 \u0627\u0644\u0641\u0631\u0642 \u0628\u064a\u0646 \u0627\u0644\u0641\u0631\u0636\u064a\u0629 \u0648\u0633\u0624\u0627\u0644 \u0627\u0644\u0628\u062d\u062b\u061f','\u0643\u064a\u0641 \u062a\u0648\u062b\u0642 \u0627\u0644\u0645\u0635\u0627\u062f\u0631 \u0648\u062a\u062a\u062c\u0646\u0628 \u0627\u0644\u0627\u0646\u062a\u062d\u0627\u0644 \u0627\u0644\u0639\u0644\u0645\u064a\u061f'],
 '\u0645\u062a\u0648\u0633\u0637':['\u0635\u0641 \u0648\u0631\u0642\u0629 \u0646\u0634\u0631\u062a\u0647\u0627 \u0623\u0648 \u0634\u0627\u0631\u0643\u062a \u0641\u064a\u0647\u0627 \u2014 \u0645\u0627 \u0645\u0633\u0627\u0647\u0645\u062a\u0643 \u062a\u062d\u062f\u064a\u062f\u064b\u0627 \u0648\u0645\u0627 \u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0644\u0645\u062d\u0643\u0645\u064a\u0646\u061f','\u0643\u064a\u0641 \u062a\u0635\u0645\u0645 \u062a\u062c\u0631\u0628\u0629 \u062a\u0639\u0632\u0644 \u0627\u0644\u0645\u062a\u063a\u064a\u0631 \u0627\u0644\u0630\u064a \u062a\u062f\u0631\u0633\u0647\u061f','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0646\u062a\u064a\u062c\u0629 \u0639\u0643\u0633 \u062a\u0648\u0642\u0639\u0643 \u2014 \u0645\u0627\u0630\u0627 \u0641\u0639\u0644\u062a \u0628\u0647\u0627\u061f'],
 '\u0643\u0628\u064a\u0631':['\u0635\u0641 \u0645\u0634\u0631\u0648\u0639\u064b\u0627 \u0628\u062d\u062b\u064a\u064b\u0627 \u0642\u062f\u062a\u0647 \u0628\u0645\u064a\u0632\u0627\u0646\u064a\u0629 \u0648\u0641\u0631\u064a\u0642 \u2014 \u0643\u064a\u0641 \u0623\u062f\u0631\u062a \u0627\u0644\u0645\u0646\u062d\u0629 \u0648\u0645\u062e\u0631\u062c\u0627\u062a\u0647\u0627\u061f','\u0643\u064a\u0641 \u062a\u0646\u0642\u0644 \u0646\u062a\u0627\u0626\u062c \u0628\u062d\u062b\u0643 \u0645\u0646 \u0627\u0644\u0645\u062e\u062a\u0628\u0631 \u0646\u062d\u0648 \u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u0623\u0648 \u0628\u0631\u0627\u0621\u0629 \u0627\u0644\u0627\u062e\u062a\u0631\u0627\u0639\u061f','\u0643\u064a\u0641 \u062a\u0648\u062c\u0647 \u0628\u0627\u062d\u062b\u064a\u0646 \u0645\u0628\u062a\u062f\u0626\u064a\u0646 \u0648\u062a\u0631\u0641\u0639 \u062c\u0648\u062f\u0629 \u0643\u062a\u0627\u0628\u062a\u0647\u0645 \u0627\u0644\u0639\u0644\u0645\u064a\u0629\u061f'],
 '\u0642\u064a\u0627\u062f\u064a':['\u0643\u064a\u0641 \u062a\u0628\u0646\u064a \u0628\u0631\u0646\u0627\u0645\u062c\u064b\u0627 \u0628\u062d\u062b\u064a\u064b\u0627 \u0648\u0637\u0646\u064a\u064b\u0627 \u0641\u064a \u0623\u0648\u0644\u0648\u064a\u0629 \u0639\u0644\u0645\u064a\u0629 \u0645\u062d\u062f\u062f\u0629\u061f','\u0635\u0641 \u0634\u0631\u0627\u0643\u0629 \u0628\u062d\u062b\u064a\u0629 \u062f\u0648\u0644\u064a\u0629 \u0628\u0646\u064a\u062a\u0647\u0627 \u2014 \u0645\u0627 \u0645\u0642\u0627\u064a\u0636\u0627\u062a\u0647\u0627\u061f','\u0643\u064a\u0641 \u062a\u0648\u0627\u0632\u0646 \u0628\u064a\u0646 \u0627\u0644\u0628\u062d\u062b \u0627\u0644\u062d\u0631 \u0648\u0627\u0644\u0628\u062d\u062b \u0627\u0644\u0645\u0648\u062c\u0647 \u0628\u0623\u0648\u0644\u0648\u064a\u0627\u062a \u0627\u0644\u0645\u0646\u0634\u0623\u0629\u061f']},
'\u0627\u0644\u062c\u0648\u062f\u0629 \u0648\u0627\u0644\u0633\u0644\u0627\u0645\u0629': {
 '\u0645\u0628\u062a\u062f\u0626':['\u0645\u0627 \u0627\u0644\u0641\u0631\u0642 \u0628\u064a\u0646 \u0636\u0628\u0637 \u0627\u0644\u062c\u0648\u062f\u0629 \u0648\u0636\u0645\u0627\u0646 \u0627\u0644\u062c\u0648\u062f\u0629\u061f','\u0635\u0641 \u0645\u0648\u0642\u0641\u064b\u0627 \u0644\u0627\u062d\u0638\u062a \u0641\u064a\u0647 \u0645\u0645\u0627\u0631\u0633\u0629 \u063a\u064a\u0631 \u0622\u0645\u0646\u0629 \u2014 \u0645\u0627\u0630\u0627 \u0641\u0639\u0644\u062a\u061f','\u0645\u0627 \u0623\u0647\u0645\u064a\u0629 \u0627\u0644\u062a\u0648\u062b\u064a\u0642 \u0641\u064a \u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u062c\u0648\u062f\u0629\u061f'],
 '\u0645\u062a\u0648\u0633\u0637':['\u0635\u0641 \u0639\u062f\u0645 \u0645\u0637\u0627\u0628\u0642\u0629 \u0627\u0643\u062a\u0634\u0641\u062a\u0647\u0627 \u2014 \u0643\u064a\u0641 \u062d\u0644\u0644\u062a \u0633\u0628\u0628\u0647\u0627 \u0627\u0644\u062c\u0630\u0631\u064a \u0648\u0623\u063a\u0644\u0642\u062a\u0647\u0627\u061f','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u062a\u062f\u0642\u064a\u0642 \u062f\u0627\u062e\u0644\u064a \u0646\u0641\u0630\u062a\u0647 \u2014 \u0643\u064a\u0641 \u062a\u0639\u0627\u0645\u0644\u062a \u0645\u0639 \u0645\u0642\u0627\u0648\u0645\u0629 \u0627\u0644\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u062f\u0642\u0642\u0629\u061f','\u0643\u064a\u0641 \u062a\u0628\u0646\u064a \u062b\u0642\u0627\u0641\u0629 \u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u0627\u0644\u062d\u0648\u0627\u062f\u062b \u062f\u0648\u0646 \u062e\u0648\u0641 \u0645\u0646 \u0627\u0644\u0644\u0648\u0645\u061f'],
 '\u0643\u0628\u064a\u0631':['\u0635\u0641 \u0631\u062d\u0644\u0629 \u062d\u0635\u0648\u0644 \u0645\u0646\u0634\u0623\u062a\u0643 \u0639\u0644\u0649 \u0634\u0647\u0627\u062f\u0629 \u0622\u064a\u0632\u0648 \u0634\u0627\u0631\u0643\u062a \u0641\u064a \u0642\u064a\u0627\u062f\u062a\u0647\u0627.','\u0643\u064a\u0641 \u062a\u0635\u0645\u0645 \u0645\u0635\u0641\u0648\u0641\u0629 \u0645\u062e\u0627\u0637\u0631 \u062a\u0634\u063a\u064a\u0644\u064a\u0629 \u0648\u062a\u062d\u062f\u0651\u062b\u0647\u0627\u061f','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u062d\u0627\u062f\u062b \u062c\u0633\u064a\u0645 \u062d\u0642\u0642\u062a \u0641\u064a\u0647 \u2014 \u0645\u0627 \u0627\u0644\u062a\u0648\u0635\u064a\u0627\u062a \u0627\u0644\u062c\u0630\u0631\u064a\u0629 \u0627\u0644\u062a\u064a \u062e\u0631\u062c\u062a \u0628\u0647\u0627\u061f'],
 '\u0642\u064a\u0627\u062f\u064a':['\u0643\u064a\u0641 \u062a\u062f\u0645\u062c \u0627\u0644\u062c\u0648\u062f\u0629 \u0648\u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0641\u064a \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u062a\u0634\u063a\u064a\u0644\u064a \u0627\u0644\u064a\u0648\u0645\u064a \u0644\u0627 \u0643\u0625\u062f\u0627\u0631\u0629 \u0645\u0646\u0641\u0635\u0644\u0629\u061f','\u0635\u0641 \u062a\u062d\u0648\u0644\u064b\u0627 \u0641\u064a \u062b\u0642\u0627\u0641\u0629 \u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0642\u062f\u062a\u0647 \u2014 \u0643\u064a\u0641 \u0642\u0633\u062a \u062a\u063a\u064a\u0651\u0631 \u0627\u0644\u0633\u0644\u0648\u0643\u061f','\u0643\u064a\u0641 \u062a\u0648\u0627\u0632\u0646 \u0628\u064a\u0646 \u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0627\u0645\u062a\u062b\u0627\u0644 \u0627\u0644\u0645\u062a\u0632\u0627\u064a\u062f\u0629 \u0648\u0633\u0644\u0627\u0633\u0629 \u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a\u061f']},
'\u0627\u0644\u0645\u0634\u062a\u0631\u064a\u0627\u062a \u0648\u0633\u0644\u0627\u0633\u0644 \u0627\u0644\u0625\u0645\u062f\u0627\u062f': {
 '\u0645\u0628\u062a\u062f\u0626':['\u0645\u0627 \u0645\u0631\u0627\u062d\u0644 \u062f\u0648\u0631\u0629 \u0627\u0644\u0634\u0631\u0627\u0621 \u0645\u0646 \u0627\u0644\u0637\u0644\u0628 \u062d\u062a\u0649 \u0627\u0644\u0627\u0633\u062a\u0644\u0627\u0645\u061f','\u0643\u064a\u0641 \u062a\u0642\u0627\u0631\u0646 \u0628\u064a\u0646 \u0639\u0631\u0636\u064a\u0646 \u0645\u062a\u0642\u0627\u0631\u0628\u064a\u0646 \u0633\u0639\u0631\u064b\u0627\u061f \u0645\u0627 \u0627\u0644\u0630\u064a \u062a\u0646\u0638\u0631 \u0625\u0644\u064a\u0647 \u063a\u064a\u0631 \u0627\u0644\u0633\u0639\u0631\u061f','\u0645\u0627 \u0627\u0644\u0630\u064a \u062a\u0639\u0631\u0641\u0647 \u0639\u0646 \u0645\u0646\u0635\u0629 \u0627\u0639\u062a\u0645\u0627\u062f \u0648\u0627\u0644\u0645\u0646\u0627\u0641\u0633\u0627\u062a \u0627\u0644\u062d\u0643\u0648\u0645\u064a\u0629\u061f'],
 '\u0645\u062a\u0648\u0633\u0637':['\u0635\u0641 \u0645\u0646\u0627\u0641\u0633\u0629 \u0623\u062f\u0631\u062a \u0637\u0631\u062d\u0647\u0627 \u0648\u062a\u0631\u0633\u064a\u062a\u0647\u0627 \u2014 \u0645\u0627 \u0623\u0635\u0639\u0628 \u0645\u0631\u0627\u062d\u0644\u0647\u0627\u061f','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0645\u0648\u0631\u062f \u0645\u062a\u0639\u062b\u0631 \u0623\u062b\u0646\u0627\u0621 \u0627\u0644\u062a\u0646\u0641\u064a\u0630 \u2014 \u0643\u064a\u0641 \u0639\u0627\u0644\u062c\u062a \u0627\u0644\u0645\u0648\u0642\u0641 \u062a\u0639\u0627\u0642\u062f\u064a\u064b\u0627 \u0648\u0639\u0645\u0644\u064a\u064b\u0627\u061f','\u0643\u064a\u0641 \u062a\u0643\u062a\u0634\u0641 \u0645\u0624\u0634\u0631\u0627\u062a \u062a\u0644\u0627\u0639\u0628 \u0623\u0648 \u062a\u0648\u0627\u0637\u0624 \u0641\u064a \u0627\u0644\u0639\u0631\u0648\u0636\u061f'],
 '\u0643\u0628\u064a\u0631':['\u0635\u0641 \u062a\u0641\u0627\u0648\u0636\u064b\u0627 \u0643\u0628\u064a\u0631\u064b\u0627 \u0642\u062f\u062a\u0647 \u2014 \u0645\u0627 \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u062a\u0643 \u0648\u0645\u0627 \u0627\u0644\u0630\u064a \u062d\u0635\u0644\u062a \u0639\u0644\u064a\u0647 \u0641\u0639\u0644\u064b\u0627\u061f','\u0643\u064a\u0641 \u062a\u0628\u0646\u064a \u062a\u0642\u064a\u064a\u0645 \u0645\u0648\u0631\u062f\u064a\u0646 \u062f\u0648\u0631\u064a\u064b\u0627 \u064a\u0624\u062b\u0631 \u062d\u0642\u064b\u0627 \u0641\u064a \u0642\u0631\u0627\u0631\u0627\u062a \u0627\u0644\u062a\u0631\u0633\u064a\u0629\u061f','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0639\u0642\u062f \u0625\u0637\u0627\u0631\u064a \u0635\u0645\u0645\u062a\u0647 \u2014 \u0644\u0645\u0627\u0630\u0627 \u0627\u062e\u062a\u0631\u062a\u0647 \u0648\u0645\u0627 \u0648\u0641\u0651\u0631\u0647\u061f'],
 '\u0642\u064a\u0627\u062f\u064a':['\u0643\u064a\u0641 \u062a\u0628\u0646\u064a \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 \u0645\u0634\u062a\u0631\u064a\u0627\u062a \u062a\u0648\u0627\u0632\u0646 \u0628\u064a\u0646 \u0627\u0644\u0643\u0641\u0627\u0621\u0629 \u0648\u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0645\u062d\u0644\u064a\u061f','\u0635\u0641 \u0623\u0632\u0645\u0629 \u0633\u0644\u0633\u0644\u0629 \u0625\u0645\u062f\u0627\u062f (\u0627\u0646\u0642\u0637\u0627\u0639/\u062a\u0636\u062e\u0645 \u0623\u0633\u0639\u0627\u0631) \u0642\u062f\u062a \u0627\u0644\u0627\u0633\u062a\u062c\u0627\u0628\u0629 \u0644\u0647\u0627.','\u0643\u064a\u0641 \u062a\u062d\u0648\u0651\u0644 \u0627\u0644\u0645\u0634\u062a\u0631\u064a\u0627\u062a \u0645\u0646 \u0648\u0638\u064a\u0641\u0629 \u0625\u062c\u0631\u0627\u0626\u064a\u0629 \u0625\u0644\u0649 \u0634\u0631\u064a\u0643 \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u061f']},
'\u0627\u0644\u0642\u0627\u0646\u0648\u0646 \u0648\u0627\u0644\u062d\u0648\u0643\u0645\u0629': {
 '\u0645\u0628\u062a\u062f\u0626':['\u0645\u0627 \u0627\u0644\u0641\u0631\u0642 \u0628\u064a\u0646 \u0627\u0644\u0639\u0642\u062f \u0648\u0627\u0644\u0627\u062a\u0641\u0627\u0642\u064a\u0629 \u0648\u0645\u0630\u0643\u0631\u0629 \u0627\u0644\u062a\u0641\u0627\u0647\u0645\u061f','\u0643\u064a\u0641 \u062a\u0628\u062d\u062b \u0639\u0646 \u0646\u0638\u0627\u0645 \u0623\u0648 \u0644\u0627\u0626\u062d\u0629 \u0633\u0639\u0648\u062f\u064a\u0629 \u0645\u062d\u062f\u062b\u0629 \u0648\u062a\u062a\u0623\u0643\u062f \u0645\u0646 \u0633\u0631\u064a\u0627\u0646\u0647\u0627\u061f','\u0635\u0641 \u062d\u0627\u0644\u0629 \u062f\u0631\u0633\u062a\u0647\u0627 \u0648\u0623\u0639\u062c\u0628\u0643 \u062a\u062d\u0644\u064a\u0644\u0647\u0627 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064a \u2014 \u0644\u0645\u0627\u0630\u0627\u061f'],
 '\u0645\u062a\u0648\u0633\u0637':['\u0635\u0641 \u0639\u0642\u062f\u064b\u0627 \u0635\u063a\u062a\u0647 \u0623\u0648 \u0631\u0627\u062c\u0639\u062a\u0647 \u2014 \u0645\u0627 \u0627\u0644\u0628\u0646\u0648\u062f \u0627\u0644\u062a\u064a \u0634\u062f\u062f\u062a \u0639\u0644\u064a\u0647\u0627 \u0648\u0644\u0645\u0627\u0630\u0627\u061f','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0631\u0623\u064a \u0642\u0627\u0646\u0648\u0646\u064a \u0623\u0639\u062f\u062f\u062a\u0647 \u0641\u064a \u0645\u0633\u0623\u0644\u0629 \u063a\u064a\u0631 \u0648\u0627\u0636\u062d\u0629 \u0627\u0644\u0646\u0635 \u2014 \u0643\u064a\u0641 \u0628\u0646\u064a\u062a \u0627\u0644\u0627\u062c\u062a\u0647\u0627\u062f\u061f','\u0643\u064a\u0641 \u062a\u0648\u0627\u0632\u0646 \u0628\u064a\u0646 \u062a\u0645\u0643\u064a\u0646 \u0627\u0644\u0625\u062f\u0627\u0631\u0627\u062a \u0645\u0646 \u0627\u0644\u062a\u062d\u0631\u0643 \u0648\u062d\u0645\u0627\u064a\u062a\u0647\u0627 \u0645\u0646 \u0627\u0644\u0645\u062e\u0627\u0637\u0631 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064a\u0629\u061f'],
 '\u0643\u0628\u064a\u0631':['\u0635\u0641 \u0646\u0632\u0627\u0639\u064b\u0627 \u0623\u0648 \u062a\u062d\u0643\u064a\u0645\u064b\u0627 \u062a\u0648\u0644\u064a\u062a \u0645\u0644\u0641\u0647 \u2014 \u0645\u0627 \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u062a\u0643 \u0648\u0645\u0627 \u0627\u0644\u0646\u062a\u064a\u062c\u0629\u061f','\u0643\u064a\u0641 \u062a\u0628\u0646\u064a \u0628\u0631\u0646\u0627\u0645\u062c \u0627\u0645\u062a\u062b\u0627\u0644 (\u062d\u0645\u0627\u064a\u0629 \u0628\u064a\u0627\u0646\u0627\u062a/\u0645\u0643\u0627\u0641\u062d\u0629 \u0641\u0633\u0627\u062f) \u062f\u0627\u062e\u0644 \u0645\u0646\u0634\u0623\u0629\u061f','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0645\u0648\u0642\u0641 \u0642\u0644\u062a \u0641\u064a\u0647 "\u0644\u0627" \u0642\u0627\u0646\u0648\u0646\u064a\u0629 \u0644\u0642\u064a\u0627\u062f\u0629 \u0645\u062a\u062d\u0645\u0633\u0629 \u2014 \u0643\u064a\u0641 \u0642\u0644\u062a\u0647\u0627\u061f'],
 '\u0642\u064a\u0627\u062f\u064a':['\u0643\u064a\u0641 \u062a\u0628\u0646\u064a \u0625\u062f\u0627\u0631\u0629 \u0642\u0627\u0646\u0648\u0646\u064a\u0629 \u0648\u062d\u0648\u0643\u0645\u0629 \u0631\u0634\u064a\u0642\u0629 \u0644\u0627 \u062a\u0639\u0637\u0644 \u0627\u0644\u0623\u0639\u0645\u0627\u0644\u061f','\u0635\u0641 \u0625\u0637\u0627\u0631 \u062d\u0648\u0643\u0645\u0629 \u0635\u0645\u0645\u062a\u0647 \u0644\u0645\u062c\u0644\u0633 \u0623\u0648 \u0644\u062c\u0627\u0646 \u0639\u0644\u064a\u0627.','\u0643\u064a\u0641 \u062a\u0648\u0627\u0632\u0646 \u0628\u064a\u0646 \u0627\u0644\u0633\u0631\u064a\u0629 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064a\u0629 \u0648\u0634\u0641\u0627\u0641\u064a\u0629 \u0627\u0644\u062d\u0648\u0643\u0645\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0646\u0638\u0627\u0645\u064b\u0627\u061f']},
'\u062e\u062f\u0645\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621': {
 '\u0645\u0628\u062a\u062f\u0626':['\u0635\u0641 \u0645\u0648\u0642\u0641\u064b\u0627 \u062a\u0639\u0627\u0645\u0644\u062a \u0641\u064a\u0647 \u0645\u0639 \u0634\u062e\u0635 \u063a\u0627\u0636\u0628 \u2014 \u0645\u0627\u0630\u0627 \u0642\u0644\u062a \u0644\u0647 \u0623\u0648\u0644\u064b\u0627\u061f','\u0645\u0627 \u0627\u0644\u0641\u0631\u0642 \u0628\u064a\u0646 \u0627\u0644\u0627\u0633\u062a\u062c\u0627\u0628\u0629 \u0627\u0644\u0633\u0631\u064a\u0639\u0629 \u0648\u0627\u0644\u062d\u0644 \u0627\u0644\u0641\u0639\u0644\u064a \u0644\u0644\u0645\u0634\u0643\u0644\u0629\u061f','\u0643\u064a\u0641 \u062a\u0631\u062f \u0643\u062a\u0627\u0628\u064a\u064b\u0627 \u0639\u0644\u0649 \u0634\u0643\u0648\u0649 \u0628\u0623\u0633\u0644\u0648\u0628 \u0631\u0633\u0645\u064a \u0648\u0645\u062a\u0639\u0627\u0637\u0641 \u0645\u0639\u064b\u0627\u061f'],
 '\u0645\u062a\u0648\u0633\u0637':['\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0634\u0643\u0648\u0649 \u0645\u0639\u0642\u062f\u0629 \u0623\u063a\u0644\u0642\u062a\u0647\u0627 \u0628\u0646\u0641\u0633\u0643 \u0645\u0646 \u0623\u0648\u0644\u0647\u0627 \u0644\u0622\u062e\u0631\u0647\u0627.','\u0643\u064a\u0641 \u062a\u062a\u0639\u0627\u0645\u0644 \u0645\u0639 \u0639\u0645\u064a\u0644 \u0645\u062d\u0642 \u0644\u0643\u0646 \u0627\u0644\u0646\u0638\u0627\u0645 \u0644\u0627 \u064a\u0633\u0645\u062d \u0628\u0645\u0627 \u064a\u0637\u0644\u0628\u0647\u061f','\u0635\u0641 \u062a\u062d\u0633\u064a\u0646\u064b\u0627 \u0627\u0642\u062a\u0631\u062d\u062a\u0647 \u0645\u0646 \u0648\u0627\u0642\u0639 \u0627\u0644\u0634\u0643\u0627\u0648\u0649 \u0627\u0644\u0645\u062a\u0643\u0631\u0631\u0629 \u2014 \u0645\u0627\u0630\u0627 \u062d\u062f\u062b \u0644\u0647\u061f'],
 '\u0643\u0628\u064a\u0631':['\u0643\u064a\u0641 \u062a\u0628\u0646\u064a \u0645\u0635\u0641\u0648\u0641\u0629 \u062a\u0635\u0639\u064a\u062f \u0644\u0644\u0634\u0643\u0627\u0648\u0649 \u062a\u062d\u0645\u064a \u0627\u0644\u0639\u0645\u064a\u0644 \u0648\u0627\u0644\u0645\u0648\u0638\u0641 \u0645\u0639\u064b\u0627\u061f','\u0635\u0641 \u0642\u064a\u0627\u0633\u064b\u0627 \u0644\u0631\u0636\u0627 \u0627\u0644\u0645\u0633\u062a\u0641\u064a\u062f\u064a\u0646 \u0635\u0645\u0645\u062a\u0647 \u2014 \u0645\u0627\u0630\u0627 \u063a\u064a\u0651\u0631\u062a \u0628\u0646\u0627\u0621 \u0639\u0644\u0649 \u0646\u062a\u0627\u0626\u062c\u0647\u061f','\u0643\u064a\u0641 \u062a\u062f\u0631\u0628 \u0641\u0631\u064a\u0642 \u062e\u062f\u0645\u0629 \u0648\u062a\u0631\u0641\u0639 \u062c\u0648\u062f\u0629 \u0631\u062f\u0648\u062f\u0647 \u0648\u062a\u0648\u062d\u062f\u0647\u0627\u061f'],
 '\u0642\u064a\u0627\u062f\u064a':['\u0643\u064a\u0641 \u062a\u062d\u0648\u0644 \u062a\u062c\u0631\u0628\u0629 \u0627\u0644\u0645\u0633\u062a\u0641\u064a\u062f \u0625\u0644\u0649 \u0645\u0624\u0634\u0631 \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a \u062a\u064f\u062d\u0627\u0633\u0628 \u0639\u0644\u064a\u0647 \u0627\u0644\u0625\u062f\u0627\u0631\u0627\u062a\u061f','\u0635\u0641 \u062a\u062d\u0648\u0644\u064b\u0627 \u0631\u0642\u0645\u064a\u064b\u0627 \u0641\u064a \u0642\u0646\u0648\u0627\u062a \u0627\u0644\u062e\u062f\u0645\u0629 \u0642\u062f\u062a\u0647 \u2014 \u0645\u0627 \u0623\u062b\u0631\u0647 \u0627\u0644\u0645\u0642\u0627\u0633\u061f','\u0643\u064a\u0641 \u062a\u0648\u0627\u0632\u0646 \u0628\u064a\u0646 \u0627\u0644\u0623\u062a\u0645\u062a\u0629 \u0648\u0627\u0644\u0627\u062d\u062a\u0641\u0627\u0638 \u0628\u0627\u0644\u0644\u0645\u0633\u0629 \u0627\u0644\u0625\u0646\u0633\u0627\u0646\u064a\u0629 \u0641\u064a \u0627\u0644\u062e\u062f\u0645\u0629\u061f']}
};

// \u0623\u0633\u0626\u0644\u0629 \u0633\u0644\u0648\u0643\u064a\u0629 \u0639\u0627\u0645\u0629 \u062d\u0633\u0628 \u0627\u0644\u0645\u0633\u062a\u0648\u0649 \u2014 \u062a\u064f\u0636\u0627\u0641 \u0644\u0623\u064a \u0645\u062c\u0627\u0644
const BEHAVIORAL_BANK = {
 '\u0645\u0628\u062a\u062f\u0626':['\u0623\u064a\u0646 \u062a\u0631\u0649 \u0646\u0641\u0633\u0643 \u0645\u0647\u0646\u064a\u064b\u0627 \u0628\u0639\u062f \u062b\u0644\u0627\u062b \u0633\u0646\u0648\u0627\u062a\u060c \u0648\u0645\u0627 \u0627\u0644\u0630\u064a \u0633\u062a\u0641\u0639\u0644\u0647 \u0644\u0644\u0648\u0635\u0648\u0644\u061f','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0645\u0647\u0627\u0631\u0629 \u062a\u0639\u0644\u0645\u062a\u0647\u0627 \u0628\u0646\u0641\u0633\u0643 \u0645\u0624\u062e\u0631\u064b\u0627 \u2014 \u0643\u064a\u0641 \u062a\u0639\u0644\u0645\u062a\u0647\u0627 \u0648\u0644\u0645\u0627\u0630\u0627\u061f','\u0635\u0641 \u0645\u0648\u0642\u0641\u064b\u0627 \u0623\u062e\u0637\u0623\u062a \u0641\u064a\u0647 \u2014 \u0643\u064a\u0641 \u0627\u0643\u062a\u0634\u0641\u062a \u0627\u0644\u062e\u0637\u0623 \u0648\u0645\u0627\u0630\u0627 \u0641\u0639\u0644\u062a\u061f','\u0644\u0648 \u0627\u0633\u062a\u0644\u0645\u062a \u0645\u0647\u0645\u0629 \u0644\u0627 \u062a\u0639\u0631\u0641 \u0643\u064a\u0641 \u062a\u0646\u062c\u0632\u0647\u0627\u060c \u0645\u0627 \u0623\u0648\u0644 \u062b\u0644\u0627\u062b \u062e\u0637\u0648\u0627\u062a \u062a\u0641\u0639\u0644\u0647\u0627\u061f','\u0645\u0627 \u0627\u0644\u0630\u064a \u064a\u062c\u0630\u0628\u0643 \u0644\u0644\u0639\u0645\u0644 \u0641\u064a \u0643\u0627\u0643\u0633\u062a \u062a\u062d\u062f\u064a\u062f\u064b\u0627\u061f'],
 '\u0645\u062a\u0648\u0633\u0637':['\u0635\u0641 \u0645\u0648\u0642\u0641\u064b\u0627 \u062a\u0644\u0642\u064a\u062a \u0641\u064a\u0647 \u0645\u0644\u0627\u062d\u0638\u0629 \u0646\u0642\u062f\u064a\u0629 \u0635\u0639\u0628\u0629 \u2014 \u0643\u064a\u0641 \u0627\u0633\u062a\u0641\u062f\u062a \u0645\u0646\u0647\u0627\u061f','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0645\u0634\u0631\u0648\u0639 \u0623\u062f\u0631\u062a\u0647 \u0645\u0646 \u0627\u0644\u0628\u062f\u0627\u064a\u0629 \u0644\u0644\u0646\u0647\u0627\u064a\u0629 \u0628\u0623\u0642\u0644 \u0625\u0634\u0631\u0627\u0641 \u0645\u0645\u0643\u0646.','\u0635\u0641 \u0645\u0648\u0642\u0641\u064b\u0627 \u0623\u0642\u0646\u0639\u062a \u0641\u064a\u0647 \u0637\u0631\u0641\u064b\u0627 \u0644\u0627 \u0633\u0644\u0637\u0629 \u0644\u0643 \u0639\u0644\u064a\u0647 \u0628\u062a\u063a\u064a\u064a\u0631 \u0631\u0623\u064a\u0647.','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0632\u0645\u064a\u0644 \u0623\u0642\u0644 \u062e\u0628\u0631\u0629 \u0648\u062c\u0651\u0647\u062a\u0647 \u2014 \u0643\u064a\u0641 \u062a\u0627\u0628\u0639\u062a \u062a\u0637\u0648\u0631\u0647\u061f','\u0635\u0641 \u0645\u0634\u0643\u0644\u0629 \u0645\u062a\u0643\u0631\u0631\u0629 \u0641\u064a \u0627\u0644\u0639\u0645\u0644 \u062d\u062f\u062f\u062a\u0647\u0627 \u0648\u0639\u0627\u0644\u062c\u062a \u062c\u0630\u0631\u0647\u0627.'],
 '\u0643\u0628\u064a\u0631':['\u0635\u0641 \u0645\u0648\u0642\u0641\u064b\u0627 \u0636\u062d\u0651\u064a\u062a \u0641\u064a\u0647 \u0628\u0645\u0643\u0633\u0628 \u0642\u0635\u064a\u0631 \u0627\u0644\u0645\u062f\u0649 \u0644\u0635\u0627\u0644\u062d \u0647\u062f\u0641 \u0623\u0628\u0639\u062f.','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0642\u0631\u0627\u0631 \u0627\u062a\u062e\u0630\u062a\u0647 \u0648\u0633\u0637 \u063a\u0645\u0648\u0636 \u0648\u062a\u0636\u0627\u0631\u0628 \u0622\u0631\u0627\u0621 \u2014 \u0643\u064a\u0641 \u062d\u0633\u0645\u062a\u0647 \u0648\u0645\u062a\u0649\u061f','\u0635\u0641 \u0645\u0648\u0642\u0641\u064b\u0627 \u0627\u062e\u062a\u0644\u0641\u062a \u0641\u064a\u0647 \u0645\u0639 \u0645\u062f\u064a\u0631\u0643 \u0627\u0644\u0645\u0628\u0627\u0634\u0631 \u2014 \u0643\u064a\u0641 \u0623\u062f\u0631\u062a \u0627\u0644\u062e\u0644\u0627\u0641\u061f','\u0643\u064a\u0641 \u062a\u062d\u0642\u0642 \u0646\u062a\u0627\u0626\u062c \u0645\u0646 \u062e\u0644\u0627\u0644 \u0623\u0634\u062e\u0627\u0635 \u0644\u0627 \u064a\u062a\u0628\u0639\u0648\u0646\u0643 \u062a\u0646\u0638\u064a\u0645\u064a\u064b\u0627\u061f','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0623\u0635\u0639\u0628 \u0631\u0633\u0627\u0644\u0629 \u0633\u0644\u0628\u064a\u0629 \u0627\u0636\u0637\u0631\u0631\u062a \u0644\u0625\u064a\u0635\u0627\u0644\u0647\u0627 \u2014 \u0643\u064a\u0641 \u0635\u063a\u062a\u0647\u0627\u061f'],
 '\u0642\u064a\u0627\u062f\u064a':['\u0643\u064a\u0641 \u062a\u062a\u0639\u0627\u0645\u0644 \u0645\u0639 \u062e\u0637\u0623 \u062c\u0633\u064a\u0645 \u0627\u0631\u062a\u0643\u0628\u0647 \u0623\u062d\u062f \u0645\u0631\u0624\u0648\u0633\u064a\u0643 \u0623\u0645\u0627\u0645 \u062c\u0647\u0627\u062a \u0639\u0644\u064a\u0627\u061f','\u0635\u0641 \u0642\u0631\u0627\u0631\u064b\u0627 \u0645\u0624\u0633\u0633\u064a\u064b\u0627 \u0627\u062a\u062e\u0630\u062a\u0647 \u0648\u062a\u062d\u0645\u0644\u062a \u0643\u0644\u0641\u062a\u0647 \u0627\u0644\u0633\u064a\u0627\u0633\u064a\u0629 \u062f\u0627\u062e\u0644 \u0627\u0644\u0645\u0646\u0634\u0623\u0629.','\u0643\u064a\u0641 \u062a\u0628\u0646\u064a \u0642\u0627\u062f\u0629 \u062a\u062d\u062a\u0643 \u0628\u062f\u0644 \u0627\u0644\u0627\u0639\u062a\u0645\u0627\u062f \u0627\u0644\u062f\u0627\u0626\u0645 \u0639\u0644\u064a\u0643\u061f','\u062d\u062f\u062b\u0646\u064a \u0639\u0646 \u0645\u0628\u0627\u062f\u0631\u0629 \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 \u0623\u0648\u0642\u0641\u062a\u0647\u0627 \u0631\u063a\u0645 \u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0643\u0628\u064a\u0631 \u0641\u064a\u0647\u0627 \u2014 \u0644\u0645\u0627\u0630\u0627\u061f','\u0643\u064a\u0641 \u062a\u0648\u0627\u0632\u0646 \u0628\u064a\u0646 \u0645\u0627 \u062a\u0631\u064a\u062f\u0647 \u0627\u0644\u0642\u064a\u0627\u062f\u0629 \u0627\u0644\u0639\u0644\u064a\u0627 \u0648\u0645\u0627 \u064a\u062d\u062a\u0627\u062c\u0647 \u0641\u0631\u064a\u0642\u0643 \u0641\u0639\u0644\u064b\u0627\u061f']
};

// \u062e\u0631\u064a\u0637\u0629 \u0643\u0644\u0645\u0627\u062a \u062a\u0643\u0634\u0641 \u0645\u062c\u0627\u0644 \u0627\u0644\u0645\u0631\u0634\u062d \u0645\u0646 \u0645\u0633\u0645\u0627\u0647 \u0648\u062a\u062e\u0635\u0635\u0647 \u0648\u0645\u0647\u0627\u0631\u0627\u062a\u0647
const FIELD_KEYWORDS = {
 '\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0648\u0627\u0644\u0628\u0631\u0645\u062c\u0629':['\u0645\u0637\u0648\u0631','\u0628\u0631\u0645\u062c','developer','software','\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a','\u0646\u0638\u0645 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a','\u062d\u0627\u0633\u0628','python','javascript','java','node','react','devops','\u0634\u0628\u0643\u0627\u062a','\u0623\u0645\u0646 \u0633\u064a\u0628\u0631\u0627\u0646\u064a','it '],
 '\u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a':['\u0628\u064a\u0627\u0646\u0627\u062a','data','\u062a\u062d\u0644\u064a\u0644','analyst','\u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064a','machine learning','\u062a\u0639\u0644\u0645 \u0622\u0644\u0629','bi','\u0625\u062d\u0635\u0627\u0621','statistics'],
 '\u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629':['\u0645\u0648\u0627\u0631\u062f \u0628\u0634\u0631\u064a\u0629','hr','\u0627\u0633\u062a\u0642\u0637\u0627\u0628','\u062a\u0648\u0638\u064a\u0641','recruit','talent','\u0634\u0624\u0648\u0646 \u0645\u0648\u0638\u0641\u064a\u0646','\u062a\u062f\u0631\u064a\u0628 \u0648\u062a\u0637\u0648\u064a\u0631'],
 '\u0627\u0644\u0645\u0627\u0644\u064a\u0629 \u0648\u0627\u0644\u0645\u062d\u0627\u0633\u0628\u0629':['\u0645\u062d\u0627\u0633\u0628','\u0645\u0627\u0644\u064a','finance','account','\u0645\u064a\u0632\u0627\u0646\u064a\u0629','\u062a\u062f\u0642\u064a\u0642','audit','\u0645\u0631\u0627\u0642\u0628 \u0645\u0627\u0644\u064a','\u0632\u0643\u0627\u0629','\u0636\u0631\u064a\u0628'],
 '\u0627\u0644\u0647\u0646\u062f\u0633\u0629':['\u0645\u0647\u0646\u062f\u0633','\u0647\u0646\u062f\u0633\u0629','engineer','\u0645\u062f\u0646\u064a','\u0645\u064a\u0643\u0627\u0646\u064a\u0643','\u0643\u0647\u0631\u0628\u0627\u0621','\u0645\u0639\u0645\u0627\u0631\u064a','\u0635\u0646\u0627\u0639\u064a\u0629','autocad'],
 '\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639':['\u0645\u0634\u0627\u0631\u064a\u0639','\u0645\u0634\u0631\u0648\u0639','project','pmp','pmo','scrum','agile'],
 '\u0627\u0644\u062a\u0633\u0648\u064a\u0642 \u0648\u0627\u0644\u0627\u062a\u0635\u0627\u0644':['\u062a\u0633\u0648\u064a\u0642','marketing','\u0625\u0639\u0644\u0627\u0645','\u0627\u062a\u0635\u0627\u0644 \u0645\u0624\u0633\u0633\u064a','\u0639\u0644\u0627\u0642\u0627\u062a \u0639\u0627\u0645\u0629','\u0645\u062d\u062a\u0648\u0649','\u0633\u0648\u0634\u0627\u0644','\u062a\u0648\u0627\u0635\u0644 \u0627\u062c\u062a\u0645\u0627\u0639\u064a','\u062a\u0635\u0645\u064a\u0645 \u062c\u0631\u0627\u0641\u064a\u0643'],
 '\u0627\u0644\u0625\u062f\u0627\u0631\u0629 \u0648\u0627\u0644\u0642\u064a\u0627\u062f\u0629':['\u0645\u062f\u064a\u0631 \u0639\u0627\u0645','\u0645\u062f\u064a\u0631 \u0625\u062f\u0627\u0631\u0629','\u0631\u0626\u064a\u0633 \u0642\u0633\u0645','\u0642\u064a\u0627\u062f\u0629','\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a','\u062a\u062e\u0637\u064a\u0637','\u062a\u0637\u0648\u064a\u0631 \u0623\u0639\u0645\u0627\u0644','\u0639\u0645\u0644\u064a\u0627\u062a'],
 '\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u0643\u062a\u0628\u064a\u0629':['\u0633\u0643\u0631\u062a\u064a\u0631','\u0625\u062f\u0627\u0631\u064a','\u0645\u0633\u0627\u0639\u062f','\u0645\u0646\u0633\u0642','\u0623\u0631\u0634\u0641\u0629','\u0645\u0643\u062a\u0628'],
 '\u0627\u0644\u0644\u063a\u0627\u062a':['\u0645\u062a\u0631\u062c\u0645','\u062a\u0631\u062c\u0645\u0629','translator','\u0644\u063a\u0648\u064a','\u062a\u062f\u0642\u064a\u0642 \u0644\u063a\u0648\u064a'],
 '\u0627\u0644\u0628\u062d\u062b \u0627\u0644\u0639\u0644\u0645\u064a':['\u0628\u0627\u062d\u062b','\u0628\u062d\u062b','research','\u0645\u062e\u062a\u0628\u0631','\u0639\u0627\u0644\u0645','\u062f\u0643\u062a\u0648\u0631\u0627\u0647','postdoc','\u0645\u0646\u062d \u0628\u062d\u062b\u064a\u0629'],
 '\u0627\u0644\u062c\u0648\u062f\u0629 \u0648\u0627\u0644\u0633\u0644\u0627\u0645\u0629':['\u062c\u0648\u062f\u0629','quality','\u0633\u0644\u0627\u0645\u0629','safety','iso','\u0628\u064a\u0626\u0629 \u0648\u0635\u062d\u0629','hse'],
 '\u0627\u0644\u0645\u0634\u062a\u0631\u064a\u0627\u062a \u0648\u0633\u0644\u0627\u0633\u0644 \u0627\u0644\u0625\u0645\u062f\u0627\u062f':['\u0645\u0634\u062a\u0631\u064a\u0627\u062a','procurement','\u0639\u0642\u0648\u062f \u0648\u0645','\u0645\u0646\u0627\u0642\u0635\u0627\u062a','\u0644\u0648\u062c\u0633\u062a','\u0625\u0645\u062f\u0627\u062f','\u0645\u062e\u0632\u0648\u0646','\u0645\u0633\u062a\u0648\u062f\u0639'],
 '\u0627\u0644\u0642\u0627\u0646\u0648\u0646 \u0648\u0627\u0644\u062d\u0648\u0643\u0645\u0629':['\u0642\u0627\u0646\u0648\u0646\u064a','\u0645\u062d\u0627\u0645\u064a','legal','\u062d\u0648\u0643\u0645\u0629','\u0627\u0645\u062a\u062b\u0627\u0644','compliance','\u0639\u0642\u0648\u062f \u0642\u0627\u0646\u0648\u0646\u064a\u0629','\u062a\u0634\u0631\u064a\u0639'],
 '\u062e\u062f\u0645\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621':['\u062e\u062f\u0645\u0629 \u0639\u0645\u0644\u0627\u0621','customer','\u0645\u0631\u0643\u0632 \u0627\u062a\u0635\u0627\u0644','call center','\u0634\u0643\u0627\u0648\u0649','\u0645\u0633\u062a\u0641\u064a\u062f\u064a\u0646']
};

function candidateLevel(yrs){
  if(yrs >= 15) return '\u0642\u064a\u0627\u062f\u064a';
  if(yrs >= 8) return '\u0643\u0628\u064a\u0631';
  if(yrs >= 3) return '\u0645\u062a\u0648\u0633\u0637';
  return '\u0645\u0628\u062a\u062f\u0626';
}
function detectField(candidate){
  const hay = ((candidate.currentTitle||'') + ' ' + (candidate.specialization||'') + ' ' +
    (candidate.skills||[]).join(' ') + ' ' + (candidate.resumeText||'').slice(0,2500)).toLowerCase();
  let best = null, bestHits = 0;
  for(const [field, kws] of Object.entries(FIELD_KEYWORDS)){
    const hits = kws.reduce((n,k)=> n + (hay.includes(k.toLowerCase()) ? 1 : 0), 0);
    if(hits > bestHits){ bestHits = hits; best = field; }
  }
  return bestHits > 0 ? best : null;
}
// \u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0645\u0631\u0634\u062d: \u0645\u062c\u0627\u0644\u0647 + \u0645\u0633\u062a\u0648\u0627\u0647 + \u0645\u0647\u0627\u0631\u0627\u062a\u0647 + \u0648\u0638\u064a\u0641\u062a\u0647 \u0627\u0644\u0645\u0631\u062a\u0628\u0637\u0629
function genCandidateQuestions(candidate){
  const yrs = (candidate.experienceYears && candidate.experienceYears > 0)
    ? candidate.experienceYears
    : ((candidate.resumeText && candidate.resumeText.trim()) ? guessExperienceYears(candidate.resumeText) : 0);
  const level = candidateLevel(yrs);
  const field = detectField(candidate);
  const qs = [];
  const add = (q)=>{ if(q && !qs.includes(q)) qs.push(q); };
  if(field && QUESTION_BANK[field]) (QUESTION_BANK[field][level]||[]).forEach(add);
  (BEHAVIORAL_BANK[level]||[]).slice(0,3).forEach(add);
  (candidate.skills||[]).slice(0,4).forEach(s=>{
    const bank = SKILL_BANK[String(s).toLowerCase()];
    if(bank && qs.length < 9) add(bank[0]);
  });
  const job = DB.jobs.find(j=>j.id===candidate.appliedFor);
  if(job) genQuestions(job).slice(0,2).forEach(q=>{ if(qs.length < 10) add(q); });
  while(qs.length < 5){
    const g = GENERIC_QUESTIONS[qs.length % GENERIC_QUESTIONS.length];
    if(!qs.includes(g)) add(g); else break;
  }
  return { questions: qs.slice(0,10), field, level, yrs };
}

const SKILL_LIBRARY = {
  '\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u0634\u062e\u0635\u064a\u0629 (Soft Skills)': ['\u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0641\u0639\u0627\u0644','\u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u062c\u0645\u0627\u0639\u064a','\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0648\u0642\u062a','\u062d\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062a','\u0627\u0644\u062a\u0641\u0643\u064a\u0631 \u0627\u0644\u0646\u0642\u062f\u064a','\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0639\u0627\u0637\u0641\u064a','\u0627\u0644\u0645\u0631\u0648\u0646\u0629 \u0648\u0627\u0644\u062a\u0643\u064a\u0641','\u0627\u0644\u0625\u0642\u0646\u0627\u0639 \u0648\u0627\u0644\u062a\u0641\u0627\u0648\u0636','\u0627\u0644\u0639\u0631\u0636 \u0648\u0627\u0644\u0625\u0644\u0642\u0627\u0621','\u0627\u0644\u0627\u0633\u062a\u0645\u0627\u0639 \u0627\u0644\u0641\u0639\u0627\u0644','\u0627\u0644\u0639\u0645\u0644 \u062a\u062d\u062a \u0627\u0644\u0636\u063a\u0637','\u0627\u0644\u0627\u0646\u0636\u0628\u0627\u0637 \u0648\u0627\u0644\u0627\u0644\u062a\u0632\u0627\u0645','\u0627\u0644\u062a\u0641\u0643\u064a\u0631 \u0627\u0644\u0625\u0628\u062f\u0627\u0639\u064a','\u062a\u062d\u0645\u0644 \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064a\u0629','\u0627\u0644\u0627\u062d\u062a\u0631\u0627\u0641\u064a\u0629 \u0641\u064a \u0627\u0644\u062a\u0639\u0627\u0645\u0644','\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u062e\u0644\u0627\u0641\u0627\u062a'],
  '\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0648\u0627\u0644\u0628\u0631\u0645\u062c\u0629': ['python','javascript','typescript','java','c#','sql','html/css','react','node.js','apis','git','linux','docker','\u0623\u0645\u0646 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a','\u0627\u0644\u062d\u0648\u0633\u0628\u0629 \u0627\u0644\u0633\u062d\u0627\u0628\u064a\u0629','\u0625\u062f\u0627\u0631\u0629 \u0642\u0648\u0627\u0639\u062f \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a'],
  '\u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a': ['\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a','power bi','tableau','excel \u0645\u062a\u0642\u062f\u0645','\u0627\u0644\u0625\u062d\u0635\u0627\u0621','\u062a\u0639\u0644\u0645 \u0627\u0644\u0622\u0644\u0629','\u0627\u0644\u062a\u0639\u0644\u0645 \u0627\u0644\u0639\u0645\u064a\u0642','\u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0637\u0628\u064a\u0639\u064a\u0629','\u062a\u0646\u0638\u064a\u0641 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a','\u0627\u0644\u062a\u0646\u0628\u0624 \u0648\u0627\u0644\u0646\u0645\u0630\u062c\u0629','\u0644\u0648\u062d\u0627\u062a \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a','big data','\u0627\u0644\u062a\u0642\u0627\u0631\u064a\u0631 \u0627\u0644\u062a\u062d\u0644\u064a\u0644\u064a\u0629'],
  '\u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629': ['\u0627\u0633\u062a\u0642\u0637\u0627\u0628 \u0627\u0644\u0645\u0648\u0627\u0647\u0628','\u0625\u062c\u0631\u0627\u0621 \u0627\u0644\u0645\u0642\u0627\u0628\u0644\u0627\u062a','\u062a\u062e\u0637\u064a\u0637 \u0627\u0644\u0642\u0648\u0649 \u0627\u0644\u0639\u0627\u0645\u0644\u0629','\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0623\u062f\u0627\u0621','\u0627\u0644\u062a\u0639\u0648\u064a\u0636\u0627\u062a \u0648\u0627\u0644\u0645\u0632\u0627\u064a\u0627','\u0627\u0644\u062a\u062f\u0631\u064a\u0628 \u0648\u0627\u0644\u062a\u0637\u0648\u064a\u0631','\u0639\u0644\u0627\u0642\u0627\u062a \u0627\u0644\u0645\u0648\u0638\u0641\u064a\u0646','\u0627\u0644\u062a\u0648\u0637\u064a\u0646 \u0648\u0633\u0639\u0648\u062f\u0629 \u0627\u0644\u0648\u0638\u0627\u0626\u0641','\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629','\u0627\u0644\u062a\u0647\u064a\u0626\u0629 \u0627\u0644\u0648\u0638\u064a\u0641\u064a\u0629','\u0628\u0646\u0627\u0621 \u0627\u0644\u062b\u0642\u0627\u0641\u0629 \u0627\u0644\u0645\u0624\u0633\u0633\u064a\u0629','\u062a\u062d\u0644\u064a\u0644\u0627\u062a \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629'],
  '\u0627\u0644\u0645\u0627\u0644\u064a\u0629 \u0648\u0627\u0644\u0645\u062d\u0627\u0633\u0628\u0629': ['\u0627\u0644\u0645\u062d\u0627\u0633\u0628\u0629 \u0627\u0644\u0645\u0627\u0644\u064a\u0629','\u0625\u0639\u062f\u0627\u062f \u0627\u0644\u0645\u064a\u0632\u0627\u0646\u064a\u0627\u062a','\u0627\u0644\u062a\u0642\u0627\u0631\u064a\u0631 \u0627\u0644\u0645\u0627\u0644\u064a\u0629','\u0627\u0644\u062a\u062f\u0642\u064a\u0642 \u0627\u0644\u062f\u0627\u062e\u0644\u064a','\u0627\u0644\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0645\u0627\u0644\u064a','\u0627\u0644\u0636\u0631\u0627\u0626\u0628 \u0648\u0627\u0644\u0632\u0643\u0627\u0629','\u0627\u0644\u0645\u0639\u0627\u064a\u064a\u0631 \u0627\u0644\u062f\u0648\u0644\u064a\u0629 ifrs','\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u062a\u062f\u0641\u0642 \u0627\u0644\u0646\u0642\u062f\u064a','\u0627\u0644\u062a\u0643\u0627\u0644\u064a\u0641','\u0627\u0644\u062a\u062e\u0637\u064a\u0637 \u0627\u0644\u0645\u0627\u0644\u064a','sap','oracle financials'],
  '\u0627\u0644\u0647\u0646\u062f\u0633\u0629': ['autocad','solidworks','revit','\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0647\u0646\u062f\u0633\u064a\u0629','\u0627\u0644\u0625\u0634\u0631\u0627\u0641 \u0639\u0644\u0649 \u0627\u0644\u062a\u0646\u0641\u064a\u0630','\u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0625\u0646\u0634\u0627\u0626\u064a','\u0627\u0644\u0647\u0646\u062f\u0633\u0629 \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064a\u0629','\u0627\u0644\u0647\u0646\u062f\u0633\u0629 \u0627\u0644\u0645\u064a\u0643\u0627\u0646\u064a\u0643\u064a\u0629','\u0647\u0646\u062f\u0633\u0629 \u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a','\u0636\u0628\u0637 \u0627\u0644\u062c\u0648\u062f\u0629 \u0627\u0644\u0647\u0646\u062f\u0633\u064a\u0629','\u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0625\u0646\u0634\u0627\u0626\u064a\u0629','\u062d\u0633\u0627\u0628 \u0627\u0644\u0643\u0645\u064a\u0627\u062a'],
  '\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639': ['pmp','\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0646\u0637\u0627\u0642 \u0648\u0627\u0644\u062c\u062f\u0648\u0644','agile','scrum','\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u062e\u0627\u0637\u0631','\u0625\u062f\u0627\u0631\u0629 \u0623\u0635\u062d\u0627\u0628 \u0627\u0644\u0645\u0635\u0644\u062d\u0629','\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u062a\u0646\u0641\u064a\u0630','\u0627\u0644\u062a\u0642\u0627\u0631\u064a\u0631 \u0627\u0644\u062f\u0648\u0631\u064a\u0629','ms project','jira','\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u064a\u0632\u0627\u0646\u064a\u0629','\u0625\u063a\u0644\u0627\u0642 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639'],
  '\u0627\u0644\u062a\u0633\u0648\u064a\u0642 \u0648\u0627\u0644\u0627\u062a\u0635\u0627\u0644': ['\u0627\u0644\u062a\u0633\u0648\u064a\u0642 \u0627\u0644\u0631\u0642\u0645\u064a','\u0625\u062f\u0627\u0631\u0629 \u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062a\u0648\u0627\u0635\u0644','\u062a\u062d\u0633\u064a\u0646 \u0645\u062d\u0631\u0643\u0627\u062a \u0627\u0644\u0628\u062d\u062b seo','\u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0645\u062d\u062a\u0648\u0649','\u0627\u0644\u0647\u0648\u064a\u0629 \u0627\u0644\u0628\u0635\u0631\u064a\u0629','\u0627\u0644\u062d\u0645\u0644\u0627\u062a \u0627\u0644\u0625\u0639\u0644\u0627\u0646\u064a\u0629','\u062a\u062d\u0644\u064a\u0644\u0627\u062a \u0627\u0644\u062a\u0633\u0648\u064a\u0642','\u0627\u0644\u0639\u0644\u0627\u0642\u0627\u062a \u0627\u0644\u0639\u0627\u0645\u0629','\u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0627\u0644\u0645\u0624\u0633\u0633\u064a','\u0643\u062a\u0627\u0628\u0629 \u0627\u0644\u0623\u062e\u0628\u0627\u0631 \u0648\u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a','\u0627\u0644\u062a\u0635\u0648\u064a\u0631 \u0648\u0627\u0644\u0645\u0648\u0646\u062a\u0627\u062c','\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0641\u0639\u0627\u0644\u064a\u0627\u062a'],
  '\u0627\u0644\u0625\u062f\u0627\u0631\u0629 \u0648\u0627\u0644\u0642\u064a\u0627\u062f\u0629': ['\u0627\u0644\u0642\u064a\u0627\u062f\u0629','\u0627\u0644\u062a\u062e\u0637\u064a\u0637 \u0627\u0644\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a','\u0627\u062a\u062e\u0627\u0630 \u0627\u0644\u0642\u0631\u0627\u0631','\u0628\u0646\u0627\u0621 \u0627\u0644\u0641\u0631\u0642','\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u062a\u063a\u064a\u064a\u0631','\u0627\u0644\u062a\u0641\u0648\u064a\u0636 \u0648\u0627\u0644\u0645\u062a\u0627\u0628\u0639\u0629','\u062d\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062a','\u0627\u0644\u062a\u0641\u0643\u064a\u0631 \u0627\u0644\u0646\u0642\u062f\u064a','\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u0627\u062a','\u0645\u0624\u0634\u0631\u0627\u062a \u0627\u0644\u0623\u062f\u0627\u0621 kpis','\u0627\u0644\u062d\u0648\u0643\u0645\u0629 \u0627\u0644\u0625\u062f\u0627\u0631\u064a\u0629','\u0625\u0639\u062f\u0627\u062f \u0627\u0644\u0633\u064a\u0627\u0633\u0627\u062a'],
  '\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u0643\u062a\u0628\u064a\u0629': ['microsoft word','microsoft excel','powerpoint','outlook','\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0644\u0641\u0627\u062a \u0648\u0627\u0644\u0623\u0631\u0634\u0641\u0629','\u0627\u0644\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0633\u0631\u064a\u0639\u0629','\u0645\u062d\u0627\u0636\u0631 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u0627\u062a','\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0639\u064a\u062f','\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u062f\u0639\u0645 \u0627\u0644\u0625\u062f\u0627\u0631\u064a','\u0627\u0644\u062a\u0642\u0627\u0631\u064a\u0631 \u0627\u0644\u0625\u062f\u0627\u0631\u064a\u0629'],
  '\u0627\u0644\u0644\u063a\u0627\u062a': ['\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0643\u062a\u0627\u0628\u0629 \u0627\u062d\u062a\u0631\u0627\u0641\u064a\u0629)','\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 (\u0645\u062a\u0642\u062f\u0645)','\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 (\u0645\u062a\u0648\u0633\u0637)','\u0627\u0644\u062a\u0631\u062c\u0645\u0629','\u0627\u0644\u062a\u062f\u0642\u064a\u0642 \u0627\u0644\u0644\u063a\u0648\u064a','\u0643\u062a\u0627\u0628\u0629 \u0627\u0644\u062a\u0642\u0627\u0631\u064a\u0631 \u0628\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629','\u0627\u0644\u0641\u0631\u0646\u0633\u064a\u0629','\u0627\u0644\u0635\u064a\u0646\u064a\u0629'],
  '\u0627\u0644\u0628\u062d\u062b \u0627\u0644\u0639\u0644\u0645\u064a': ['\u0645\u0646\u0647\u062c\u064a\u0629 \u0627\u0644\u0628\u062d\u062b','\u0643\u062a\u0627\u0628\u0629 \u0627\u0644\u0623\u0648\u0631\u0627\u0642 \u0627\u0644\u0639\u0644\u0645\u064a\u0629','\u0627\u0644\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0625\u062d\u0635\u0627\u0626\u064a spss','\u0627\u0644\u0646\u0634\u0631 \u0627\u0644\u0639\u0644\u0645\u064a','\u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u0623\u062f\u0628\u064a\u0627\u062a','\u0627\u0644\u062a\u062c\u0627\u0631\u0628 \u0627\u0644\u0645\u062e\u0628\u0631\u064a\u0629','\u0628\u0631\u0627\u0621\u0627\u062a \u0627\u0644\u0627\u062e\u062a\u0631\u0627\u0639','\u0627\u0644\u062a\u0642\u064a\u064a\u0645 \u0627\u0644\u0639\u0644\u0645\u064a','\u0623\u062e\u0644\u0627\u0642\u064a\u0627\u062a \u0627\u0644\u0628\u062d\u062b','\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0646\u062d \u0627\u0644\u0628\u062d\u062b\u064a\u0629'],
  '\u0627\u0644\u062c\u0648\u062f\u0629 \u0648\u0627\u0644\u0633\u0644\u0627\u0645\u0629': ['iso 9001','\u0627\u0644\u0635\u062d\u0629 \u0648\u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0645\u0647\u0646\u064a\u0629','osha','\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0645\u062e\u0627\u0637\u0631','\u0627\u0644\u062a\u062f\u0642\u064a\u0642 \u0639\u0644\u0649 \u0627\u0644\u062c\u0648\u062f\u0629','\u0627\u0644\u062a\u062d\u0633\u064a\u0646 \u0627\u0644\u0645\u0633\u062a\u0645\u0631','six sigma','\u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u063a\u0630\u0627\u0621 haccp','\u0627\u0644\u0627\u0633\u062a\u062c\u0627\u0628\u0629 \u0644\u0644\u0637\u0648\u0627\u0631\u0626','\u0627\u0644\u062a\u0648\u0639\u064a\u0629 \u0648\u0627\u0644\u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u0648\u0642\u0627\u0626\u064a'],
  '\u0627\u0644\u0645\u0634\u062a\u0631\u064a\u0627\u062a \u0648\u0633\u0644\u0627\u0633\u0644 \u0627\u0644\u0625\u0645\u062f\u0627\u062f': ['\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0634\u062a\u0631\u064a\u0627\u062a','\u0627\u0644\u062a\u0641\u0627\u0648\u0636 \u0645\u0639 \u0627\u0644\u0645\u0648\u0631\u062f\u064a\u0646','\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0639\u0642\u0648\u062f','\u0627\u0644\u0645\u0646\u0627\u0642\u0635\u0627\u062a \u0648\u0627\u0644\u062a\u0631\u0633\u064a\u0629','\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u062e\u0632\u0648\u0646','\u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0644\u0648\u062c\u0633\u062a\u064a\u0629','\u0627\u0644\u062a\u062e\u0644\u064a\u0635 \u0627\u0644\u062c\u0645\u0631\u0643\u064a','\u062a\u0642\u064a\u064a\u0645 \u0627\u0644\u0645\u0648\u0631\u062f\u064a\u0646','\u0645\u0646\u0635\u0629 \u0627\u0639\u062a\u0645\u0627\u062f','sap mm'],
  '\u0627\u0644\u0642\u0627\u0646\u0648\u0646 \u0648\u0627\u0644\u062d\u0648\u0643\u0645\u0629': ['\u0635\u064a\u0627\u063a\u0629 \u0627\u0644\u0639\u0642\u0648\u062f','\u0627\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064a\u0629','\u0627\u0644\u0627\u0645\u062a\u062b\u0627\u0644 \u0648\u0627\u0644\u062d\u0648\u0643\u0645\u0629','\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629','\u062d\u0645\u0627\u064a\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a pdpl','\u0627\u0644\u062a\u0642\u0627\u0636\u064a \u0648\u0627\u0644\u062a\u0631\u0627\u0641\u0639','\u0627\u0644\u0645\u0644\u0643\u064a\u0629 \u0627\u0644\u0641\u0643\u0631\u064a\u0629','\u0627\u0644\u062a\u062d\u0642\u064a\u0642\u0627\u062a \u0627\u0644\u0625\u062f\u0627\u0631\u064a\u0629','\u0645\u0643\u0627\u0641\u062d\u0629 \u063a\u0633\u0644 \u0627\u0644\u0623\u0645\u0648\u0627\u0644'],
  '\u062e\u062f\u0645\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621': ['\u0627\u0644\u062a\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u0639\u0645\u0644\u0627\u0621','\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0634\u0643\u0627\u0648\u0649','\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0627\u0644\u0647\u0627\u062a\u0641\u064a','\u0623\u0646\u0638\u0645\u0629 crm','\u0642\u064a\u0627\u0633 \u0631\u0636\u0627 \u0627\u0644\u0639\u0645\u0644\u0627\u0621','\u0627\u0644\u0631\u062f \u0627\u0644\u0643\u062a\u0627\u0628\u064a \u0627\u0644\u0627\u062d\u062a\u0631\u0627\u0641\u064a','\u0625\u062f\u0627\u0631\u0629 \u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u0627\u062a\u0635\u0627\u0644','\u0627\u0644\u0627\u062d\u062a\u0648\u0627\u0621 \u0648\u062d\u0644 \u0627\u0644\u0646\u0632\u0627\u0639\u0627\u062a']
};

function genQuestions(job){
  if(!job) return GENERIC_QUESTIONS.slice(0,3);
  const qs = [];
  (job.requiredSkills||[]).forEach(s=>{
    const bank = SKILL_BANK[s.toLowerCase()];
    if(bank) qs.push(bank[0]);
  });
  (job.niceSkills||[]).forEach(s=>{
    const bank = SKILL_BANK[s.toLowerCase()];
    if(bank && qs.length<6) qs.push(bank[1]||bank[0]);
  });
  while(qs.length<4){
    const g = GENERIC_QUESTIONS[qs.length % GENERIC_QUESTIONS.length];
    if(!qs.includes(g)) qs.push(g); else break;
  }
  return qs.slice(0,6);
}
function summarize(candidate){
  // A structured, per-candidate report. No match percentages here \u2014
  // those live in smart-match mode where a job gives them meaning.
  const job = DB.jobs.find(j=>j.id===candidate.appliedFor);
  const txt = candidate.resumeText || '';
  const skills = candidate.skills || [];
  // Experience: the stored number wins; when it's 0, read it from the
  // CV text with the section-aware parser.
  const yrs = (candidate.experienceYears && candidate.experienceYears > 0)
    ? candidate.experienceYears
    : (txt ? guessExperienceYears(txt) : 0);
  const lines = [];

  const intro = [];
  if(candidate.currentTitle) intro.push(candidate.currentTitle);
  const edu = candidate.degree && candidate.specialization
    ? candidate.degree + ' \u0641\u064a ' + candidate.specialization
    : (candidate.degree || (candidate.specialization ? '\u062a\u062e\u0635\u0635 ' + candidate.specialization : ''));
  if(edu) intro.push(edu);
  if(candidate.city) intro.push('\u0645\u0646 ' + candidate.city);
  lines.push('\u25fc \u0646\u0628\u0630\u0629: ' + candidate.name + (intro.length ? ' \u2014 ' + intro.join('\u060c ') : '') + '.');

  let expLine = '\u25fc \u0627\u0644\u062e\u0628\u0631\u0629: ' + (yrs > 0 ? yrs + (yrs >= 3 && yrs <= 10 ? ' \u0633\u0646\u0648\u0627\u062a' : ' \u0633\u0646\u0629') : '\u063a\u064a\u0631 \u0645\u062d\u062f\u062f\u0629 \u0641\u064a \u0627\u0644\u0633\u064a\u0631\u0629');
  const employers = txt ? guessEmployersFromText(txt) : [];
  if(employers.length) expLine += '\u060c \u0644\u062f\u0649 \u062c\u0647\u0627\u062a \u0645\u0646\u0647\u0627: ' + employers.join('\u060c ');
  lines.push(expLine + '.');

  lines.push('\u25fc \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a' + (skills.length ? ' (' + skills.length + '): ' + skills.join('\u060c ') : ': \u0644\u0627 \u062a\u0648\u062c\u062f \u0645\u0647\u0627\u0631\u0627\u062a \u0645\u0633\u062c\u0644\u0629') + '.');

  lines.push('\u25fc \u0627\u0644\u062d\u0627\u0644\u0629: ' + (job ? '\u0645\u0631\u062a\u0628\u0637 \u0628\u0648\u0638\u064a\u0641\u0629 "' + job.title + '"' : '\u0641\u064a \u0627\u0644\u0642\u0627\u0639\u062f\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u2014 \u0628\u0644\u0627 \u0648\u0638\u064a\u0641\u0629 \u0645\u0631\u062a\u0628\u0637\u0629')
    + ' \u00b7 \u0627\u0644\u0645\u0631\u062d\u0644\u0629: ' + candidate.stage
    + (candidate.source ? ' \u00b7 \u0627\u0644\u0645\u0635\u062f\u0631: ' + candidate.source : '') + '.');

  const asmts = candidate.assessments || [];
  let avg = null;
  if(asmts.length){
    avg = Math.round(asmts.reduce((s,a)=>s + (Number(a.score)||0), 0) / asmts.length);
    lines.push('\u25fc \u0627\u0644\u062a\u0642\u064a\u064a\u0645\u0627\u062a: ' + asmts.length + ' \u2014 \u0628\u0645\u062a\u0648\u0633\u0637 ' + avg + ' \u0645\u0646 ' + ASSESSMENT_MAX + '.');
  } else {
    lines.push('\u25fc \u0627\u0644\u062a\u0642\u064a\u064a\u0645\u0627\u062a: \u0644\u0627 \u062a\u0648\u062c\u062f \u062a\u0642\u064a\u064a\u0645\u0627\u062a \u0645\u0633\u062c\u0644\u0629 \u0628\u0639\u062f.');
  }

  const strengths = [], gaps = [];
  if(yrs >= 8) strengths.push('\u062e\u0628\u0631\u0629 \u0637\u0648\u064a\u0644\u0629');
  else if(yrs >= 3) strengths.push('\u062e\u0628\u0631\u0629 \u062c\u064a\u062f\u0629');
  else if(yrs > 0) gaps.push('\u062e\u0628\u0631\u0629 \u0642\u0635\u064a\u0631\u0629');
  else gaps.push('\u0633\u0646\u0648\u0627\u062a \u0627\u0644\u062e\u0628\u0631\u0629 \u063a\u064a\u0631 \u0645\u0648\u062b\u0642\u0629');
  if(skills.length >= 6) strengths.push('\u062d\u0635\u064a\u0644\u0629 \u0645\u0647\u0627\u0631\u0627\u062a \u0648\u0627\u0633\u0639\u0629 (' + skills.length + ')');
  else if(!skills.length) gaps.push('\u0644\u0627 \u0645\u0647\u0627\u0631\u0627\u062a \u0645\u0648\u062b\u0642\u0629');
  if(candidate.degree === '\u062f\u0643\u062a\u0648\u0631\u0627\u0647' || candidate.degree === '\u0645\u0627\u062c\u0633\u062a\u064a\u0631') strengths.push('\u0645\u0624\u0647\u0644 \u0639\u0627\u0644\u064d (' + candidate.degree + ')');
  if(avg !== null){
    if(avg >= ASSESSMENT_MAX * 0.7) strengths.push('\u0623\u062f\u0627\u0621 \u062a\u0642\u064a\u064a\u0645\u064a \u0642\u0648\u064a (' + avg + '/' + ASSESSMENT_MAX + ')');
    else if(avg < ASSESSMENT_MAX * 0.5) gaps.push('\u0623\u062f\u0627\u0621 \u062a\u0642\u064a\u064a\u0645\u064a \u0645\u062a\u0648\u0627\u0636\u0639 (' + avg + '/' + ASSESSMENT_MAX + ')');
  }
  if(!txt) gaps.push('\u0644\u0627 \u0646\u0635 \u0633\u064a\u0631\u0629 \u0645\u0642\u0631\u0648\u0621 \u2014 \u0642\u062f \u064a\u0643\u0648\u0646 \u0627\u0644\u0645\u0644\u0641 \u0635\u0648\u0631\u0629 \u0645\u0645\u0633\u0648\u062d\u0629');
  let verdict = '\u25fc \u0627\u0644\u062e\u0644\u0627\u0635\u0629: ';
  if(strengths.length) verdict += '\u0646\u0642\u0627\u0637 \u0627\u0644\u0642\u0648\u0629: ' + strengths.join('\u060c ') + '. ';
  if(gaps.length) verdict += '\u0646\u0642\u0627\u0637 \u062a\u0633\u062a\u062d\u0642 \u0627\u0644\u062a\u062d\u0642\u0642: ' + gaps.join('\u060c ') + '. ';
  verdict += '\u0644\u0646\u0633\u0628\u0629 \u0627\u0644\u0645\u0637\u0627\u0628\u0642\u0629 \u0627\u0644\u062f\u0642\u064a\u0642\u0629 \u0645\u0639 \u0623\u064a \u0648\u0638\u064a\u0641\u0629\u060c \u0627\u062e\u062a\u0631 \u0627\u0644\u0648\u0638\u064a\u0641\u0629 \u0645\u0646 \u0641\u0644\u062a\u0631 \u0642\u0627\u0639\u062f\u0629 \u0627\u0644\u0633\u064a\u0631 \u0627\u0644\u0630\u0627\u062a\u064a\u0629.';
  lines.push(verdict);

  return lines.join('\n');
}

/* ---------------------------------------------------------
   NAV / ROUTER
--------------------------------------------------------- */
// Inline SVG icons (stroke follows text color; teal when active).
const NAV_ICONS = {
  dashboard: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5"/></svg>',
  pipeline: '<svg viewBox="0 0 24 24"><path d="M5 4v11"/><path d="M12 4v16"/><path d="M19 4v7"/><circle cx="5" cy="18" r="1.6"/><circle cx="19" cy="14.5" r="1.6"/></svg>',
  assessments: '<svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4.5V3h6v1.5"/><path d="m9 13.5 2.2 2.2L15.5 11"/></svg>',
  jobs: '<svg viewBox="0 0 24 24"><rect x="3.5" y="8" width="17" height="12" rx="2"/><path d="M9 8V6.5A2.5 2.5 0 0 1 11.5 4h1A2.5 2.5 0 0 1 15 6.5V8"/><path d="M3.5 13h17"/></svg>',
  candidates: '<svg viewBox="0 0 24 24"><circle cx="9.5" cy="8.5" r="3.2"/><path d="M3.5 20c.6-3.4 3-5.3 6-5.3s5.4 1.9 6 5.3"/><circle cx="17" cy="9.5" r="2.4"/><path d="M16.5 14.6c2.4.3 3.8 1.8 4.2 4.4"/></svg>',
  audit: '<svg viewBox="0 0 24 24"><path d="M12 3.5 19 6v5.5c0 4.2-2.9 6.9-7 8.5-4.1-1.6-7-4.3-7-8.5V6z"/><path d="m9 11.8 2.1 2.1 4-4"/></svg>',
  users: '<svg viewBox="0 0 24 24"><circle cx="10" cy="8.5" r="3.2"/><path d="M4 20c.6-3.4 3-5.3 6-5.3 1.4 0 2.7.4 3.7 1.2"/><path d="M18 14.5v6"/><path d="M15 17.5h6"/></svg>',
  settings: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2"/><path d="M12 3v2.5M12 18.5V21M21 12h-2.5M5.5 12H3M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8M18.4 18.4l-1.8-1.8M7.4 7.4 5.6 5.6"/></svg>'
};
/* ---------------------------------------------------------
   i18n \u2014 English (default) / Arabic. English flips the whole
   platform to LTR. Stored per browser in localStorage 'tad_lang'.
   Domain data (stage values, banks, generated reports) stays in
   its stored language; the chrome translates.
   --------------------------------------------------------- */
const I18N = {
  en: {
    nav_dashboard:'Dashboard', nav_pipeline:'Pipeline', nav_assessments:'Assessments',
    nav_jobs:'Open Positions', nav_candidates:'CV Database', nav_settings:'Settings',
    logout:'Sign out',
    h_dashboard:'Dashboard', h_pipeline:'Recruitment Pipeline', h_assessments:'Assessments',
    h_jobs:'Open Positions', h_candidates:'CV Database', h_settings:'Settings',
    sub_candidates:'Every CV you have collected \u2014 searchable and scored against your open positions.',
    sub_jobs:'Define success criteria for each position \u2014 this powers matching and interview questions. Upload CVs directly to any job to link them automatically.',
    sub_pipeline:'Move candidates with the dropdown on each card \u2014 they join the new stage and leave the previous one automatically. (Drag & drop works too.)',
    sub_assessments:'Upload the assessment file as-is; the score is entered manually (out of {max}). Pick a job to see its candidates only.',
    sub_settings:'Platform appearance and account security{admin} \u2014 in one place.',
    sub_settings_admin:', user management and the audit log',
    stat_cvs:'Total CVs', stat_jobs:'Open positions',
    add_job:'+ Add Position', add_candidate:'+ Add Candidate', add_assessment:'+ Record Assessment',
    import_cvs:'Import CVs', export_excel:'Export to Excel', export_zip:'Export CV files (ZIP)',
    save:'Save', cancel:'Cancel', close:'Close', delete:'Delete',
    tab_appearance:'Appearance', tab_security:'Security', tab_users:'Users', tab_audit:'Audit Log',
    sec_appearance:'Platform Appearance',
    appearance_hint:'Saved in this browser and kept across sign-ins \u2014 each user and device has its own preference.',
    theme_aurora:'Aurora', theme_black:'Black', theme_light:'Light',
    theme_aurora_d:'The original identity with its moving aurora', theme_black_d:'Calm pure black, no motion', theme_light_d:'White panels, dark text',
    sec_lang:'Platform Language',
    lang_hint:'English switches the platform to left-to-right. Public landing and apply pages stay in Arabic for applicants.',
    sec_2fa:'Two-Factor Authentication (2FA)',
    twofa_on:'Enabled \u2713', twofa_off:'Not enabled \u2014 we recommend it to protect your account with a rotating code from your phone.',
    twofa_enable:'Enable 2FA', twofa_disable:'Disable 2FA',
    sec_password:'Password', pw_hint:'Change your password periodically and never share it.', pw_change:'Change password',
    search_ph:'Search by name, job title, skill, or CV text\u2026',
    all:'All', stage_filter:'Stage', job_filter:'Position',
    yrs_exp:'yrs experience',
    stage_screening:'Screening', stage_phone:'Phone Interview', stage_interview:'Interview',
    stage_offer:'Job Offer', stage_hired:'Hired', stage_rejected:'Rejected', stage_other:'Fits Another Role',
    brand_name:'Talent Acquisition Directorate', brand_org:'King Abdulaziz City for Science and Technology',
    edit:'Edit', clone:'Clone', del_job:'Delete Position', add_job_h:'Add Position', edit_job_h:'Edit Position',
    add_cand_h:'Add Candidate', edit_cand_h:'Edit Candidate', import_h:'Import CVs',
    vacancies_stat:'Open Positions', fill_rate:'Vacancy Fill Rate',
    alt_pool:'Fits Another Role', alt_empty:'No candidates in the waiting pool yet', alt_empty_hint:'From any candidate profile, set "Fits Another Role" to show them here.',
    vac_count:'Positions', all_stages:'All Stages', all_jobs:'All Positions',
    m_title:'Job Title', m_dept:'Department', m_seniority:'Seniority Level', m_headcount:'Vacancies',
    m_postdate:'Post Date', m_closing:'Application Closing Date', m_reqdegree:'Required Degree',
    m_expfrom:'Experience (from)', m_expto:'to', m_city:'Work City', m_salary:'Salary Range',
    m_reqskills:'Required Skills (comma-separated)', m_niceskills:'Preferred Additional Skills',
    m_approved:'Approved position (has official hiring approval)', m_desc:'Job Description \u2014 its words fuel the matching',
    m_uploadcv:'Upload CV (PDF, DOCX, or TXT)', m_fullname:'Full Name', m_email:'Email',
    m_phone:'Phone', m_source:'Source', m_expyears:'Years of Experience', m_curtitle:'Current/Last Job Title',
    m_appliedfor:'Applied Position', m_spec:'Specialization', m_degree:'Degree', m_candcity:'City',
    m_skills:'Skills (comma-separated)', save_job:'Save Position', save_cand:'Save Candidate', save_changes:'Save Changes',
    clone_job_h:'Clone Position', none_opt:'\u2014 None \u2014', choose_opt:'\u2014 Select \u2014', unset_opt:'\u2014 Not set \u2014',
    upload_to_job:'Upload CVs for this position', add_one_cand:'+ One candidate', posted_on:'Posted', card_approved:'Approved', card_not_approved:'Not Approved'
  },
  ar: {
    nav_dashboard:'\u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645', nav_pipeline:'\u0645\u0633\u0627\u0631 \u0627\u0644\u0627\u0633\u062a\u0642\u0637\u0627\u0628', nav_assessments:'\u0627\u0644\u062a\u0642\u064a\u064a\u0645\u0627\u062a',
    nav_jobs:'\u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u0634\u0627\u063a\u0631\u0629', nav_candidates:'\u0642\u0627\u0639\u062f\u0629 \u0627\u0644\u0633\u064a\u0631 \u0627\u0644\u0630\u0627\u062a\u064a\u0629', nav_settings:'\u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a',
    logout:'\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c',
    h_dashboard:'\u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645', h_pipeline:'\u0645\u0633\u0627\u0631 \u0627\u0644\u0627\u0633\u062a\u0642\u0637\u0627\u0628', h_assessments:'\u0627\u0644\u062a\u0642\u064a\u064a\u0645\u0627\u062a',
    h_jobs:'\u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u0634\u0627\u063a\u0631\u0629', h_candidates:'\u0642\u0627\u0639\u062f\u0629 \u0627\u0644\u0633\u064a\u0631 \u0627\u0644\u0630\u0627\u062a\u064a\u0629', h_settings:'\u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a',
    sub_candidates:'\u0643\u0644 \u0633\u064a\u0631\u0629 \u0630\u0627\u062a\u064a\u0629 \u062c\u0645\u0639\u062a\u0647\u0627\u060c \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0628\u062d\u062b \u0648\u0645\u064f\u0642\u064a\u0651\u0645\u0629 \u0645\u0642\u0627\u0628\u0644 \u0648\u0638\u0627\u0626\u0641\u0643 \u0627\u0644\u0634\u0627\u063a\u0631\u0629.',
    sub_jobs:'\u062d\u062f\u062f \u0645\u0639\u0627\u064a\u064a\u0631 \u0627\u0644\u0646\u062c\u0627\u062d \u0644\u0643\u0644 \u0648\u0638\u064a\u0641\u0629 \u2014 \u0647\u0630\u0627 \u064a\u0634\u063a\u0651\u0644 \u0646\u0633\u0628\u0629 \u0627\u0644\u0645\u0637\u0627\u0628\u0642\u0629 \u0648\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0645\u0642\u0627\u0628\u0644\u0629. \u0627\u0631\u0641\u0639 \u0627\u0644\u0633\u064a\u0631 \u0627\u0644\u0630\u0627\u062a\u064a\u0629 \u0645\u0628\u0627\u0634\u0631\u0629 \u0625\u0644\u0649 \u0623\u064a \u0648\u0638\u064a\u0641\u0629 \u0645\u0646 \u0647\u0646\u0627 \u0644\u0631\u0628\u0637\u0647\u0627 \u062a\u0644\u0642\u0627\u0626\u064a\u064b\u0627 \u0628\u0647\u0627.',
    sub_pipeline:'\u0627\u0646\u0642\u0644 \u0627\u0644\u0645\u0631\u0634\u062d \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0646\u0633\u062f\u0644\u0629 \u0639\u0644\u0649 \u0628\u0637\u0627\u0642\u062a\u0647 \u2014 \u064a\u0646\u062a\u0642\u0644 \u0644\u0644\u0645\u0631\u062d\u0644\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 \u0648\u064a\u064f\u0632\u0627\u0644 \u0645\u0646 \u0627\u0644\u0633\u0627\u0628\u0642\u0629 \u062a\u0644\u0642\u0627\u0626\u064a\u064b\u0627. (\u0627\u0644\u0633\u062d\u0628 \u0648\u0627\u0644\u0625\u0641\u0644\u0627\u062a \u064a\u0639\u0645\u0644 \u0623\u064a\u0636\u064b\u0627.)',
    sub_assessments:'\u0627\u0631\u0641\u0639 \u0645\u0644\u0641 \u0627\u0644\u062a\u0642\u064a\u064a\u0645 \u0648\u064a\u064f\u062d\u0641\u0638 \u0643\u0645\u0627 \u0647\u0648\u060c \u0648\u0627\u0644\u062f\u0631\u062c\u0629 \u062a\u064f\u062f\u062e\u0644 \u064a\u062f\u0648\u064a\u064b\u0627 (\u0645\u0646 {max}). \u0627\u062e\u062a\u0631 \u0648\u0638\u064a\u0641\u0629 \u0644\u0639\u0631\u0636 \u0645\u0631\u0634\u062d\u064a\u0647\u0627 \u0641\u0642\u0637.',
    sub_settings:'\u0645\u0638\u0647\u0631 \u0627\u0644\u0645\u0646\u0635\u0629 \u0648\u0623\u0645\u0627\u0646 \u062d\u0633\u0627\u0628\u0643{admin} \u2014 \u0641\u064a \u0645\u0643\u0627\u0646 \u0648\u0627\u062d\u062f.',
    sub_settings_admin:' \u0648\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0648\u0633\u062c\u0644 \u0627\u0644\u062a\u062f\u0642\u064a\u0642',
    stat_cvs:'\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0633\u064a\u0631 \u0627\u0644\u0630\u0627\u062a\u064a\u0629', stat_jobs:'\u0639\u062f\u062f \u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u0634\u0627\u063a\u0631\u0629',
    add_job:'+ \u0625\u0636\u0627\u0641\u0629 \u0648\u0638\u064a\u0641\u0629', add_candidate:'+ \u0625\u0636\u0627\u0641\u0629 \u0645\u0631\u0634\u062d', add_assessment:'+ \u062a\u0633\u062c\u064a\u0644 \u062a\u0642\u064a\u064a\u0645',
    import_cvs:'\u0627\u0633\u062a\u064a\u0631\u0627\u062f \u0627\u0644\u0633\u064a\u0631 \u0627\u0644\u0630\u0627\u062a\u064a\u0629', export_excel:'\u062a\u0635\u062f\u064a\u0631 \u0625\u0644\u0649 \u0625\u0643\u0633\u0644', export_zip:'\u062a\u0635\u062f\u064a\u0631 \u0645\u0644\u0641\u0627\u062a \u0627\u0644\u0633\u064a\u0631 (ZIP)',
    save:'\u062d\u0641\u0638', cancel:'\u0625\u0644\u063a\u0627\u0621', close:'\u0625\u063a\u0644\u0627\u0642', delete:'\u062d\u0630\u0641',
    tab_appearance:'\u0645\u0638\u0647\u0631 \u0627\u0644\u0645\u0646\u0635\u0629', tab_security:'\u0627\u0644\u0623\u0645\u0627\u0646', tab_users:'\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u0648\u0646', tab_audit:'\u0633\u062c\u0644 \u0627\u0644\u062a\u062f\u0642\u064a\u0642',
    sec_appearance:'\u0645\u0638\u0647\u0631 \u0627\u0644\u0645\u0646\u0635\u0629',
    appearance_hint:'\u0627\u062e\u062a\u064a\u0627\u0631\u0643 \u064a\u064f\u062d\u0641\u0638 \u0641\u064a \u0647\u0630\u0627 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0648\u064a\u0628\u0642\u0649 \u0628\u0639\u062f \u0627\u0644\u062e\u0631\u0648\u062c \u0648\u0627\u0644\u062f\u062e\u0648\u0644 \u2014 \u0648\u0644\u0643\u0644 \u0645\u0633\u062a\u062e\u062f\u0645 \u0648\u062c\u0647\u0627\u0632 \u062a\u0641\u0636\u064a\u0644\u0647 \u0627\u0644\u0645\u0633\u062a\u0642\u0644.',
    theme_aurora:'\u0623\u0648\u0631\u0648\u0631\u0627', theme_black:'\u0623\u0633\u0648\u062f', theme_light:'\u0641\u0627\u062a\u062d',
    theme_aurora_d:'\u0627\u0644\u0647\u0648\u064a\u0629 \u0627\u0644\u0623\u0635\u0644\u064a\u0629 \u0628\u0634\u0641\u0642\u0647\u0627 \u0627\u0644\u0645\u062a\u062d\u0631\u0643', theme_black_d:'\u0623\u0633\u0648\u062f \u0647\u0627\u062f\u0626 \u0628\u0644\u0627 \u062d\u0631\u0643\u0629', theme_light_d:'\u0644\u0648\u062d\u0627\u062a \u0628\u064a\u0636\u0627\u0621 \u0648\u0646\u0635 \u062f\u0627\u0643\u0646',
    sec_lang:'\u0644\u063a\u0629 \u0627\u0644\u0645\u0646\u0635\u0629',
    lang_hint:'\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u062a\u062d\u0648\u0644 \u0627\u0644\u0645\u0646\u0635\u0629 \u0625\u0644\u0649 \u0627\u062a\u062c\u0627\u0647 \u064a\u0633\u0627\u0631-\u064a\u0645\u064a\u0646. \u0635\u0641\u062d\u062a\u0627 \u0627\u0644\u0647\u0628\u0648\u0637 \u0648\u0627\u0644\u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u0639\u0627\u0645\u062a\u0627\u0646 \u062a\u0628\u0642\u064a\u0627\u0646 \u0628\u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0644\u0644\u0645\u062a\u0642\u062f\u0645\u064a\u0646.',
    sec_2fa:'\u0627\u0644\u0645\u0635\u0627\u062f\u0642\u0629 \u0627\u0644\u062b\u0646\u0627\u0626\u064a\u0629 (2FA)',
    twofa_on:'\u0645\u0641\u0639\u0651\u0644\u0629 \u2713', twofa_off:'\u063a\u064a\u0631 \u0645\u0641\u0639\u0651\u0644\u0629 \u2014 \u0646\u0646\u0635\u062d \u0628\u062a\u0641\u0639\u064a\u0644\u0647\u0627 \u0644\u062d\u0645\u0627\u064a\u0629 \u062d\u0633\u0627\u0628\u0643 \u0628\u0631\u0645\u0632 \u0645\u062a\u062c\u062f\u062f \u0645\u0646 \u062c\u0648\u0627\u0644\u0643.',
    twofa_enable:'\u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u0645\u0635\u0627\u062f\u0642\u0629 \u0627\u0644\u062b\u0646\u0627\u0626\u064a\u0629', twofa_disable:'\u062a\u0639\u0637\u064a\u0644 \u0627\u0644\u0645\u0635\u0627\u062f\u0642\u0629 \u0627\u0644\u062b\u0646\u0627\u0626\u064a\u0629',
    sec_password:'\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631', pw_hint:'\u063a\u064a\u0651\u0631 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631\u0643 \u062f\u0648\u0631\u064a\u064b\u0627 \u0648\u0644\u0627 \u062a\u0634\u0627\u0631\u0643\u0647\u0627 \u0645\u0639 \u0623\u062d\u062f.', pw_change:'\u062a\u063a\u064a\u064a\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631',
    search_ph:'\u0627\u0628\u062d\u062b \u0628\u0627\u0644\u0627\u0633\u0645 \u0623\u0648 \u0627\u0644\u0645\u0633\u0645\u0649 \u0627\u0644\u0648\u0638\u064a\u0641\u064a \u0623\u0648 \u0627\u0644\u0645\u0647\u0627\u0631\u0629 \u0623\u0648 \u0646\u0635 \u0627\u0644\u0633\u064a\u0631\u0629\u2026',
    all:'\u0627\u0644\u0643\u0644', stage_filter:'\u0627\u0644\u0645\u0631\u062d\u0644\u0629', job_filter:'\u0627\u0644\u0648\u0638\u064a\u0641\u0629',
    yrs_exp:'\u0633\u0646\u0629 \u062e\u0628\u0631\u0629',
    stage_screening:'\u0627\u0644\u0641\u0631\u0632', stage_phone:'\u0627\u0644\u0645\u0642\u0627\u0628\u0644\u0629 \u0627\u0644\u0647\u0627\u062a\u0641\u064a\u0629', stage_interview:'\u0627\u0644\u0645\u0642\u0627\u0628\u0644\u0629',
    stage_offer:'\u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u0648\u0638\u064a\u0641\u064a', stage_hired:'\u062a\u0645 \u0627\u0644\u062a\u0639\u064a\u064a\u0646', stage_rejected:'\u0645\u0631\u0641\u0648\u0636', stage_other:'\u0645\u0646\u0627\u0633\u0628 \u0644\u0634\u0627\u063a\u0631 \u0622\u062e\u0631',
    brand_name:'\u0625\u062f\u0627\u0631\u0629 \u0627\u0633\u062a\u0642\u0637\u0627\u0628 \u0627\u0644\u0643\u0641\u0627\u0621\u0627\u062a', brand_org:'\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0644\u0643 \u0639\u0628\u062f\u0627\u0644\u0639\u0632\u064a\u0632 \u0644\u0644\u0639\u0644\u0648\u0645 \u0648\u0627\u0644\u062a\u0642\u0646\u064a\u0629',
    edit:'\u062a\u0639\u062f\u064a\u0644', clone:'\u0627\u0633\u062a\u0646\u0633\u0627\u062e', del_job:'\u062d\u0630\u0641 \u0627\u0644\u0648\u0638\u064a\u0641\u0629', add_job_h:'\u0625\u0636\u0627\u0641\u0629 \u0648\u0638\u064a\u0641\u0629', edit_job_h:'\u062a\u0639\u062f\u064a\u0644 \u0648\u0638\u064a\u0641\u0629',
    add_cand_h:'\u0625\u0636\u0627\u0641\u0629 \u0645\u0631\u0634\u062d', edit_cand_h:'\u062a\u0639\u062f\u064a\u0644 \u0645\u0631\u0634\u062d', import_h:'\u0627\u0633\u062a\u064a\u0631\u0627\u062f \u0627\u0644\u0633\u064a\u0631 \u0627\u0644\u0630\u0627\u062a\u064a\u0629',
    vacancies_stat:'\u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u0634\u0627\u063a\u0631\u0629', fill_rate:'\u0645\u0639\u062f\u0644 \u062a\u0639\u0628\u0626\u0629 \u0627\u0644\u0634\u0648\u0627\u063a\u0631',
    alt_pool:'\u0645\u0646\u0627\u0633\u0628 \u0644\u0634\u0627\u063a\u0631 \u0622\u062e\u0631', alt_empty:'\u0644\u0627 \u064a\u0648\u062c\u062f \u0645\u0631\u0634\u062d\u0648\u0646 \u0641\u064a \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631 \u0628\u0639\u062f', alt_empty_hint:'\u0645\u0646 \u0645\u0644\u0641 \u0623\u064a \u0645\u0631\u0634\u062d\u060c \u0641\u0639\u0651\u0644 "\u0645\u0646\u0627\u0633\u0628 \u0644\u0634\u0627\u063a\u0631 \u0622\u062e\u0631" \u0644\u064a\u0638\u0647\u0631 \u0647\u0646\u0627.',
    vac_count:'\u0627\u0644\u0634\u0648\u0627\u063a\u0631', all_stages:'\u0643\u0644 \u0627\u0644\u0645\u0631\u0627\u062d\u0644', all_jobs:'\u0643\u0644 \u0627\u0644\u0648\u0638\u0627\u0626\u0641',
    m_title:'\u0627\u0644\u0645\u0633\u0645\u0649 \u0627\u0644\u0648\u0638\u064a\u0641\u064a', m_dept:'\u0627\u0644\u0642\u0633\u0645', m_seniority:'\u0627\u0644\u0645\u0633\u062a\u0648\u0649 \u0627\u0644\u0648\u0638\u064a\u0641\u064a', m_headcount:'\u0639\u062f\u062f \u0627\u0644\u0634\u0648\u0627\u063a\u0631',
    m_postdate:'\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0646\u0634\u0631', m_closing:'\u062a\u0627\u0631\u064a\u062e \u0625\u063a\u0644\u0627\u0642 \u0627\u0644\u062a\u0642\u062f\u064a\u0645', m_reqdegree:'\u0627\u0644\u0645\u0624\u0647\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628',
    m_expfrom:'\u0633\u0646\u0648\u0627\u062a \u0627\u0644\u062e\u0628\u0631\u0629 (\u0645\u0646)', m_expto:'\u0625\u0644\u0649', m_city:'\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0639\u0645\u0644', m_salary:'\u0646\u0637\u0627\u0642 \u0627\u0644\u0631\u0627\u062a\u0628',
    m_reqskills:'\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 (\u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0641\u0648\u0627\u0635\u0644)', m_niceskills:'\u0645\u0647\u0627\u0631\u0627\u062a \u0625\u0636\u0627\u0641\u064a\u0629 \u0645\u0641\u0636\u0644\u0629',
    m_approved:'\u0648\u0638\u064a\u0641\u0629 \u0645\u0639\u062a\u0645\u062f\u0629 (\u0644\u062f\u064a\u0647\u0627 \u0645\u0648\u0627\u0641\u0642\u0629 \u0631\u0633\u0645\u064a\u0629 \u0644\u0644\u062a\u0648\u0638\u064a\u0641)', m_desc:'\u0627\u0644\u0648\u0635\u0641 \u0627\u0644\u0648\u0638\u064a\u0641\u064a \u2014 \u0643\u0644\u0645\u0627\u062a\u0647 \u0648\u0642\u0648\u062f \u0627\u0644\u0645\u0637\u0627\u0628\u0642\u0629',
    m_uploadcv:'\u0631\u0641\u0639 \u0627\u0644\u0633\u064a\u0631\u0629 \u0627\u0644\u0630\u0627\u062a\u064a\u0629 (PDF \u0623\u0648 DOCX \u0623\u0648 TXT)', m_fullname:'\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644', m_email:'\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a',
    m_phone:'\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641', m_source:'\u0627\u0644\u0645\u0635\u062f\u0631', m_expyears:'\u0633\u0646\u0648\u0627\u062a \u0627\u0644\u062e\u0628\u0631\u0629', m_curtitle:'\u0627\u0644\u0645\u0633\u0645\u0649 \u0627\u0644\u0648\u0638\u064a\u0641\u064a \u0627\u0644\u062d\u0627\u0644\u064a/\u0627\u0644\u0623\u062e\u064a\u0631',
    m_appliedfor:'\u0627\u0644\u0648\u0638\u064a\u0641\u0629 \u0627\u0644\u0645\u062a\u0642\u062f\u0645 \u0644\u0647\u0627', m_spec:'\u0627\u0644\u062a\u062e\u0635\u0635', m_degree:'\u0627\u0644\u062f\u0631\u062c\u0629 \u0627\u0644\u0639\u0644\u0645\u064a\u0629', m_candcity:'\u0627\u0644\u0645\u062f\u064a\u0646\u0629',
    m_skills:'\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a (\u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0641\u0648\u0627\u0635\u0644)', save_job:'\u062d\u0641\u0638 \u0627\u0644\u0648\u0638\u064a\u0641\u0629', save_cand:'\u062d\u0641\u0638 \u0627\u0644\u0645\u0631\u0634\u062d', save_changes:'\u062d\u0641\u0638 \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a',
    clone_job_h:'\u0627\u0633\u062a\u0646\u0633\u0627\u062e \u0648\u0638\u064a\u0641\u0629', none_opt:'\u2014 \u0628\u062f\u0648\u0646 \u2014', choose_opt:'\u2014 \u0627\u062e\u062a\u0631 \u2014', unset_opt:'\u2014 \u063a\u064a\u0631 \u0645\u062d\u062f\u062f \u2014',
    upload_to_job:'\u0631\u0641\u0639 \u0633\u064a\u0631 \u0630\u0627\u062a\u064a\u0629 \u0644\u0647\u0630\u0647 \u0627\u0644\u0648\u0638\u064a\u0641\u0629', add_one_cand:'+ \u0645\u0631\u0634\u062d \u0648\u0627\u062d\u062f', posted_on:'\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0646\u0634\u0631', card_approved:'\u0645\u0639\u062a\u0645\u062f\u0629', card_not_approved:'\u063a\u064a\u0631 \u0645\u0639\u062a\u0645\u062f\u0629'
  }
};
let LANG = (function(){ try{ const l = localStorage.getItem('tad_lang'); return (l==='ar'||l==='en') ? l : 'en'; }catch(e){ return 'en'; } })();
function t(key){ return (I18N[LANG] && I18N[LANG][key]) || I18N.ar[key] || key; }
// Stage VALUES stay Arabic in the database; only the display translates.
const STAGE_KEY = { '\u0627\u0644\u0641\u0631\u0632':'stage_screening','\u0627\u0644\u0645\u0642\u0627\u0628\u0644\u0629 \u0627\u0644\u0647\u0627\u062a\u0641\u064a\u0629':'stage_phone','\u0627\u0644\u0645\u0642\u0627\u0628\u0644\u0629':'stage_interview','\u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u0648\u0638\u064a\u0641\u064a':'stage_offer','\u062a\u0645 \u0627\u0644\u062a\u0639\u064a\u064a\u0646':'stage_hired','\u0645\u0631\u0641\u0648\u0636':'stage_rejected','\u0645\u0646\u0627\u0633\u0628 \u0644\u0634\u0627\u063a\u0631 \u0622\u062e\u0631':'stage_other' };
function tStage(stage){ return STAGE_KEY[stage] ? t(STAGE_KEY[stage]) : stage; }
function applyLang(l){
  LANG = (l==='ar') ? 'ar' : 'en';
  try{ localStorage.setItem('tad_lang', LANG); }catch(e){}
  document.documentElement.setAttribute('lang', LANG);
  document.documentElement.setAttribute('dir', LANG==='ar' ? 'rtl' : 'ltr');
}

let settingsTab = 'appearance';
async function viewSettings(){
  const isAdmin = CURRENT_USER && CURRENT_USER.isAdmin;
  const tabs = [
    ['appearance', t('tab_appearance')],
    ['security', t('tab_security')],
    ...(isAdmin ? [['users', t('tab_users')], ['audit', t('tab_audit')]] : [])
  ];
  const chipbar = `<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:22px;">
    ${tabs.map(([id,label])=>`<span class="chip sb-cat ${settingsTab===id?'on':''}" data-settab="${id}" style="cursor:pointer;padding:8px 16px;font-size:13px;">${label}</span>`).join('')}
  </div>`;
  const head = `<div class="page-head"><div><h1>${t('h_settings')}</h1>
    <div class="sub">${t('sub_settings').replace('{admin}', isAdmin ? t('sub_settings_admin') : '')}</div></div></div>`;

  if(settingsTab === 'users' && isAdmin)  return head + chipbar + await viewUsers();
  if(settingsTab === 'audit' && isAdmin)  return head + chipbar + await viewAudit();

  if(settingsTab === 'security'){
    return head + chipbar + `
      <div class="detail-section" style="max-width:640px;">
        <h3>${t('sec_2fa')}</h3>
        <div style="font-size:13px;line-height:1.9;margin-bottom:14px;">
          ${CURRENT_USER.totpEnabled
            ? '<strong style="color:var(--green);">' + t('twofa_on') + '</strong>'
            : '<strong style="color:var(--muted);">' + t('twofa_off') + '</strong>'}
        </div>
        ${CURRENT_USER.totpEnabled
          ? '<button class="btn btn-ghost" onclick="openDisable2FA()">' + t('twofa_disable') + '</button>'
          : '<button class="btn btn-primary" onclick="openEnable2FA()">' + t('twofa_enable') + '</button>'}
      </div>
      <div class="detail-section" style="max-width:640px;">
        <h3>${t('sec_password')}</h3>
        <div style="font-size:13px;color:var(--muted);margin-bottom:14px;">${t('pw_hint')}</div>
        <button class="btn btn-ghost" onclick="openChangePassword()">${t('pw_change')}</button>
      </div>`;
  }

  // appearance (default)
  return head + chipbar + `
    <div class="detail-section" style="max-width:640px;">
      <h3>${t('sec_lang')}</h3>
      <div style="font-size:13px;color:var(--muted);margin-bottom:14px;">${t('lang_hint')}</div>
      <div style="display:flex;gap:10px;">
        <button class="btn ${LANG==='en'?'btn-primary':'btn-ghost'}" data-setlang="en" style="min-width:110px;">English</button>
        <button class="btn ${LANG==='ar'?'btn-primary':'btn-ghost'}" data-setlang="ar" style="min-width:110px;">\u0627\u0644\u0639\u0631\u0628\u064a\u0629</button>
      </div>
    </div>
    <div class="detail-section" style="max-width:640px;">
      <h3>${t('sec_appearance')}</h3>
      <div style="font-size:13px;color:var(--muted);margin-bottom:14px;">${t('appearance_hint')}</div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;">
        ${[['aurora', t('theme_aurora'), t('theme_aurora_d')],
           ['dark', t('theme_black'), t('theme_black_d')],
           ['light', t('theme_light'), t('theme_light_d')]].map(([v,label,desc])=>`
          <div style="text-align:center;">
            <button class="btn ${currentTheme()===v?'btn-primary':'btn-ghost'}" data-settheme="${v}" style="min-width:110px;">${label}</button>
            <div style="font-size:10.5px;color:var(--muted);margin-top:5px;">${desc}</div>
          </div>`).join('')}
      </div>
    </div>`;
}

const NAV = [
  {id:'dashboard', label:'\u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645', num:'\u0660\u0660'},
  {id:'pipeline', label:'\u0645\u0633\u0627\u0631 \u0627\u0644\u0627\u0633\u062a\u0642\u0637\u0627\u0628', num:'\u0660\u0661'},
  {id:'assessments', label:'\u0627\u0644\u062a\u0642\u064a\u064a\u0645\u0627\u062a', num:'\u0660\u0662'},
  {id:'jobs', label:'\u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u0634\u0627\u063a\u0631\u0629', num:'\u0660\u0663'},
  {id:'candidates', label:'\u0642\u0627\u0639\u062f\u0629 \u0627\u0644\u0633\u064a\u0631 \u0627\u0644\u0630\u0627\u062a\u064a\u0629', num:'\u0660\u0664'},
  {id:'settings', label:'\u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a', num:'\u0660\u0665'},
];
let currentView = 'dashboard';

function renderNav(){
  // Logout must be findable by EVERYONE, not just whoever knows the
  // sidebar-footer trick \u2014 pinned at the top, above the tabs.
  const ta = document.getElementById('topAccount');
  if(ta){
    if(CURRENT_USER){
      ta.style.display = 'flex';
      const nm = document.getElementById('topAccountName');
      if(nm) nm.textContent = CURRENT_USER.displayName || CURRENT_USER.username;
      const lb = document.getElementById('btnTopLogout');
      if(lb){ lb.onclick = doLogout; lb.textContent = t('logout'); }
    } else {
      ta.style.display = 'none';
    }
  }
  const bn = document.getElementById('brandName'); if(bn) bn.textContent = t('brand_name');
  const bo = document.getElementById('brandOrg'); if(bo) bo.textContent = t('brand_org');
  const el = document.getElementById('navtabs');
  const visible = NAV.filter(n=>!n.adminOnly || (CURRENT_USER && CURRENT_USER.isAdmin));
  el.innerHTML = visible.map(n=>{
    // Counts intentionally NOT shown in the sidebar (too noisy) \u2014
    // each view carries its own stat in its header instead.
    return `<div class="navtab ${currentView===n.id?'active':''}" data-nav="${n.id}" role="button" tabindex="0" aria-label="${t('nav_'+n.id)}">
      ${NAV_ICONS[n.id]||''}<span class="tabnum">${n.num}</span><span>${t('nav_'+n.id)}</span>
    </div>`;
  }).join('');
  el.querySelectorAll('.navtab').forEach(t=>{
    const go = ()=>{ currentView = t.dataset.nav; candOffset = 0; render(); };
    t.onclick = go;
    t.onkeydown = (e)=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); go(); } };
  });
}

function showLoading(){
  const main = document.getElementById('main');
  if(main) main.innerHTML = `<div class="empty" style="margin-top:60px;">
    <div class="display">\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644\u2026</div></div>`;
}

// Views now fetch their own data from the server, so render() is async.
async function render(){
  renderNav();
  const main = document.getElementById('main');
  showLoading();
  try{
    let html = '';
    if(currentView==='dashboard')       html = await viewDashboard();
    else if(currentView==='candidates') html = (candFilterJob!=='\u0627\u0644\u0643\u0644') ? await viewCandidatesMatches() : await viewCandidates();
    else if(currentView==='pipeline')   html = await viewPipeline();
    else if(currentView==='assessments')html = await viewAssessments();
    else if(currentView==='jobs')       html = await viewJobs();
    else if(currentView==='audit')      html = await viewAudit();
    else if(currentView==='users')      html = await viewUsers();
    else if(currentView==='settings')   html = await viewSettings();
    main.innerHTML = html;
    renderNav();
    attachViewHandlers();
  }catch(e){
    console.error('Failed to render view:', e);
    main.innerHTML = `<div class="empty" style="margin-top:60px;">
      <div class="display">\u062a\u0639\u0630\u0651\u0631 \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a</div>
      <div>${esc(e.message)}</div>
      <div style="margin-top:14px;"><button class="btn btn-primary" onclick="render()">\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629</button></div>
    </div>`;
  }
}

/* ---------------------------------------------------------
   VIEW: DASHBOARD
--------------------------------------------------------- */
let dashboardJobFilter = '\u0627\u0644\u0643\u0644';

// KPIs are now computed in SQL by the server. The old client-side
// computeKPIs() is gone \u2014 it required every candidate in memory.
const INSIGHT_COLOR = { warn:'var(--orange)', info:'var(--blue)', good:'var(--green)' };
async function viewDashboard(){
  const [k, insights] = await Promise.all([
    api.kpis({ job: dashboardJobFilter }),
    api.insights()
  ]);

  const insightsHTML = insights.length ? `
  <div class="detail-section" style="margin-top:2px;">
    <h3>\u0631\u0624\u0649 \u0630\u0643\u064a\u0629 \u2014 \u064a\u062d\u0633\u0628\u0647\u0627 \u0627\u0644\u0646\u0638\u0627\u0645 \u0645\u0628\u0627\u0634\u0631\u0629 \u0645\u0646 \u0628\u064a\u0627\u0646\u0627\u062a\u0643</h3>
    <div class="insights">
      ${insights.map((it,i)=>`
        <div class="insight" style="--icolor:${INSIGHT_COLOR[it.severity]||'var(--teal)'};animation-delay:${i*0.05}s;${it.candidateId?'cursor:pointer;':''}" ${it.candidateId?`data-cand="${it.candidateId}"`:''}>
          <span class="ic">${esc(it.title)}</span>
          <span class="iv">${esc(it.body)}</span>
        </div>`).join('')}
    </div>
  </div>` : '';

  return `
  <div class="page-head">
    <div>
      <h1>${t('h_dashboard')}</h1>
      <div class="sub">\u0644\u0645\u062d\u0629 \u0645\u0628\u0627\u0634\u0631\u0629 \u0639\u0646 \u0627\u0644\u0627\u0633\u062a\u0642\u0637\u0627\u0628 \u0648\u0627\u0644\u0645\u0637\u0627\u0628\u0642\u0629 \u0648\u062d\u0627\u0644\u0629 \u0627\u0644\u0645\u0633\u0627\u0631 \u0627\u0644\u0648\u0638\u064a\u0641\u064a.</div>
    </div>
  </div>
  <div class="stats">
    <div class="stat"><div class="accent" style="background:${STAGE_COLOR['\u062a\u0645 \u0627\u0644\u062a\u0631\u0634\u064a\u062d']}"></div><div class="n mono">${k.total}</div><div class="l">\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0645\u0631\u0634\u062d\u064a\u0646</div></div>
    <div class="stat"><div class="accent" style="background:${STAGE_COLOR['\u0627\u0644\u0645\u0642\u0627\u0628\u0644\u0629']}"></div><div class="n mono">${k.inPipe}</div><div class="l">\u0646\u0634\u0637 \u0641\u064a \u0627\u0644\u0645\u0633\u0627\u0631</div></div>
    <div class="stat"><div class="accent" style="background:${STAGE_COLOR['\u062a\u0645 \u0627\u0644\u062a\u0639\u064a\u064a\u0646']}"></div><div class="n mono">${k.hired}</div><div class="l">\u062a\u0645 \u062a\u0639\u064a\u064a\u0646\u0647\u0645</div></div>
    <div class="stat"><div class="accent" style="background:#8b93a1"></div><div class="n mono">${DB.jobs.length}</div><div class="l">${t('vacancies_stat')}</div></div>
  </div>

  ${insightsHTML}

  <div class="detail-section" style="margin-top:6px;">
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:10px;">
      <h3 style="margin:0;">\u0645\u0624\u0634\u0631\u0627\u062a \u0623\u062f\u0627\u0621 \u0627\u0644\u0627\u0633\u062a\u0642\u0637\u0627\u0628</h3>
      <select id="dashboardJobFilter">
        <option value="\u0627\u0644\u0643\u0644" ${dashboardJobFilter==='\u0627\u0644\u0643\u0644'?'selected':''}>${t('all_jobs')}</option>
        ${DB.jobs.map(j=>`<option value="${j.id}" ${dashboardJobFilter===j.id?'selected':''}>${esc(j.title)}</option>`).join('')}
      </select>
    </div>
    <div class="stats" style="grid-template-columns:repeat(3,1fr);">
      <div class="stat"><div class="n mono">${k.timeToHire!==null?k.timeToHire:'\u2014'}</div><div class="l">\u0627\u0644\u0648\u0642\u062a \u0644\u0644\u062a\u0648\u0638\u064a\u0641 (\u0623\u064a\u0627\u0645)</div></div>
      <div class="stat"><div class="n mono">${k.interviewToOfferRatio!==null?k.interviewToOfferRatio+'%':'\u2014'}</div><div class="l">\u0646\u0633\u0628\u0629 \u0627\u0644\u062a\u062d\u0648\u064a\u0644 \u0645\u0646 \u0627\u0644\u0645\u0642\u0627\u0628\u0644\u0629 \u0625\u0644\u0649 \u0627\u0644\u0639\u0631\u0636</div></div>
      <div class="stat"><div class="n mono">${k.offerToJoinRatio!==null?k.offerToJoinRatio+'%':'\u2014'}</div><div class="l">\u0646\u0633\u0628\u0629 \u0627\u0644\u0642\u0628\u0648\u0644 \u0645\u0646 \u0627\u0644\u0639\u0631\u0636 \u0625\u0644\u0649 \u0627\u0644\u0627\u0646\u0636\u0645\u0627\u0645</div></div>
      <div class="stat"><div class="n mono">${k.vacancyFillRate!==null?k.vacancyFillRate+'%':'\u2014'}</div><div class="l">${t('fill_rate')}</div></div>
      <div class="stat"><div class="n mono">${k.jobsFilledApprovedRate!==null?k.jobsFilledApprovedRate+'%':'\u2014'}</div><div class="l">\u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u0645\u0634\u063a\u0648\u0644\u0629 \u00f7 \u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u0645\u0639\u062a\u0645\u062f\u0629</div></div>
      <div class="stat">
        <div class="n mono">${k.vacancyDaysPerTarget!==null?k.vacancyDaysPerTarget:'\u2014'}</div>
        <div class="l">\u0625\u062c\u0645\u0627\u0644\u064a \u0623\u064a\u0627\u0645 \u0627\u0644\u0634\u063a\u0648\u0631 \u00f7 \u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u0645\u0633\u062a\u0647\u062f\u0641\u0629</div>
        <div style="margin-top:8px;display:flex;align-items:center;gap:6px;font-size:11px;color:var(--muted);">
          <span>\u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u0645\u0633\u062a\u0647\u062f\u0641\u0629:</span>
          <input type="number" id="totalJobsTargetedInput" min="0" value="${(DB.settings&&DB.settings.totalJobsTargeted)||0}" style="width:60px;padding:4px 6px;font-size:11px;">
        </div>
      </div>
    </div>
  </div>`;
}

/* ---------------------------------------------------------
   VIEW: CANDIDATES (CV Database)
--------------------------------------------------------- */
let candFilterStage = '\u0627\u0644\u0643\u0644';
let candFilterJob = '\u0627\u0644\u0643\u0644';
let candSearch = '';
let candOffset = 0;
const CAND_PAGE_SIZE = 50;
let candSearchTimer = null;

// Filtering, searching and paging all happen in SQL now. The browser
// only ever holds one page of candidates, so this stays fast no matter
// how many records exist.
async function viewCandidates(){
  const params = { limit: CAND_PAGE_SIZE, offset: candOffset };
  if(candFilterJob !== '\u0627\u0644\u0643\u0644')   params.job = candFilterJob;
  if(candFilterStage !== '\u0627\u0644\u0643\u0644') params.stage = candFilterStage;
  if(candSearch)                 params.q = candSearch;

  const page = await api.candidates(params);
  DB.candidates = page.candidates;
  DB.candidateTotal = page.total;

  const from = page.total === 0 ? 0 : candOffset + 1;
  const to = Math.min(candOffset + CAND_PAGE_SIZE, page.total);
  const hasPrev = candOffset > 0;
  const hasNext = candOffset + CAND_PAGE_SIZE < page.total;

  return `
  <div class="page-head">
    <div><h1>${t('h_candidates')}</h1><div class="sub">${t('sub_candidates')}</div>
    <div class="headstat">${t('stat_cvs')}: ${page.total}</div></div>
    <div style="display:flex;gap:10px;">
      <a class="btn btn-ghost" href="/api/export/candidates.xlsx" style="text-decoration:none;">${t('export_excel')}</a>
      <a class="btn btn-ghost" href="/api/export/resumes.zip" style="text-decoration:none;">${t('export_zip')}</a>
      <button class="btn btn-ghost" id="btnImportCandidates">${t('import_cvs')}</button>
      <button class="btn btn-primary" id="btnAddCandidate">${t('add_candidate')}</button>
    </div>
  </div>
  <div class="toolbar">
    <input type="text" class="searchbox" id="candSearchInput" placeholder="${t('search_ph')}" value="${esc(candSearch)}">
    <select id="candStageFilter">
      <option value="\u0627\u0644\u0643\u0644">${t('all_stages')}</option>
      ${STAGES.map(s=>`<option value="${s}" ${candFilterStage===s?'selected':''}>${tStage(s)}</option>`).join('')}
    </select>
    <select id="candJobFilter">
      <option value="\u0627\u0644\u0643\u0644">${t('all_jobs')}</option>
      ${DB.jobs.map(j=>`<option value="${j.id}" ${candFilterJob===j.id?'selected':''}>${esc(j.title)}</option>`).join('')}
    </select>
  </div>
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;font-size:12.5px;color:var(--muted);">
    <span>${page.total ? `\u0639\u0631\u0636 ${from}\u2013${to} \u0645\u0646 ${page.total}` : ''}</span>
    <span style="display:flex;gap:8px;">
      <button class="btn btn-sm btn-ghost" id="candPrev" ${hasPrev?'':'disabled style="opacity:.4;cursor:default;"'}>\u0627\u0644\u0633\u0627\u0628\u0642</button>
      <button class="btn btn-sm btn-ghost" id="candNext" ${hasNext?'':'disabled style="opacity:.4;cursor:default;"'}>\u0627\u0644\u062a\u0627\u0644\u064a</button>
    </span>
  </div>
  ${page.candidates.length ? `<div class="card-grid">${page.candidates.map(cardHTML).join('')}</div>`
    : emptyState('\u0644\u0627 \u064a\u0648\u062c\u062f \u0645\u0631\u0634\u062d\u0648\u0646 \u0645\u0637\u0627\u0628\u0642\u0648\u0646', '\u062c\u0631\u0651\u0628 \u0645\u0633\u062d \u0627\u0644\u0641\u0644\u0627\u062a\u0631 \u0623\u0648 \u0623\u0636\u0641 \u0645\u0631\u0634\u062d\u064b\u0627 \u062c\u062f\u064a\u062f\u064b\u0627.')}
  `;
}

// Ranked match mode: a job is selected \u2014 every CV in the database
// scored against its JD, highest first, no manual attachment needed.
async function viewCandidatesMatches(){
  const data = await api.jobMatches(candFilterJob);
  // Stage filter + search apply on top of the ranked matches, so the
  // team can e.g. see who best fits the job among "\u0627\u0644\u0645\u0642\u0627\u0628\u0644\u0629 \u0627\u0644\u0647\u0627\u062a\u0641\u064a\u0629" only.
  const q = candSearch.trim().toLowerCase();
  let list = data.matches;
  data.matches.forEach((c,idx)=>{ c._rank = idx+1; });
  if(candFilterStage !== '\u0627\u0644\u0643\u0644') list = list.filter(c=>c.stage===candFilterStage);
  if(q) list = list.filter(c=>
    (c.name||'').toLowerCase().includes(q) ||
    (c.currentTitle||'').toLowerCase().includes(q) ||
    (c.specialization||'').toLowerCase().includes(q) ||
    (c.skills||[]).some(s=>String(s).toLowerCase().includes(q)));
  return `
  <div class="page-head">
    <div><h1>\u0642\u0627\u0639\u062f\u0629 \u0627\u0644\u0633\u064a\u0631 \u0627\u0644\u0630\u0627\u062a\u064a\u0629</h1>
    <div class="sub">\u0645\u0637\u0627\u0628\u0642\u0629 \u0630\u0643\u064a\u0629 \u0645\u0639 \u00ab${esc(data.jobTitle)}\u00bb: \u062a\u064f\u0639\u0631\u0636 \u0627\u0644\u0633\u064a\u0631 \u0628\u0646\u0633\u0628\u0629 \u062a\u0648\u0627\u0641\u0642 ${data.minMatch||40}% \u0641\u0623\u0639\u0644\u0649 \u2014 \u0625\u0636\u0627\u0641\u0629 \u0644\u0645\u0646 \u0631\u0628\u0637\u062a\u0647\u0645 \u0623\u0646\u062a \u0628\u0627\u0644\u0648\u0638\u064a\u0641\u0629 \u0645\u0647\u0645\u0627 \u0643\u0627\u0646\u062a \u0646\u0633\u0628\u062a\u0647\u0645 \u2014 \u0645\u0631\u062a\u0628\u0629 \u0645\u0646 \u0627\u0644\u0623\u0639\u0644\u0649 \u0644\u0644\u0623\u062f\u0646\u0649.</div></div>
    <div style="display:flex;gap:10px;">
      <a class="btn btn-ghost" href="/api/export/candidates.xlsx" style="text-decoration:none;">${t('export_excel')}</a>
      <a class="btn btn-ghost" href="/api/export/resumes.zip?job=${encodeURIComponent(candFilterJob)}&mode=matches${candFilterStage!=='\u0627\u0644\u0643\u0644'?'&stage='+encodeURIComponent(candFilterStage):''}" style="text-decoration:none;">\u062a\u0635\u062f\u064a\u0631 \u0633\u064a\u0631 \u0627\u0644\u0645\u0637\u0627\u0628\u0642\u064a\u0646 (ZIP)</a>
      <button class="btn btn-ghost" id="btnImportCandidates">${t('import_cvs')}</button>
      <button class="btn btn-primary" id="btnAddCandidate">${t('add_candidate')}</button>
    </div>
  </div>
  <div class="toolbar">
    <input type="text" class="searchbox" id="candSearchInput" placeholder="\u0627\u0628\u062d\u062b \u0636\u0645\u0646 \u0646\u062a\u0627\u0626\u062c \u0627\u0644\u0645\u0637\u0627\u0628\u0642\u0629\u2026" value="${esc(candSearch)}">
    <select id="candStageFilter">
      <option value="\u0627\u0644\u0643\u0644">${t('all_stages')}</option>
      ${STAGES.map(s=>`<option value="${s}" ${candFilterStage===s?'selected':''}>${tStage(s)}</option>`).join('')}
    </select>
    <select id="candJobFilter">
      <option value="\u0627\u0644\u0643\u0644">${t('all_jobs')}</option>
      ${DB.jobs.map(j=>`<option value="${j.id}" ${candFilterJob===j.id?'selected':''}>${esc(j.title)}</option>`).join('')}
    </select>
    <button class="btn btn-ghost" id="btnClearMatch">\u0625\u0644\u063a\u0627\u0621 \u0627\u0644\u0645\u0637\u0627\u0628\u0642\u0629</button>
  </div>
  <div style="margin-bottom:14px;font-size:12.5px;color:var(--muted);">
    ${list.length} \u0645\u0646 ${data.matches.length} \u0633\u064a\u0631\u0629${candFilterStage!=='\u0627\u0644\u0643\u0644' ? ` \u00b7 \u0645\u0631\u062d\u0644\u0629: ${candFilterStage}` : ''}
  </div>
  ${list.length ? `<div class="card-grid">${list.map((c,i)=>matchCardHTML(c,i)).join('')}</div>`
    : emptyState('\u0644\u0627 \u0646\u062a\u0627\u0626\u062c \u0636\u0645\u0646 \u0647\u0630\u0627 \u0627\u0644\u0641\u0644\u062a\u0631', '\u062c\u0631\u0651\u0628 \u0645\u0631\u062d\u0644\u0629 \u0623\u062e\u0631\u0649 \u0623\u0648 \u0627\u0645\u0633\u062d \u0627\u0644\u0628\u062d\u062b.')}
  `;
}

function matchCardHTML(c, i){
  const pct = c.matchPercent||0;
  return `<div class="idxcard" style="--stage-color:${STAGE_COLOR[c.stage]||'#8b93a1'}" data-cand="${c.id}">
    <div class="top-row">
      <div>
        <div style="font-size:10.5px;color:var(--muted);font-family:'IBM Plex Mono',monospace;">#${(c._rank||i+1)}</div>
        <div class="name">${esc(c.name)}${c.linkedToJob?' <span style="font-size:10px;background:rgba(25,184,166,0.14);color:var(--teal);border:1px solid rgba(25,184,166,0.35);border-radius:99px;padding:2px 8px;vertical-align:middle;">\u0645\u0631\u062a\u0628\u0637 \u0628\u0627\u0644\u0648\u0638\u064a\u0641\u0629</span>':''}</div>
        ${c.currentTitle ? `<div class="role">${esc(c.currentTitle)}</div>` : ''}
        ${[c.degree,c.specialization,c.city].filter(Boolean).length ? `<div class="role" style="opacity:.75;">${[c.degree,c.specialization,c.city].filter(Boolean).map(esc).join(' \u00b7 ')}</div>` : ''}
      </div>
      <div class="seal" style="background:${scoreColor(pct)}">${pct}%</div>
    </div>
    <div class="skills">${(c.skills||[]).slice(0,4).map(s=>`<span class="chip">${esc(s)}</span>`).join('')}</div>
    <div class="meta-row">
      <span>${c.experienceYears||0} \u0633\u0646\u0629 \u062e\u0628\u0631\u0629 \u00b7 ${esc(c.source||'\u2014')}</span>
      <span class="stagepill" style="background:${STAGE_COLOR[c.stage]||'#8b93a1'}">${tStage(c.stage)}</span>
    </div>
  </div>`;
}

function cardHTML(c, i){
  const job = DB.jobs.find(j=>j.id===c.appliedFor);
  const r = compositeRank(c);
  const tilt = ((i%5)-2)*0.35;
  return `<div class="idxcard" style="--tilt:${tilt}deg;--stage-color:${STAGE_COLOR[c.stage]}" data-cand="${c.id}">
    <div class="top-row">
      <div>
        <div class="name">${esc(c.name)}</div>
        <div class="role">${job?esc(job.title):'\u0644\u0627 \u062a\u0648\u062c\u062f \u0648\u0638\u064a\u0641\u0629 \u0645\u0631\u062a\u0628\u0637\u0629'}</div>
        ${c.currentTitle ? `<div class="role" style="opacity:.75;">${esc(c.currentTitle)}</div>` : ''}
      </div>
    </div>
    <div class="skills">${c.skills.slice(0,4).map(s=>`<span class="chip">${esc(s)}</span>`).join('')}</div>
    ${[c.degree,c.specialization,c.city].filter(Boolean).length ? `<div class="cand-edu">${[c.degree,c.specialization,c.city].filter(Boolean).map(esc).join(' \u00b7 ')}</div>` : ''}
    <div class="meta-row">
      <span>${c.experienceYears||0} \u0633\u0646\u0629 \u062e\u0628\u0631\u0629 \u00b7 ${esc(c.source||'\u2014')}</span>
      <span class="stagepill" style="background:${STAGE_COLOR[c.stage]}">${tStage(c.stage)}</span>
    </div>
  </div>`;
}

function emptyState(title, sub){
  return `<div class="empty"><div class="display">${title}</div><div>${sub}</div></div>`;
}

/* ---------------------------------------------------------
   VIEW: PIPELINE (kanban)
--------------------------------------------------------- */
function daysSince(ts){
  return Math.floor((Date.now()-ts)/86400000);
}
function stageSinceLabel(c){
  const ts = c.stageChangedAt || (c.stageHistory && c.stageHistory.length ? c.stageHistory[c.stageHistory.length-1].at : c.createdAt) || c.createdAt;
  const days = daysSince(ts);
  const dateStr = new Date(ts).toLocaleDateString('ar-EG');
  const since = days<=0 ? '\u0627\u0644\u064a\u0648\u0645' : days===1 ? '\u0645\u0646\u0630 \u064a\u0648\u0645' : `\u0645\u0646\u0630 ${days} \u064a\u0648\u0645\u064b\u0627`;
  return `${since} \u00b7 ${dateStr}`;
}

let pipelineJobFilter = '\u0627\u0644\u0643\u0644';

async function viewPipeline(){
  const cards = await api.pipeline({ job: pipelineJobFilter });
  const filterJob = pipelineJobFilter!=='\u0627\u0644\u0643\u0644' ? DB.jobs.find(j=>j.id===pipelineJobFilter) : null;

  return `
  <div class="page-head">
    <div><h1>${t('h_pipeline')}</h1><div class="sub">${filterJob ? `"${esc(filterJob.title)}": ${LANG==='ar'?'\u0627\u0644\u0645\u0631\u062a\u0628\u0637\u0648\u0646 \u0628\u0647\u0627 + \u0643\u0644 \u0645\u0646 \u062a\u062c\u0627\u0648\u0632\u062a \u0645\u0637\u0627\u0628\u0642\u062a\u0647 40%.':'linked candidates + everyone matching at 40%+.'}` : t('sub_pipeline')}</div></div>
  </div>
  <div class="toolbar">
    <select id="pipelineJobFilter">
      <option value="\u0627\u0644\u0643\u0644" ${pipelineJobFilter==='\u0627\u0644\u0643\u0644'?'selected':''}>${t('all_jobs')}</option>
      ${DB.jobs.map(j=>`<option value="${j.id}" ${pipelineJobFilter===j.id?'selected':''}>${esc(j.title)}</option>`).join('')}
    </select>
  </div>
  <div class="kanban">
    ${STAGES.map(stage=>{
      const items = cards.filter(c=>c.stage===stage);
      return `<div class="kcol">
        <div class="kcol-head">
          <span class="t" style="color:${STAGE_COLOR[stage]}">${tStage(stage)}</span>
          <span class="mono" style="font-size:11px;color:var(--muted)">${items.length}</span>
        </div>
        <div class="kcol-body" data-stage="${stage}">
          ${items.map(c=>`<div class="kcard" draggable="true" data-cand="${c.id}">
              <div class="kn">${esc(c.name)}</div>
              <div class="kr">${c.jobTitle?esc(c.jobTitle):'\u2014'}</div>
              ${c.matchPct?`<div class="kmatch">\u0645\u0637\u0627\u0628\u0642\u0629 ${c.matchPct}%</div>`:''}
              <div class="kd">${stageSinceLabel({stageChangedAt:c.stageChangedAt})}</div>
              <select class="kstage" data-kcand="${c.id}" title="\u0646\u0642\u0644 \u0625\u0644\u0649 \u0645\u0631\u062d\u0644\u0629">
                ${STAGES.map(s=>`<option value="${s}" ${s===stage?'selected':''}>${tStage(s)}</option>`).join('')}
              </select>
            </div>`).join('')}
        </div>
      </div>`;
    }).join('')}
  </div>`;
}

function attachDragHandlers(){
  document.querySelectorAll('.kcard').forEach(card=>{
    card.addEventListener('dragstart', e=>{
      card.classList.add('dragging');
      e.dataTransfer.setData('text/plain', card.dataset.cand);
    });
    card.addEventListener('dragend', ()=> card.classList.remove('dragging'));
    card.addEventListener('click', (e)=>{
      if(e.target.closest && e.target.closest('.kstage')) return;
      openDetail(card.dataset.cand);
    });
  });
  document.querySelectorAll('.kstage').forEach(sel=>{
    sel.addEventListener('click', e=> e.stopPropagation());
    sel.addEventListener('change', async (e)=>{
      e.stopPropagation();
      // One stage per candidate in the data model: setting the new
      // stage inherently removes them from the previous column.
      await mutate(()=>api.setStage(sel.dataset.kcand, sel.value));
      render();
    });
  });
  document.querySelectorAll('.kcol-body').forEach(col=>{
    col.addEventListener('dragover', e=>{ e.preventDefault(); col.classList.add('dragover'); });
    col.addEventListener('dragleave', ()=> col.classList.remove('dragover'));
    col.addEventListener('drop', e=>{
      e.preventDefault();
      col.classList.remove('dragover');
      const id = e.dataTransfer.getData('text/plain');
      if(id){
        // The server records the stage change and its history row, and
        // remembers the previous stage when entering the alt pool.
        mutate(()=>api.setStage(id, col.dataset.stage)).then(()=>render());
      }
    });
  });
}

/* ---------------------------------------------------------
   VIEW: ASSESSMENTS
--------------------------------------------------------- */
let assessJobFilter = '\u0627\u0644\u0643\u0644';

async function viewAssessments(){
  // Rankings and the alt-vacancy pool are both computed server-side.
  const [rows, ranked, altPage] = await Promise.all([
    api.assessments({ job: assessJobFilter }),
    api.rankings({ job: assessJobFilter }),
    api.candidates({ stage: ALT_STAGE, limit: 200,
                     ...(assessJobFilter!=='\u0627\u0644\u0643\u0644' ? {altJob: assessJobFilter} : {}) })
  ]);
  const altCandidates = altPage.candidates;

  return `
  <div class="page-head">
    <div><h1>${t('h_assessments')}</h1><div class="sub">${t('sub_assessments').replace('{max}', ASSESSMENT_MAX)}</div></div>
    <button class="btn btn-primary" id="btnAddAssessment">${t('add_assessment')}</button>
  </div>
  <div class="toolbar">
    <select id="assessJobFilter">
      <option value="\u0627\u0644\u0643\u0644" ${assessJobFilter==='\u0627\u0644\u0643\u0644'?'selected':''}>${t('all_jobs')}</option>
      ${DB.jobs.map(j=>`<option value="${j.id}" ${assessJobFilter===j.id?'selected':''}>${esc(j.title)}</option>`).join('')}
    </select>
  </div>

  <div class="detail-section" style="margin-top:0;">
    <h3>\u0623\u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u0634\u062d\u064a\u0646 \u062a\u0642\u064a\u064a\u0645\u064b\u0627</h3>
    ${ranked.length ? `<table><thead><tr><th>\u0627\u0644\u0627\u0633\u0645</th><th>\u0627\u0644\u0648\u0638\u064a\u0641\u0629 \u0627\u0644\u0645\u062a\u0642\u062f\u0645 \u0644\u0647\u0627</th><th>\u0627\u0644\u0645\u0631\u062d\u0644\u0629</th><th>\u0623\u0639\u0644\u0649 \u062f\u0631\u062c\u0629</th><th>\u0645\u062a\u0648\u0633\u0637 \u0627\u0644\u062f\u0631\u062c\u0627\u062a</th><th>\u0639\u062f\u062f \u0627\u0644\u062a\u0642\u064a\u064a\u0645\u0627\u062a</th><th></th></tr></thead><tbody>
      ${ranked.map(r=>`<tr>
          <td class="rowlink" data-cand="${r.id}" style="cursor:pointer"><strong>${esc(r.name)}</strong></td>
          <td>${r.jobTitle?esc(r.jobTitle):'\u2014'}</td>
          <td><span class="stagepill" style="background:${STAGE_COLOR[r.stage]}">${tStage(r.stage)}</span></td>
          <td class="scoreband" style="color:${assessmentScoreColor(r.highest)}">${r.highest}/${ASSESSMENT_MAX}</td>
          <td class="scoreband" style="color:${assessmentScoreColor(r.avg)}">${r.avg}/${ASSESSMENT_MAX}</td>
          <td class="mono" style="font-size:11px;color:${r.count<3?'var(--rose)':'var(--muted)'}">${r.count}${r.count<3?' (\u0623\u0642\u0644 \u0645\u0646 3 \u0645\u0648\u0635\u0649 \u0628\u0647\u0627)':''}</td>
          <td><span class="btn btn-sm btn-ghost" data-downloadcv="${r.id}">PDF</span></td>
        </tr>`).join('')}
    </tbody></table>` : emptyState('\u0644\u0627 \u062a\u0648\u062c\u062f \u062a\u0642\u064a\u064a\u0645\u0627\u062a \u0628\u0639\u062f', '\u0633\u062c\u0651\u0644 \u062a\u0642\u064a\u064a\u0645\u064b\u0627 \u0644\u0645\u0631\u0634\u062d \u0644\u0639\u0631\u0636\u0647 \u0647\u0646\u0627.')}
  </div>

  <div class="detail-section">
    <h3>${t('alt_pool')}</h3>
    <div style="font-size:12px;color:var(--muted);margin-bottom:10px;">\u0645\u0631\u0634\u062d\u0648\u0646 \u0641\u064a \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631 \u2014 \u0644\u0645 \u064a\u0643\u0648\u0646\u0648\u0627 \u0627\u0644\u062e\u064a\u0627\u0631 \u0627\u0644\u0623\u0648\u0644 \u0644\u0648\u0638\u064a\u0641\u062a\u0647\u0645 \u0627\u0644\u0623\u0635\u0644\u064a\u0629\u060c \u0644\u0643\u0646\u0647\u0645 \u0645\u062d\u0641\u0648\u0638\u0648\u0646 \u0644\u0644\u0631\u062c\u0648\u0639 \u0625\u0644\u064a\u0647\u0645 \u0639\u0646\u062f \u0627\u0644\u062d\u0627\u062c\u0629. \u0627\u062e\u062a\u0631 \u0648\u0638\u064a\u0641\u0629 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0623\u0639\u0644\u0627\u0647 \u0644\u0639\u0631\u0636 \u0645\u0646 \u0631\u064f\u0634\u0650\u0651\u062d \u0644\u0647\u0627 \u062a\u062d\u062f\u064a\u062f\u064b\u0627.</div>
    ${altCandidates.length ? `<table><thead><tr><th>\u0627\u0644\u0627\u0633\u0645</th><th>\u0627\u0644\u0648\u0638\u064a\u0641\u0629 \u0627\u0644\u0623\u0635\u0644\u064a\u0629</th><th>\u0627\u0644\u0648\u0638\u064a\u0641\u0629 \u0627\u0644\u0628\u062f\u064a\u0644\u0629 \u0627\u0644\u0645\u0642\u062a\u0631\u062d\u0629</th><th>\u0623\u0639\u0644\u0649 \u062f\u0631\u062c\u0629</th><th></th></tr></thead><tbody>
      ${altCandidates.map(c=>{
        const origJob = DB.jobs.find(j=>j.id===c.appliedFor);
        const altJob = DB.jobs.find(j=>j.id===c.alternativeJobId);
        return `<tr>
          <td class="rowlink" data-cand="${c.id}" style="cursor:pointer"><strong>${esc(c.name)}</strong></td>
          <td>${origJob?esc(origJob.title):'\u2014'}</td>
          <td>${altJob?esc(altJob.title):'<span style="color:var(--muted)">\u0644\u0645 \u062a\u062d\u062f\u062f \u0628\u0639\u062f</span>'}</td>
          <td class="scoreband" style="color:${c.assessMax!==null?assessmentScoreColor(c.assessMax):'var(--muted)'}">${c.assessMax!==null?c.assessMax+'/'+ASSESSMENT_MAX:'\u2014'}</td>
          <td><span class="btn btn-sm btn-ghost" data-downloadcv="${c.id}">PDF</span></td>
        </tr>`;
      }).join('')}
    </tbody></table>` : emptyState(t('alt_empty'), t('alt_empty_hint'))}
  </div>

  <div class="detail-section">
    <h3>\u0633\u062c\u0644 \u0627\u0644\u062a\u0642\u064a\u064a\u0645\u0627\u062a</h3>
    ${rows.length ? `<table><thead><tr><th>\u0627\u0644\u0645\u0631\u0634\u062d</th><th>\u0627\u0644\u0646\u0648\u0639</th><th>\u0627\u0644\u062f\u0631\u062c\u0629</th><th>\u0645\u0644\u0641 \u0627\u0644\u062a\u0642\u064a\u064a\u0645</th><th>\u0627\u0644\u062a\u0627\u0631\u064a\u062e</th><th></th></tr></thead><tbody>
      ${rows.map(a=>`<tr>
          <td><strong>${esc(a.candidateName||'\u063a\u064a\u0631 \u0645\u0639\u0631\u0648\u0641')}</strong></td>
          <td>${esc(a.type)}</td>
          <td class="scoreband" style="color:${assessmentScoreColor(a.score)}">${a.score}/${ASSESSMENT_MAX}</td>
          <td>${a.hasFile?`<span class="btn btn-sm btn-ghost" data-dlassess="${a.id}">\u062a\u0646\u0632\u064a\u0644</span>`:'<span style="color:var(--muted);font-size:12px;">\u2014</span>'}</td>
          <td class="mono" style="font-size:11px;color:var(--muted)">${new Date(a.date).toLocaleDateString('ar-EG')}</td>
          <td><span class="btn btn-sm btn-danger" data-delassess="${a.id}">\u062d\u0630\u0641</span></td>
        </tr>`).join('')}
    </tbody></table>` : emptyState('\u0644\u0627 \u062a\u0648\u062c\u062f \u062a\u0642\u064a\u064a\u0645\u0627\u062a \u0645\u0633\u062c\u0644\u0629', '\u0633\u062c\u0651\u0644 \u0623\u0648\u0644 \u062a\u0642\u064a\u064a\u0645 \u0644\u0645\u0631\u0634\u062d.')}
  </div>
  `;
}

/* ---------------------------------------------------------
   VIEW: JOBS
--------------------------------------------------------- */
async function viewJobs(){
  await refreshJobs();   // counts come from the server
  return `
  <div class="page-head">
    <div><h1>${t('h_jobs')}</h1><div class="sub">${t('sub_jobs')}</div>
    <div class="headstat">${t('stat_jobs')}: ${DB.jobs.length}</div></div>
    <button class="btn btn-primary" id="btnAddJob">${t('add_job')}</button>
  </div>
  ${DB.jobs.length ? `<div class="card-grid">${DB.jobs.map(j=>{
    const n = j.candidateCount || 0;
    const need = j.headcount || 1;
    const filled = j.hiredCount || 0;
    return `<div class="idxcard" style="--stage-color:#3fa796">
      <div class="top-row">
        <div>
          <div class="name">${esc(j.title)}</div>
          <div class="role">${esc(j.department)} \u00b7 ${esc(j.seniority)}</div>
        </div>
        <div class="seal" style="background:#3fa796;font-size:11px;">${n}</div>
      </div>
      <div class="skills">
        ${(j.requiredSkills||[]).map(s=>`<span class="chip">${esc(s)}</span>`).join('')}
        <span class="chip ar" style="background:${j.approved!==false?'rgba(20,149,138,0.15)':'rgba(193,88,95,0.15)'};color:${j.approved!==false?'#0e5f58':'#8a2f34'};">${j.approved!==false?t('card_approved'):t('card_not_approved')}</span>
      </div>
      <div class="meta-row"><span>${esc((j.description||'').slice(0,60))}${j.description&&j.description.length>60?'\u2026':''}</span><span class="mono">${t('vac_count')} ${filled}/${need}</span></div>
      ${j.postDate ? `<div class="meta-row" style="border-top:none;padding-top:0;"><span>${t('posted_on')}: ${esc(j.postDate)}</span></div>` : ''}
      <div style="display:flex;gap:8px;margin-top:12px;">
        <button class="btn btn-sm btn-primary" style="flex:1;" data-uploadjob="${j.id}">${t('upload_to_job')}</button>
        <button class="btn btn-sm btn-ghost" data-addonejob="${j.id}">${t('add_one_cand')}</button>
      </div>
      <div style="text-align:left;margin-top:8px;">
        <span class="btn btn-sm btn-ghost" data-clonejob="${j.id}" style="padding:4px 10px;">${t('clone')}</span>
        <span class="btn btn-sm btn-danger" data-deljob="${j.id}" style="padding:4px 10px;">${t('del_job')}</span>
      </div>
    </div>`;
  }).join('')}</div>` : emptyState('\u0644\u0627 \u062a\u0648\u062c\u062f \u0648\u0638\u0627\u0626\u0641 \u0645\u062d\u062f\u062f\u0629 \u0628\u0639\u062f', '\u0623\u0636\u0641 \u0648\u0638\u064a\u0641\u0629 \u0644\u0628\u062f\u0621 \u0645\u0637\u0627\u0628\u0642\u0629 \u0627\u0644\u0645\u0631\u0634\u062d\u064a\u0646 \u0645\u0639\u0647\u0627.')}
  `;
}

/* ---------------------------------------------------------
   VIEW: USERS (admin only)
--------------------------------------------------------- */
async function viewUsers(){
  const users = await api.users();
  return `
  <div class="page-head">
    <div><h1>\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u0648\u0646</h1><div class="sub">\u062d\u0633\u0627\u0628\u0627\u062a \u0627\u0644\u062f\u062e\u0648\u0644 \u0644\u0644\u0645\u0646\u0635\u0629. \u0643\u0644 \u0645\u0633\u062a\u062e\u062f\u0645 \u064a\u063a\u064a\u0651\u0631 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631\u0647 \u0628\u0646\u0641\u0633\u0647 \u0645\u0646 \u062d\u0633\u0627\u0628\u0647 \u2014 \u0648\u0644\u0627 \u064a\u0645\u0644\u0643 \u0623\u062d\u062f \u062a\u063a\u064a\u064a\u0631\u0647\u0627 \u0639\u0646\u0647. \u0643\u0644 \u062a\u063a\u064a\u064a\u0631 \u064a\u0633\u062c\u064e\u0651\u0644 \u0641\u064a \u0633\u062c\u0644 \u0627\u0644\u062a\u062f\u0642\u064a\u0642.</div></div>
    <button class="btn btn-primary" id="btnAddUser">+ \u0625\u0636\u0627\u0641\u0629 \u0645\u0633\u062a\u062e\u062f\u0645</button>
  </div>
  <table><thead><tr><th>\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645</th><th>\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0638\u0627\u0647\u0631</th><th>\u0627\u0644\u0635\u0644\u0627\u062d\u064a\u0629</th><th>\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0625\u0646\u0634\u0627\u0621</th><th>\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a</th><th></th></tr></thead><tbody>
    ${users.map(u=>`<tr>
      <td class="mono" style="font-size:12px;">${esc(u.username)}</td>
      <td><strong>${esc(u.displayName)}</strong></td>
      <td>${u.isAdmin ? '<span class="chip ar" style="background:rgba(232,185,62,0.15);color:#e8b93e;border-color:rgba(232,185,62,0.4);">\u0645\u0634\u0631\u0641</span>' : '<span class="chip ar">\u0645\u0633\u062a\u062e\u062f\u0645</span>'}</td>
      <td class="mono" style="font-size:11px;color:var(--muted)">${new Date(u.createdAt).toLocaleDateString('ar-EG')}</td>
      <td class="mono" style="font-size:11px;direction:ltr;text-align:right;color:var(--muted)">${esc(u.email||'\u2014')}</td>
      <td style="white-space:nowrap;">${CURRENT_USER && u.username===CURRENT_USER.username ? '<span style="font-size:11px;color:var(--muted)">\u0623\u0646\u062a</span>' : `<span class="btn btn-sm btn-danger" data-deluser="${u.id}">\u062d\u0630\u0641</span>`}</td>
    </tr>`).join('')}
  </tbody></table>`;
}

function openAddUser(){
  openModal(`
    <div class="modal-head"><h2>\u0625\u0636\u0627\u0641\u0629 \u0645\u0633\u062a\u062e\u062f\u0645</h2><span class="xbtn" onclick="closeModal()">\u00d7</span></div>
    <div class="field-row">
      <div class="field"><label>\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 (\u0644\u0627\u062a\u064a\u0646\u064a\u060c \u0644\u0644\u062f\u062e\u0648\u0644)</label><input type="text" id="nuUser" style="direction:ltr;text-align:left;" placeholder="sara.k"></div>
      <div class="field"><label>\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0638\u0627\u0647\u0631 (\u064a\u0638\u0647\u0631 \u0641\u064a \u0633\u062c\u0644 \u0627\u0644\u062a\u062f\u0642\u064a\u0642)</label><input type="text" id="nuName" placeholder="\u0633\u0627\u0631\u0629 \u0627\u0644\u062e\u0627\u0644\u062f"></div>
    </div>
    <div class="field"><label>\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a (\u0627\u062e\u062a\u064a\u0627\u0631\u064a \u2014 \u064a\u064f\u0633\u062a\u062e\u062f\u0645 \u0644\u0627\u0633\u062a\u0639\u0627\u062f\u0629 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631)</label><input type="email" id="nuEmail" style="direction:ltr;text-align:left;" placeholder="name@kacst.gov.sa"></div>
    <div class="field"><label>\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u0645\u0624\u0642\u062a\u0629 (8 \u0623\u062d\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u2014 \u0648\u064a\u064f\u0646\u0635\u062d \u0628\u062a\u063a\u064a\u064a\u0631\u0647\u0627 \u0628\u0639\u062f \u0623\u0648\u0644 \u062f\u062e\u0648\u0644)</label><input type="text" id="nuPass" style="direction:ltr;text-align:left;"></div>
    <div class="field"><label style="display:flex;align-items:center;gap:8px;cursor:pointer;"><input type="checkbox" id="nuAdmin" style="width:auto;"> \u0635\u0644\u0627\u062d\u064a\u0629 \u0645\u0634\u0631\u0641 (\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646)</label></div>
    <div id="nuErr" style="color:var(--rose);font-size:12px;min-height:18px;"></div>
    <div class="modal-actions"><button class="btn btn-primary" id="nuSave">\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062d\u0633\u0627\u0628</button>
    <button class="btn btn-ghost" onclick="closeModal()">\u0625\u0644\u063a\u0627\u0621</button></div>`);
  document.getElementById('nuSave').onclick = async ()=>{
    const err = document.getElementById('nuErr');
    try{
      await mutate(()=>api.createUser({
        username: document.getElementById('nuUser').value.trim(),
        displayName: document.getElementById('nuName').value.trim(),
        email: document.getElementById('nuEmail').value.trim(),
        password: document.getElementById('nuPass').value,
        isAdmin: document.getElementById('nuAdmin').checked
      }));
      closeModal(); render();
    }catch(e){ err.textContent = e.message; }
  };
}

/* ---------------------------------------------------------
   LOGIN + ACCOUNT
--------------------------------------------------------- */
// Public landing shown before sign-in: KACST vision, mission and
// focus sectors, with the sign-in action at the BOTTOM of the page.
// All copy lives in LANDING below \u2014 edit there to match the exact
// internal wording if KACST communications provide it.
const LANDING = {
  org: '\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0644\u0643 \u0639\u0628\u062f\u0627\u0644\u0639\u0632\u064a\u0632 \u0644\u0644\u0639\u0644\u0648\u0645 \u0648\u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u2014 \u0643\u0627\u0643\u0633\u062a',
  tag: '\u0627\u0644\u0645\u062e\u062a\u0628\u0631 \u0627\u0644\u0648\u0637\u0646\u064a \u0648\u0648\u0627\u062d\u0627\u062a \u0627\u0644\u0627\u0628\u062a\u0643\u0627\u0631 \u0641\u064a \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629',
  vision: '\u0627\u0644\u0631\u064a\u0627\u062f\u0629 \u0627\u0644\u0639\u0627\u0644\u0645\u064a\u0629 \u0641\u064a \u0627\u0644\u0628\u062d\u062b \u0648\u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u0644\u0627\u0628\u062a\u0643\u0627\u0631\u061b \u0628\u0645\u0627 \u064a\u0639\u0632\u0632 \u062a\u0646\u0627\u0641\u0633\u064a\u0629 \u0627\u0644\u0645\u0645\u0644\u0643\u0629\u060c \u0648\u064a\u0628\u0646\u064a \u0627\u0642\u062a\u0635\u0627\u062f\u064b\u0627 \u0645\u0639\u0631\u0641\u064a\u064b\u0627 \u0645\u0632\u062f\u0647\u0631\u064b\u0627 \u064a\u062a\u0645\u0627\u0634\u0649 \u0645\u0639 \u0645\u0633\u062a\u0647\u062f\u0641\u0627\u062a \u0631\u0624\u064a\u0629 \u0627\u0644\u0645\u0645\u0644\u0643\u0629 2030.',
  mission: '\u0628\u0648\u0635\u0641\u0647\u0627 \u0627\u0644\u0645\u062e\u062a\u0628\u0631 \u0627\u0644\u0648\u0637\u0646\u064a \u0648\u0648\u0627\u062d\u0627\u062a \u0627\u0644\u0627\u0628\u062a\u0643\u0627\u0631\u060c \u062a\u0642\u0648\u062f \u0643\u0627\u0643\u0633\u062a \u0627\u0644\u0628\u062d\u062b \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u064a \u0648\u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u062a\u0642\u0646\u064a \u0648\u0641\u0642 \u0627\u0644\u0623\u0648\u0644\u0648\u064a\u0627\u062a \u0627\u0644\u0648\u0637\u0646\u064a\u0629\u060c \u0648\u062a\u062d\u0648\u0651\u0644 \u0645\u062e\u0631\u062c\u0627\u062a \u0627\u0644\u0645\u0639\u0631\u0641\u0629 \u0625\u0644\u0649 \u0645\u0646\u062a\u062c\u0627\u062a \u0648\u062e\u062f\u0645\u0627\u062a \u0627\u0628\u062a\u0643\u0627\u0631\u064a\u0629 \u0630\u0627\u062a \u0642\u064a\u0645\u0629 \u0645\u0636\u0627\u0641\u0629\u060c \u0648\u062a\u0645\u0643\u0651\u0646 \u0631\u0648\u0627\u062f \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0648\u0627\u0644\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0646\u0627\u0634\u0626\u0629 \u0641\u064a \u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0639\u0645\u064a\u0642\u0629\u060c \u0648\u062a\u0624\u062f\u064a \u062f\u0648\u0631 \u0627\u0644\u062c\u0647\u0629 \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u0645\u0631\u062c\u0639\u064a\u0629 \u0644\u0644\u062c\u0647\u0627\u062a \u0627\u0644\u062d\u0643\u0648\u0645\u064a\u0629 \u0648\u0627\u0644\u0642\u0637\u0627\u0639 \u0627\u0644\u062e\u0627\u0635.',
  sectors: [
    { name:'\u0627\u0644\u0635\u062d\u0629', color:'var(--rose)', hex:0xe0636c, model:'knot',
      desc:'\u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u062d\u064a\u0648\u064a\u0629 \u0648\u0627\u0644\u062d\u0644\u0648\u0644 \u0627\u0644\u0635\u062d\u064a\u0629 \u0627\u0644\u0645\u062a\u0642\u062f\u0645\u0629 \u0644\u062c\u0648\u062f\u0629 \u062d\u064a\u0627\u0629 \u0623\u0641\u0636\u0644 \u0644\u0644\u0625\u0646\u0633\u0627\u0646.',
      vision:'\u0635\u062d\u0629 \u0625\u0646\u0633\u0627\u0646 \u0623\u0641\u0636\u0644 \u0628\u0639\u0644\u0648\u0645 \u0648\u062a\u0642\u0646\u064a\u0627\u062a \u0633\u0639\u0648\u062f\u064a\u0629 \u0631\u0627\u0626\u062f\u0629.',
      mission:'\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u062d\u064a\u0648\u064a\u0629 \u0648\u0627\u0644\u0623\u062f\u0648\u064a\u0629 \u0648\u0627\u0644\u0644\u0642\u0627\u062d\u0627\u062a \u0648\u0627\u0644\u0623\u062c\u0647\u0632\u0629 \u0627\u0644\u0637\u0628\u064a\u0629\u060c \u0648\u062a\u0648\u0637\u064a\u0646 \u0627\u0644\u0635\u0646\u0627\u0639\u0627\u062a \u0627\u0644\u0635\u062d\u064a\u0629 \u0628\u0627\u0644\u0634\u0631\u0627\u0643\u0629 \u0645\u0639 \u0627\u0644\u0642\u0637\u0627\u0639\u064a\u0646 \u0627\u0644\u062d\u0643\u0648\u0645\u064a \u0648\u0627\u0644\u062e\u0627\u0635.',
      pillars:[
        {t:'\u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u062d\u064a\u0648\u064a\u0629 \u0648\u0627\u0644\u062c\u064a\u0646\u0648\u0645', d:'\u0623\u0628\u062d\u0627\u062b \u0627\u0644\u062c\u064a\u0646\u0648\u0645 \u0648\u0627\u0644\u0639\u0644\u0627\u062c\u0627\u062a \u0627\u0644\u062d\u064a\u0648\u064a\u0629 \u0644\u0644\u0623\u0645\u0631\u0627\u0636 \u0630\u0627\u062a \u0627\u0644\u0623\u0648\u0644\u0648\u064a\u0629 \u0627\u0644\u0648\u0637\u0646\u064a\u0629.'},
        {t:'\u0627\u0644\u0623\u062f\u0648\u064a\u0629 \u0648\u0627\u0644\u0644\u0642\u0627\u062d\u0627\u062a', d:'\u062a\u0637\u0648\u064a\u0631 \u0648\u062a\u0648\u0637\u064a\u0646 \u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0623\u062f\u0648\u064a\u0629 \u0648\u0627\u0644\u0644\u0642\u0627\u062d\u0627\u062a \u0648\u0627\u0644\u0645\u0633\u062a\u062d\u0636\u0631\u0627\u062a \u0627\u0644\u062d\u064a\u0648\u064a\u0629.'},
        {t:'\u0627\u0644\u0623\u062c\u0647\u0632\u0629 \u0648\u0627\u0644\u062d\u0644\u0648\u0644 \u0627\u0644\u0637\u0628\u064a\u0629', d:'\u062a\u0642\u0646\u064a\u0627\u062a \u062a\u0634\u062e\u064a\u0635\u064a\u0629 \u0648\u0639\u0644\u0627\u062c\u064a\u0629 \u0645\u062a\u0642\u062f\u0645\u0629 \u0628\u0634\u0631\u0627\u0643\u0627\u062a \u0645\u0639 \u0627\u0644\u0645\u0646\u0638\u0648\u0645\u0629 \u0627\u0644\u0635\u062d\u064a\u0629.'}
      ],
      outcomes:['\u0639\u0644\u0627\u062c\u0627\u062a \u0648\u062d\u0644\u0648\u0644 \u0635\u062d\u064a\u0629 \u0645\u0648\u0637\u0651\u0646\u0629','\u0634\u0631\u0627\u0643\u0627\u062a \u0628\u062d\u062b\u064a\u0629 \u0645\u0639 \u0627\u0644\u0645\u0646\u0638\u0648\u0645\u0629 \u0627\u0644\u0635\u062d\u064a\u0629','\u0634\u0631\u0643\u0627\u062a \u0646\u0627\u0634\u0626\u0629 \u0641\u064a \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u062d\u064a\u0648\u064a\u0629'],
      icon:'<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.2-7-9.3C5 7.6 7.2 6 9.3 6c1.2 0 2.1.5 2.7 1.3C12.6 6.5 13.5 6 14.7 6 16.8 6 19 7.6 19 10.7 19 15.8 12 20 12 20z"/><path d="M8 12h2.2l1-1.8 1.6 3.4 1-1.6H16"/></svg>' },
    { name:'\u0627\u0644\u0628\u064a\u0626\u0629 \u0648\u0627\u0644\u0627\u0633\u062a\u062f\u0627\u0645\u0629', color:'var(--green)', hex:0x22c07a, model:'planet',
      desc:'\u062d\u0644\u0648\u0644 \u0627\u0644\u0645\u064a\u0627\u0647 \u0648\u0627\u0644\u0628\u064a\u0626\u0629 \u0648\u0627\u0644\u0632\u0631\u0627\u0639\u0629 \u0644\u0645\u0648\u0627\u062c\u0647\u0629 \u062a\u062d\u062f\u064a\u0627\u062a \u0627\u0644\u0645\u0646\u0627\u062e \u0648\u062a\u0623\u0645\u064a\u0646 \u0627\u0644\u0645\u0648\u0627\u0631\u062f.',
      vision:'\u0628\u064a\u0626\u0629 \u0645\u0633\u062a\u062f\u0627\u0645\u0629 \u0648\u0645\u0648\u0627\u0631\u062f \u0645\u0624\u0645\u0651\u0646\u0629 \u0644\u0644\u0623\u062c\u064a\u0627\u0644 \u0627\u0644\u0642\u0627\u062f\u0645\u0629.',
      mission:'\u0627\u0628\u062a\u0643\u0627\u0631 \u062d\u0644\u0648\u0644 \u0627\u0644\u0645\u064a\u0627\u0647 \u0648\u0627\u0644\u0632\u0631\u0627\u0639\u0629 \u0648\u0627\u0644\u0628\u064a\u0626\u0629\u060c \u0648\u0645\u0648\u0627\u062c\u0647\u0629 \u0627\u0644\u062a\u062d\u062f\u064a\u0627\u062a \u0627\u0644\u0645\u0646\u0627\u062e\u064a\u0629 \u0628\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0627\u0633\u062a\u0634\u0639\u0627\u0631 \u0648\u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629 \u0648\u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u0645\u062a\u0642\u062f\u0645\u0629.',
      pillars:[
        {t:'\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0645\u064a\u0627\u0647', d:'\u0627\u0644\u062a\u062d\u0644\u064a\u0629 \u0648\u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629 \u0648\u0643\u0641\u0627\u0621\u0629 \u0627\u0644\u0627\u0633\u062a\u0647\u0644\u0627\u0643 \u0644\u0645\u0648\u0627\u062c\u0647\u0629 \u062a\u062d\u062f\u064a \u0634\u062d \u0627\u0644\u0645\u064a\u0627\u0647.'},
        {t:'\u0627\u0644\u0628\u064a\u0626\u0629 \u0648\u0627\u0644\u0645\u0646\u0627\u062e', d:'\u0627\u0644\u0631\u0635\u062f \u0627\u0644\u0628\u064a\u0626\u064a \u0648\u0627\u0644\u0646\u0645\u0630\u062c\u0629 \u0627\u0644\u0645\u0646\u0627\u062e\u064a\u0629 \u0648\u062d\u0644\u0648\u0644 \u062e\u0641\u0636 \u0627\u0644\u0627\u0646\u0628\u0639\u0627\u062b\u0627\u062a.'},
        {t:'\u0627\u0644\u0632\u0631\u0627\u0639\u0629 \u0648\u0627\u0644\u0623\u0645\u0646 \u0627\u0644\u063a\u0630\u0627\u0626\u064a', d:'\u0627\u0644\u0632\u0631\u0627\u0639\u0629 \u0627\u0644\u0630\u0643\u064a\u0629 \u0648\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u0645\u0633\u062a\u062f\u0627\u0645 \u0641\u064a \u0627\u0644\u0628\u064a\u0626\u0627\u062a \u0627\u0644\u0642\u0627\u062d\u0644\u0629.'}
      ],
      outcomes:['\u062d\u0644\u0648\u0644 \u0648\u0637\u0646\u064a\u0629 \u0644\u062a\u062d\u062f\u064a\u0627\u062a \u0627\u0644\u0645\u064a\u0627\u0647 \u0648\u0627\u0644\u063a\u0630\u0627\u0621','\u0631\u0635\u062f \u0648\u0628\u064a\u0627\u0646\u0627\u062a \u0628\u064a\u0626\u064a\u0629 \u062f\u0642\u064a\u0642\u0629','\u062f\u0639\u0645 \u0645\u0633\u062a\u0647\u062f\u0641\u0627\u062a \u0627\u0644\u0627\u0633\u062a\u062f\u0627\u0645\u0629 \u0641\u064a \u0631\u0624\u064a\u0629 2030'],
      icon:'<svg viewBox="0 0 24 24"><path d="M12 3.5C8 8 5.5 11 5.5 14.2a6.5 6.5 0 0 0 13 0C18.5 11 16 8 12 3.5z"/><path d="M9.5 14.5c.4 1.8 1.6 3 3.4 3.4"/></svg>' },
    { name:'\u0627\u0644\u0637\u0627\u0642\u0629 \u0648\u0627\u0644\u0635\u0646\u0627\u0639\u0629', color:'var(--gold)', hex:0xe8b93e, model:'octa',
      desc:'\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0637\u0627\u0642\u0629 \u0627\u0644\u0646\u0638\u064a\u0641\u0629 \u0648\u0627\u0644\u062a\u0635\u0646\u064a\u0639 \u0627\u0644\u0645\u062a\u0642\u062f\u0645 \u0644\u062a\u0646\u0648\u064a\u0639 \u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f \u0627\u0644\u0648\u0637\u0646\u064a.',
      vision:'\u0631\u064a\u0627\u062f\u0629 \u0635\u0646\u0627\u0639\u064a\u0629 \u0648\u0637\u0627\u0642\u0629 \u0646\u0638\u064a\u0641\u0629 \u062a\u0635\u0646\u0639 \u0627\u0642\u062a\u0635\u0627\u062f\u064b\u0627 \u0645\u0646\u0627\u0641\u0633\u064b\u0627.',
      mission:'\u062a\u0637\u0648\u064a\u0631 \u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0637\u0627\u0642\u0629 \u0627\u0644\u0645\u062a\u062c\u062f\u062f\u0629 \u0648\u0627\u0644\u062a\u062e\u0632\u064a\u0646 \u0648\u0627\u0644\u062a\u0635\u0646\u064a\u0639 \u0627\u0644\u0645\u062a\u0642\u062f\u0645 \u0648\u0627\u0644\u0645\u0648\u0627\u062f \u0627\u0644\u062c\u062f\u064a\u062f\u0629\u060c \u0648\u062f\u0639\u0645 \u062a\u0648\u0637\u064a\u0646 \u0627\u0644\u0635\u0646\u0627\u0639\u0627\u062a \u0627\u0644\u0625\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629.',
      pillars:[
        {t:'\u0627\u0644\u0637\u0627\u0642\u0629 \u0627\u0644\u0645\u062a\u062c\u062f\u062f\u0629 \u0648\u0627\u0644\u062a\u062e\u0632\u064a\u0646', d:'\u0627\u0644\u062e\u0644\u0627\u064a\u0627 \u0627\u0644\u0634\u0645\u0633\u064a\u0629 \u0648\u062a\u062e\u0632\u064a\u0646 \u0627\u0644\u0637\u0627\u0642\u0629 \u0648\u0627\u0644\u0645\u0648\u0627\u062f \u0627\u0644\u0645\u062a\u0642\u062f\u0645\u0629 \u0644\u0644\u0637\u0627\u0642\u0629 \u0627\u0644\u0646\u0638\u064a\u0641\u0629.'},
        {t:'\u0627\u0644\u062a\u0635\u0646\u064a\u0639 \u0627\u0644\u0645\u062a\u0642\u062f\u0645', d:'\u0627\u0644\u0631\u0648\u0628\u0648\u062a\u0627\u062a \u0648\u0627\u0644\u0623\u062a\u0645\u062a\u0629 \u0648\u0627\u0644\u062a\u0635\u0646\u064a\u0639 \u0627\u0644\u0631\u0642\u0645\u064a \u0644\u0631\u0641\u0639 \u062a\u0646\u0627\u0641\u0633\u064a\u0629 \u0627\u0644\u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0648\u0637\u0646\u064a\u0629.'},
        {t:'\u0627\u0644\u0645\u0648\u0627\u062f \u0627\u0644\u0645\u062a\u0642\u062f\u0645\u0629', d:'\u0645\u0648\u0627\u062f \u062c\u062f\u064a\u062f\u0629 \u0644\u0642\u0637\u0627\u0639\u0627\u062a \u0627\u0644\u0637\u064a\u0631\u0627\u0646 \u0648\u0627\u0644\u0628\u0646\u0627\u0621 \u0648\u0627\u0644\u0635\u0646\u0627\u0639\u0627\u062a \u0627\u0644\u062f\u0642\u064a\u0642\u0629.'}
      ],
      outcomes:['\u062a\u0642\u0646\u064a\u0627\u062a \u0645\u0648\u0637\u0651\u0646\u0629 \u0644\u0644\u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629','\u0643\u0641\u0627\u0621\u0629 \u0623\u0639\u0644\u0649 \u0644\u0644\u0637\u0627\u0642\u0629','\u0645\u0646\u062a\u062c\u0627\u062a \u0648\u0637\u0646\u064a\u0629 \u0630\u0627\u062a \u0642\u064a\u0645\u0629 \u0645\u0636\u0627\u0641\u0629'],
      icon:'<svg viewBox="0 0 24 24"><path d="M13 2.5 5 13.5h5L11 21.5l8-11h-5z"/></svg>' },
    { name:'\u0627\u0642\u062a\u0635\u0627\u062f\u064a\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u0642\u0628\u0644', color:'var(--blue)', hex:0x2f7ff0, model:'ico',
      desc:'\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0648\u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0639\u0645\u064a\u0642\u0629 \u0648\u0628\u0646\u0627\u0621 \u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f \u0627\u0644\u0645\u0639\u0631\u0641\u064a.',
      vision:'\u0627\u0642\u062a\u0635\u0627\u062f \u0645\u0639\u0631\u0641\u064a \u062a\u0642\u0648\u062f\u0647 \u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0639\u0645\u064a\u0642\u0629 \u0648\u0627\u0644\u0639\u0642\u0648\u0644 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629.',
      mission:'\u0627\u0644\u0628\u062d\u062b \u0648\u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0641\u064a \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0648\u0639\u0644\u0648\u0645 \u0627\u0644\u0641\u0636\u0627\u0621 \u0648\u0627\u0644\u0627\u062a\u0635\u0627\u0644\u0627\u062a \u0627\u0644\u0645\u062a\u0642\u062f\u0645\u0629 \u0648\u0623\u0634\u0628\u0627\u0647 \u0627\u0644\u0645\u0648\u0635\u0644\u0627\u062a\u060c \u0648\u062a\u0645\u0643\u064a\u0646 \u0627\u0644\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0646\u0627\u0634\u0626\u0629 \u0641\u064a \u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0639\u0645\u064a\u0642\u0629.',
      pillars:[
        {t:'\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0648\u0627\u0644\u062d\u0648\u0633\u0628\u0629', d:'\u0646\u0645\u0627\u0630\u062c \u0648\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0648\u0627\u0644\u062d\u0648\u0633\u0628\u0629 \u0627\u0644\u0645\u062a\u0642\u062f\u0645\u0629.'},
        {t:'\u0627\u0644\u0641\u0636\u0627\u0621 \u0648\u0627\u0644\u0627\u062a\u0635\u0627\u0644\u0627\u062a', d:'\u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0641\u0636\u0627\u0626\u064a\u0629 \u0648\u0627\u062a\u0635\u0627\u0644\u0627\u062a \u0627\u0644\u062c\u064a\u0644 \u0627\u0644\u0642\u0627\u062f\u0645 \u0648\u0623\u0634\u0628\u0627\u0647 \u0627\u0644\u0645\u0648\u0635\u0644\u0627\u062a.'},
        {t:'\u0631\u064a\u0627\u062f\u0629 \u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0639\u0645\u064a\u0642\u0629', d:'\u0627\u062d\u062a\u0636\u0627\u0646 \u0648\u062a\u0633\u0631\u064a\u0639 \u0627\u0644\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0646\u0627\u0634\u0626\u0629 \u0639\u0628\u0631 \u0648\u0627\u062d\u0627\u062a \u0627\u0644\u0627\u0628\u062a\u0643\u0627\u0631 \u0648\u0628\u0631\u0627\u0645\u062c\u0647\u0627.'}
      ],
      outcomes:['\u062a\u0642\u0646\u064a\u0627\u062a \u0639\u0645\u064a\u0642\u0629 \u0633\u0639\u0648\u062f\u064a\u0629 \u0627\u0644\u0645\u0646\u0634\u0623','\u0634\u0631\u0643\u0627\u062a \u0646\u0627\u0634\u0626\u0629 \u0645\u0646 \u0645\u062e\u0631\u062c\u0627\u062a \u0627\u0644\u0628\u062d\u062b','\u0627\u0642\u062a\u0635\u0627\u062f \u0645\u0639\u0631\u0641\u064a \u062a\u0646\u0627\u0641\u0633\u064a \u0639\u0627\u0644\u0645\u064a\u064b\u0627'],
      icon:'<svg viewBox="0 0 24 24"><rect x="7.5" y="7.5" width="9" height="9" rx="2"/><path d="M9.5 4.5v3M14.5 4.5v3M9.5 16.5v3M14.5 16.5v3M4.5 9.5h3M4.5 14.5h3M16.5 9.5h3M16.5 14.5h3"/></svg>' },
    { name:'\u0631\u0623\u0633 \u0627\u0644\u0645\u0627\u0644 \u0627\u0644\u0628\u0634\u0631\u064a', color:'var(--purple)', hex:0x8b5cf6, model:'torus',
      desc:'\u0627\u0633\u062a\u0642\u0637\u0627\u0628 \u0627\u0644\u0643\u0641\u0627\u0621\u0627\u062a \u0648\u062a\u0646\u0645\u064a\u0629 \u0627\u0644\u0639\u0642\u0648\u0644 \u0627\u0644\u062a\u064a \u062a\u0642\u0648\u062f \u0627\u0644\u0628\u062d\u062b \u0648\u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u0644\u0627\u0628\u062a\u0643\u0627\u0631.',
      vision:'\u0643\u0641\u0627\u0621\u0627\u062a \u0648\u0637\u0646\u064a\u0629 \u0639\u0627\u0644\u0645\u064a\u0629 \u0627\u0644\u0645\u0633\u062a\u0648\u0649 \u062a\u0642\u0648\u062f \u0645\u0633\u062a\u0642\u0628\u0644 \u0627\u0644\u0639\u0644\u0648\u0645 \u0648\u0627\u0644\u062a\u0642\u0646\u064a\u0629.',
      mission:'\u0627\u0633\u062a\u0642\u0637\u0627\u0628 \u0623\u0641\u0636\u0644 \u0627\u0644\u0645\u0648\u0627\u0647\u0628 \u0645\u062d\u0644\u064a\u064b\u0627 \u0648\u0639\u0627\u0644\u0645\u064a\u064b\u0627\u060c \u0648\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0628\u0627\u062d\u062b\u064a\u0646 \u0648\u0627\u0644\u0645\u0628\u062a\u0643\u0631\u064a\u0646 \u0639\u0628\u0631 \u0628\u0631\u0627\u0645\u062c \u0627\u0644\u062a\u062f\u0631\u064a\u0628 \u0648\u0627\u0644\u062a\u0623\u0647\u064a\u0644 \u0648\u0627\u0644\u0632\u0645\u0627\u0644\u0627\u062a\u060c \u0648\u0628\u0646\u0627\u0621 \u0628\u064a\u0626\u0629 \u0639\u0645\u0644 \u0645\u062d\u0641\u0632\u0629 \u062a\u064f\u0645\u0643\u0651\u0646 \u0627\u0644\u0639\u0642\u0648\u0644 \u0645\u0646 \u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0623\u062b\u0631.',
      pillars:[
        {t:'\u0627\u0633\u062a\u0642\u0637\u0627\u0628 \u0627\u0644\u0643\u0641\u0627\u0621\u0627\u062a', d:'\u062c\u0630\u0628 \u0623\u0641\u0636\u0644 \u0627\u0644\u0639\u0642\u0648\u0644 \u0645\u062d\u0644\u064a\u064b\u0627 \u0648\u0639\u0627\u0644\u0645\u064a\u064b\u0627 \u0644\u0645\u0646\u0638\u0648\u0645\u0629 \u0627\u0644\u0628\u062d\u062b \u0648\u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u0644\u0627\u0628\u062a\u0643\u0627\u0631.'},
        {t:'\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0628\u0627\u062d\u062b\u064a\u0646 \u0648\u0627\u0644\u0642\u064a\u0627\u062f\u0627\u062a', d:'\u0628\u0631\u0627\u0645\u062c \u062a\u0623\u0647\u064a\u0644 \u0648\u0632\u0645\u0627\u0644\u0627\u062a \u0648\u062a\u062f\u0631\u064a\u0628 \u0645\u062a\u0642\u062f\u0645 \u0644\u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0627\u062a \u0627\u0644\u0639\u0644\u0645\u064a\u0629.'},
        {t:'\u0628\u064a\u0626\u0629 \u0639\u0645\u0644 \u0645\u064f\u0645\u0643\u0650\u0651\u0646\u0629', d:'\u062b\u0642\u0627\u0641\u0629 \u0645\u062d\u0641\u0632\u0629 \u062a\u0633\u062a\u0628\u0642\u064a \u0627\u0644\u0645\u0648\u0627\u0647\u0628 \u0648\u062a\u062d\u0648\u0651\u0644 \u0627\u0644\u0623\u0641\u0643\u0627\u0631 \u0625\u0644\u0649 \u0623\u062b\u0631 \u0645\u0644\u0645\u0648\u0633.'}
      ],
      outcomes:['\u0643\u0641\u0627\u0621\u0627\u062a \u0648\u0637\u0646\u064a\u0629 \u0628\u0645\u0639\u0627\u064a\u064a\u0631 \u0639\u0627\u0644\u0645\u064a\u0629','\u0645\u0633\u0627\u0631\u0627\u062a \u0645\u0647\u0646\u064a\u0629 \u0628\u062d\u062b\u064a\u0629 \u0648\u0627\u0636\u062d\u0629','\u062b\u0642\u0627\u0641\u0629 \u0627\u0628\u062a\u0643\u0627\u0631 \u062c\u0627\u0630\u0628\u0629 \u0644\u0644\u0645\u0648\u0627\u0647\u0628'],
      icon:'<svg viewBox="0 0 24 24"><circle cx="12" cy="7.5" r="3.2"/><path d="M5.5 20c.7-3.8 3.2-5.8 6.5-5.8s5.8 2 6.5 5.8"/><path d="M12 11v2.5"/><path d="m8.5 4.5 1-1.5M15.5 4.5l-1-1.5"/></svg>' }
  ]
};

const SECTOR_ART = {"knot": "<svg viewBox=\"0 0 120 120\" class=\"sector-art\"><g fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n  <path d=\"M40 15c22 12 22 26 0 38s-22 26 0 38\" stroke-width=\"3\"/>\n  <path d=\"M80 15c-22 12-22 26 0 38s22 26 0 38\" stroke-width=\"3\"/>\n  <path d=\"M44 24h32M44 40h32M44 56h32M44 72h32M44 88h32\" stroke-width=\"2\" opacity=\".65\"/>\n  <circle cx=\"40\" cy=\"15\" r=\"3.4\"/><circle cx=\"80\" cy=\"15\" r=\"3.4\"/>\n  <circle cx=\"40\" cy=\"91\" r=\"3.4\"/><circle cx=\"80\" cy=\"91\" r=\"3.4\"/>\n  <path d=\"M14 104h14l5-9 7 16 6-12 4 5h16\" stroke-width=\"2.6\" opacity=\".9\"/>\n</g></svg>", "planet": "<svg viewBox=\"0 0 120 120\" class=\"sector-art\"><g fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n  <path d=\"M60 14C42 34 30 48 30 66a30 30 0 0 0 60 0c0-18-12-32-30-52z\" stroke-width=\"3\"/>\n  <path d=\"M45 68c1.5 9 7 14.5 15 16.5\" stroke-width=\"2.4\" opacity=\".8\"/>\n  <path d=\"M18 100c10-5 20-5 30 0s20 5 30 0 16-4 24 0\" stroke-width=\"2.4\" opacity=\".7\"/>\n  <path d=\"M18 109c10-5 20-5 30 0s20 5 30 0 16-4 24 0\" stroke-width=\"2\" opacity=\".45\"/>\n  <path d=\"M78 26c6-6 14-9 22-8-1 8-4 16-10 22\" stroke-width=\"2.2\" opacity=\".85\"/>\n  <path d=\"M90 40c-3 3-7 5-11 5\" stroke-width=\"2\" opacity=\".6\"/>\n</g></svg>", "octa": "<svg viewBox=\"0 0 120 120\" class=\"sector-art\"><g fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n  <circle cx=\"60\" cy=\"46\" r=\"17\" stroke-width=\"3\"/>\n  <path d=\"M60 18v-8M60 82v-8M32 46h-8M96 46h-8M40 26l-6-6M86 72l-6-6M80 26l6-6M40 66l-6 6\" stroke-width=\"2.6\"/>\n  <path d=\"M22 112V96l12-10v26M50 112V88l12-8v32M78 112V80l12-6v38\" stroke-width=\"2.6\" opacity=\".9\"/>\n  <path d=\"M104 112H14\" stroke-width=\"2.8\"/>\n  <path d=\"M67 36 57 50h7l-8 12\" stroke-width=\"2.4\"/>\n</g></svg>", "ico": "<svg viewBox=\"0 0 120 120\" class=\"sector-art\"><g fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n  <rect x=\"38\" y=\"38\" width=\"44\" height=\"44\" rx=\"7\" stroke-width=\"3\"/>\n  <rect x=\"50\" y=\"50\" width=\"20\" height=\"20\" rx=\"4\" stroke-width=\"2.4\" opacity=\".85\"/>\n  <path d=\"M48 38V24M60 38V20M72 38V24M48 82v14M60 82v18M72 82v14M38 48H24M38 60H20M38 72H24M82 48h14M82 60h18M82 72h14\" stroke-width=\"2.4\"/>\n  <circle cx=\"48\" cy=\"20\" r=\"3\"/><circle cx=\"72\" cy=\"20\" r=\"3\"/>\n  <circle cx=\"100\" cy=\"60\" r=\"3\"/><circle cx=\"20\" cy=\"60\" r=\"3\"/>\n  <circle cx=\"48\" cy=\"100\" r=\"3\"/><circle cx=\"72\" cy=\"100\" r=\"3\"/>\n</g></svg>", "torus": "<svg viewBox=\"0 0 120 120\" class=\"sector-art\"><g fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n  <circle cx=\"60\" cy=\"34\" r=\"11\" stroke-width=\"3\"/>\n  <path d=\"M40 78c2-13 9-20 20-20s18 7 20 20\" stroke-width=\"3\"/>\n  <circle cx=\"26\" cy=\"46\" r=\"8\" stroke-width=\"2.4\" opacity=\".85\"/>\n  <path d=\"M12 76c1.5-9 6.5-14 14-14 3.4 0 6.3 1 8.6 3\" stroke-width=\"2.4\" opacity=\".85\"/>\n  <circle cx=\"94\" cy=\"46\" r=\"8\" stroke-width=\"2.4\" opacity=\".85\"/>\n  <path d=\"M108 76c-1.5-9-6.5-14-14-14-3.4 0-6.3 1-8.6 3\" stroke-width=\"2.4\" opacity=\".85\"/>\n  <path d=\"M60 88v14M60 102l-8-7M60 102l8-7\" stroke-width=\"2.4\" opacity=\".9\"/>\n  <path d=\"M37 96h46\" stroke-width=\"2.6\" opacity=\".7\"/>\n</g></svg>"};

function showLogin(){
  let ov = document.getElementById('loginOverlay');
  if(ov){ ov.style.display='block'; return; }
  const brandImg = document.querySelector('.brand img');
  ov = document.createElement('div');
  ov.id = 'loginOverlay';
  ov.className = 'landing';
  const navbar = `
    <div class="landing-nav">
      <div class="nb">
        ${brandImg ? `<img src="${brandImg.src}" alt="KACST">` : ''}
        <div class="nt">\u0625\u062f\u0627\u0631\u0629 \u0627\u0633\u062a\u0642\u0637\u0627\u0628 \u0627\u0644\u0643\u0641\u0627\u0621\u0627\u062a<small>\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0644\u0643 \u0639\u0628\u062f\u0627\u0644\u0639\u0632\u064a\u0632 \u0644\u0644\u0639\u0644\u0648\u0645 \u0648\u0627\u0644\u062a\u0642\u0646\u064a\u0629</small></div>
      </div>
      <div class="na">
        <button class="btn btn-sm btn-primary" id="navApply">\u0642\u062f\u0651\u0645 \u0627\u0644\u0622\u0646</button>
        <button class="btn btn-sm btn-ghost" id="navSignIn">\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644</button>
      </div>
    </div>`;
  ov.innerHTML = navbar + `
    <section class="rd-hero">
      <video id="liVideo" autoplay muted loop playsinline preload="metadata" poster="/intro/kacst-intro-poster.jpg">
        <source src="/intro/kacst-intro.mp4" type="video/mp4">
      </video>
      <div class="rd-hero-inner">
        <h1>\u0646\u0633\u062a\u0642\u0637\u0628 \u0627\u0644\u0639\u0642\u0648\u0644 \u0627\u0644\u062a\u064a \u062a\u0635\u0646\u0639 <span class="g">\u0627\u0644\u0645\u0633\u062a\u0642\u0628\u0644</span></h1>
        <p>\u0627\u0644\u0628\u062d\u062b \u0627\u0644\u0639\u0644\u0645\u064a \u0648\u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u062a\u0642\u0646\u064a \u0631\u0643\u064a\u0632\u062a\u0627 \u0627\u0644\u0646\u0645\u0648 \u0641\u064a \u0627\u0644\u0645\u0645\u0644\u0643\u0629. \u0647\u0630\u0647 \u0628\u0648\u0627\u0628\u062a\u0643 \u0644\u0644\u0627\u0646\u0636\u0645\u0627\u0645 \u0625\u0644\u0649 \u0646\u062e\u0628\u0629 \u0627\u0644\u0628\u0627\u062d\u062b\u064a\u0646 \u0648\u0627\u0644\u0645\u0628\u062a\u0643\u0631\u064a\u0646 \u0648\u0631\u0648\u0651\u0627\u062f \u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0639\u0645\u064a\u0642\u0629 \u0627\u0644\u0630\u064a\u0646 \u064a\u0635\u0646\u0639\u0648\u0646 \u0627\u0644\u063a\u062f \u0641\u064a \u0627\u0644\u0645\u062e\u062a\u0628\u0631 \u0627\u0644\u0648\u0637\u0646\u064a.</p>
        <div class="rd-cta-row">
          <button class="btn btn-primary rd-btn-lg" id="liHeroApply">\u0642\u062f\u0651\u0645 \u0627\u0644\u0622\u0646</button>
          <button class="btn btn-ghost rd-btn-lg" id="rdExplore">\u0627\u0633\u062a\u0643\u0634\u0641 \u0642\u0637\u0627\u0639\u0627\u062a\u0646\u0627</button>
        </div>
        <div class="rd-stats">
          <div class="rd-stat" style="--sc:#19b8a6;"><b>3,000<sup>+</sup></b><small>\u0628\u0627\u062d\u062b \u0648\u0645\u0628\u062a\u0643\u0631 \u0648\u0645\u062e\u062a\u0635</small></div>
          <div class="rd-stat" style="--sc:#8b5cf6;"><b>90<sup>+</sup></b><small>\u0634\u0631\u0643\u0629 \u0646\u0627\u0634\u0626\u0629 \u0641\u064a \u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0639\u0645\u064a\u0642\u0629</small></div>
          <div class="rd-stat" style="--sc:#2f7ff0;"><b>600<sup>+</sup></b><small>\u0634\u0631\u0643\u0629 \u062a\u0642\u0646\u064a\u0629 \u062a\u062e\u0631\u0651\u062c\u062a \u0645\u0646 \u00ab\u0627\u0644\u0643\u0631\u0627\u062c\u00bb</small></div>
          <div class="rd-stat" style="--sc:#e8b93e;"><b>21,700<sup>+</sup></b><small>\u0645\u0633\u062a\u0641\u064a\u062f \u0645\u0646 \u0627\u0644\u0628\u0631\u0627\u0645\u062c \u0627\u0644\u062a\u062f\u0631\u064a\u0628\u064a\u0629 \u0648\u0627\u0644\u062a\u0623\u0647\u064a\u0644\u064a\u0629</small></div>
        </div>
      </div>
      <button class="rd-sound" id="liSound" aria-label="\u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0635\u0648\u062a" title="\u062a\u0634\u063a\u064a\u0644 / \u0643\u062a\u0645 \u0627\u0644\u0635\u0648\u062a">\ud83d\udd07</button>
    </section>

    <div class="rd-marquee" aria-hidden="true"><div class="rd-mq-track">
      ${Array(2).fill(['\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a','\u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u062d\u064a\u0648\u064a\u0629 \u0648\u0627\u0644\u062c\u064a\u0646\u0648\u0645','\u0627\u0644\u0641\u0636\u0627\u0621 \u0648\u0627\u0644\u0627\u062a\u0635\u0627\u0644\u0627\u062a','\u0627\u0644\u0637\u0627\u0642\u0629 \u0627\u0644\u0646\u0638\u064a\u0641\u0629','\u0627\u0644\u062a\u0635\u0646\u064a\u0639 \u0627\u0644\u0645\u062a\u0642\u062f\u0645','\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0645\u064a\u0627\u0647','\u0623\u0634\u0628\u0627\u0647 \u0627\u0644\u0645\u0648\u0635\u0644\u0627\u062a','\u0631\u064a\u0627\u062f\u0629 \u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0639\u0645\u064a\u0642\u0629']).flat().map(c=>`<span class="rd-chip">${c}</span>`).join('')}
    </div></div>

    <section class="rd-wrap">
      <div class="rd-vm">
        <div class="rd-vm-card rd-rev"><h3>\u0627\u0644\u0631\u0624\u064a\u0629</h3><strong>\u0627\u0644\u0631\u064a\u0627\u062f\u0629 \u0627\u0644\u0639\u0627\u0644\u0645\u064a\u0629 \u0641\u064a \u0627\u0644\u0628\u062d\u062b \u0648\u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u0644\u0627\u0628\u062a\u0643\u0627\u0631.</strong>
          <p>\u0628\u0645\u0627 \u064a\u0639\u0632\u0632 \u062a\u0646\u0627\u0641\u0633\u064a\u0629 \u0627\u0644\u0645\u0645\u0644\u0643\u0629\u060c \u0648\u064a\u0628\u0646\u064a \u0627\u0642\u062a\u0635\u0627\u062f\u064b\u0627 \u0645\u0639\u0631\u0641\u064a\u064b\u0627 \u0645\u0632\u062f\u0647\u0631\u064b\u0627 \u064a\u062a\u0645\u0627\u0634\u0649 \u0645\u0639 \u0645\u0633\u062a\u0647\u062f\u0641\u0627\u062a \u0631\u0624\u064a\u0629 \u0627\u0644\u0645\u0645\u0644\u0643\u0629 2030.</p></div>
        <div class="rd-vm-card rd-rev"><h3>\u0627\u0644\u0631\u0633\u0627\u0644\u0629</h3><strong>\u0627\u0644\u0645\u062e\u062a\u0628\u0631 \u0627\u0644\u0648\u0637\u0646\u064a \u0648\u0648\u0627\u062d\u0627\u062a \u0627\u0644\u0627\u0628\u062a\u0643\u0627\u0631.</strong>
          <p>\u062a\u0642\u0648\u062f \u0643\u0627\u0643\u0633\u062a \u0627\u0644\u0628\u062d\u062b \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u064a \u0648\u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u062a\u0642\u0646\u064a \u0648\u0641\u0642 \u0627\u0644\u0623\u0648\u0644\u0648\u064a\u0627\u062a \u0627\u0644\u0648\u0637\u0646\u064a\u0629\u060c \u0648\u062a\u062d\u0648\u0651\u0644 \u0645\u062e\u0631\u062c\u0627\u062a \u0627\u0644\u0645\u0639\u0631\u0641\u0629 \u0625\u0644\u0649 \u0645\u0646\u062a\u062c\u0627\u062a \u0648\u062e\u062f\u0645\u0627\u062a \u0627\u0628\u062a\u0643\u0627\u0631\u064a\u0629 \u0630\u0627\u062a \u0642\u064a\u0645\u0629 \u0645\u0636\u0627\u0641\u0629\u060c \u0648\u062a\u0645\u0643\u0651\u0646 \u0631\u0648\u0627\u062f \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0648\u0627\u0644\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0646\u0627\u0634\u0626\u0629 \u0641\u064a \u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0639\u0645\u064a\u0642\u0629\u060c \u0648\u062a\u0624\u062f\u064a \u062f\u0648\u0631 \u0627\u0644\u062c\u0647\u0629 \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u0645\u0631\u062c\u0639\u064a\u0629 \u0644\u0644\u062c\u0647\u0627\u062a \u0627\u0644\u062d\u0643\u0648\u0645\u064a\u0629 \u0648\u0627\u0644\u0642\u0637\u0627\u0639 \u0627\u0644\u062e\u0627\u0635.</p></div>
      </div>
    </section>

    <section class="rd-tl" id="rdTimeline">
      <div class="rd-tl-sticky">
        <div class="rd-tl-photos">
          ${Array.from({length:6},(_,i)=>`<div class="rd-tl-photo" data-p="${i}" style="background-image:url('/intro/tl-0${i+1}.jpg');"></div>`).join('')}
          <div class="rd-tl-shade"></div>
        </div>
        <div class="rd-tl-beam" aria-hidden="true"><i id="rdBeamFill"></i></div>
        <span class="rd-tl-credit">PHOTO \u00b7 KACST FILM</span>
        <div class="rd-tl-inner">
          ${[
            {n:'01',y:'1977',t:'\u0627\u0644\u0628\u062f\u0627\u064a\u0629',d:'\u0645\u0631\u0633\u0648\u0645 \u0645\u0644\u0643\u064a \u064a\u064f\u0646\u0634\u0626 \u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0648\u0637\u0646\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a \u0644\u0644\u0639\u0644\u0648\u0645 \u0648\u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0641\u064a \u0627\u0644\u0631\u064a\u0627\u0636 \u2014 \u0623\u0648\u0644 \u0645\u0624\u0633\u0633\u0629 \u0639\u0644\u0645\u064a\u0629 \u0648\u0637\u0646\u064a\u0629 \u0641\u064a \u0627\u0644\u0645\u0645\u0644\u0643\u0629.',c:'#19b8a6'},
            {n:'02',y:'1985',t:'\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0644\u0643 \u0639\u0628\u062f\u0627\u0644\u0639\u0632\u064a\u0632',d:'\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u062a\u0646\u0638\u064a\u0645 \u0648\u0627\u0644\u062a\u0633\u0645\u064a\u0629 \u0628\u0645\u0631\u0633\u0648\u0645 \u0645\u0644\u0643\u064a \u0644\u062a\u0635\u0628\u062d \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0644\u0643 \u0639\u0628\u062f\u0627\u0644\u0639\u0632\u064a\u0632 \u0644\u0644\u0639\u0644\u0648\u0645 \u0648\u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u2014 \u0628\u064a\u062a \u0627\u0644\u0628\u062d\u062b \u0648\u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0641\u064a \u0627\u0644\u0645\u0645\u0644\u0643\u0629.',c:'#2f7ff0'},
            {n:'03',y:'2000',t:'\u0625\u0644\u0649 \u0627\u0644\u0641\u0636\u0627\u0621',d:'\u0625\u0637\u0644\u0627\u0642 \u00ab\u0633\u0639\u0648\u062f\u064a \u0633\u0627\u062a-1\u00bb \u2014 \u0623\u0648\u0644 \u0661\u0663 \u0642\u0645\u0631\u064b\u0627 \u0635\u0646\u0627\u0639\u064a\u064b\u0627 \u0633\u0639\u0648\u062f\u064a\u064b\u0627 \u0635\u064f\u0645\u0645\u062a \u0648\u0635\u064f\u0646\u0639\u062a \u0641\u064a \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0628\u064a\u0646 2000 \u06482017.',c:'#8b5cf6'},
            {n:'04',y:'2018',t:'\u0633\u0639\u0648\u062f\u064a \u0633\u0627\u062a 5',d:'\u0642\u0645\u0631\u0627 \u0627\u0644\u0627\u0633\u062a\u0634\u0639\u0627\u0631 \u0639\u0627\u0644\u064a \u0627\u0644\u062f\u0642\u0629 5A \u06485B \u2014 \u062a\u0635\u0645\u064a\u0645 \u0648\u062a\u0635\u0646\u064a\u0639 \u0648\u062a\u0634\u063a\u064a\u0644 \u0628\u0623\u064a\u062f\u064d \u0633\u0639\u0648\u062f\u064a\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644.',c:'#e8b93e'},
            {n:'05',y:'2022',t:'\u00ab\u0627\u0644\u0643\u0631\u0627\u062c\u00bb',d:'\u0627\u0641\u062a\u062a\u0627\u062d \u0623\u0643\u0628\u0631 \u0648\u0627\u062d\u0629 \u0627\u0628\u062a\u0643\u0627\u0631 \u0644\u0644\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0639\u0645\u064a\u0642\u0629 \u0641\u064a \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u2014 \u062a\u062e\u0631\u0651\u062c\u062a \u0645\u0646\u0647\u0627 \u0623\u0643\u062b\u0631 \u0645\u0646 600 \u0634\u0631\u0643\u0629 \u062a\u0642\u0646\u064a\u0629.',c:'#f4536e'},
            {n:'06',y:'\u0627\u0644\u064a\u0648\u0645',t:'\u0627\u0644\u0645\u062e\u062a\u0628\u0631 \u0627\u0644\u0648\u0637\u0646\u064a \u2014 \u0648\u0623\u0646\u062a \u0627\u0644\u062a\u0627\u0644\u064a',d:'\u0643\u0627\u0643\u0633\u062a \u0627\u0644\u064a\u0648\u0645 \u0645\u062e\u062a\u0628\u0631 \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0648\u0637\u0646\u064a \u0648\u0648\u0627\u062d\u0627\u062a \u0627\u0628\u062a\u0643\u0627\u0631\u0647\u0627. \u0627\u0644\u0642\u0635\u0629 \u062a\u0633\u062a\u0645\u0631.',c:'#19b8a6'}
          ].map((ch,i)=>`
          <div class="rd-ch${i===0?' on':''}" style="--cc:${ch.c};" data-ch="${i}">
            <span class="num"><i>${ch.n}</i> / 06</span>
            <div class="yr">${ch.y}</div>
            <div class="tt">${ch.t}</div>
            <div class="ds">${ch.d}</div>
          </div>`).join('')}
          <div class="rd-tl-dots"><span>SCROLL \u2193</span>${Array.from({length:6},(_,i)=>`<span class="d${i===0?' on':''}" data-d="${i}"></span>`).join('')}</div>
        </div>
      </div>
    </section>

    <section class="rd-wrap" id="rdSectors" style="padding-bottom:20px;">
      <span class="rd-kicker">\u0642\u0637\u0627\u0639\u0627\u062a\u0646\u0627</span>
      <h2 class="rd-title">\u062e\u0645\u0633\u0629 \u0642\u0637\u0627\u0639\u0627\u062a. \u0645\u0647\u0645\u0629 \u0648\u0627\u062d\u062f\u0629.</h2>
    </section>

    ${[
      {n:'01',name:'\u0627\u0644\u0635\u062d\u0629',c:'#f4536e',desc:'\u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u062d\u064a\u0648\u064a\u0629 \u0648\u0627\u0644\u062d\u0644\u0648\u0644 \u0627\u0644\u0635\u062d\u064a\u0629 \u0627\u0644\u0645\u062a\u0642\u062f\u0645\u0629 \u0644\u062c\u0648\u062f\u0629 \u062d\u064a\u0627\u0629 \u0623\u0641\u0636\u0644 \u0644\u0644\u0625\u0646\u0633\u0627\u0646.',
       subs:[['\u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u062d\u064a\u0648\u064a\u0629 \u0648\u0627\u0644\u062c\u064a\u0646\u0648\u0645','\u0623\u0628\u062d\u0627\u062b \u0627\u0644\u062c\u064a\u0646\u0648\u0645 \u0648\u0627\u0644\u0639\u0644\u0627\u062c\u0627\u062a \u0627\u0644\u062d\u064a\u0648\u064a\u0629 \u0644\u0644\u0623\u0645\u0631\u0627\u0636 \u0630\u0627\u062a \u0627\u0644\u0623\u0648\u0644\u0648\u064a\u0629 \u0627\u0644\u0648\u0637\u0646\u064a\u0629.'],['\u0627\u0644\u0623\u062f\u0648\u064a\u0629 \u0648\u0627\u0644\u0644\u0642\u0627\u062d\u0627\u062a','\u062a\u0637\u0648\u064a\u0631 \u0648\u062a\u0648\u0637\u064a\u0646 \u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0623\u062f\u0648\u064a\u0629 \u0648\u0627\u0644\u0644\u0642\u0627\u062d\u0627\u062a \u0648\u0627\u0644\u0645\u0633\u062a\u062d\u0636\u0631\u0627\u062a \u0627\u0644\u062d\u064a\u0648\u064a\u0629.'],['\u0627\u0644\u0623\u062c\u0647\u0632\u0629 \u0648\u0627\u0644\u062d\u0644\u0648\u0644 \u0627\u0644\u0637\u0628\u064a\u0629','\u062a\u0642\u0646\u064a\u0627\u062a \u062a\u0634\u062e\u064a\u0635\u064a\u0629 \u0648\u0639\u0644\u0627\u062c\u064a\u0629 \u0645\u062a\u0642\u062f\u0645\u0629 \u0628\u0634\u0631\u0627\u0643\u0627\u062a \u0645\u0639 \u0627\u0644\u0645\u0646\u0638\u0648\u0645\u0629 \u0627\u0644\u0635\u062d\u064a\u0629.']],
       impact:['\u0639\u0644\u0627\u062c\u0627\u062a \u0648\u062d\u0644\u0648\u0644 \u0635\u062d\u064a\u0629 \u0645\u0648\u0637\u0651\u0646\u0629','\u0634\u0631\u0627\u0643\u0627\u062a \u0628\u062d\u062b\u064a\u0629 \u0645\u0639 \u0627\u0644\u0645\u0646\u0638\u0648\u0645\u0629 \u0627\u0644\u0635\u062d\u064a\u0629','\u0634\u0631\u0643\u0627\u062a \u0646\u0627\u0634\u0626\u0629 \u0641\u064a \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u062d\u064a\u0648\u064a\u0629'],
       art:'<svg viewBox="0 0 100 100" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M8 52h18l7-20 12 40 9-28 5 8h33"/><circle cx="50" cy="16" r="8"/></svg>'},
      {n:'02',name:'\u0627\u0644\u0628\u064a\u0626\u0629 \u0648\u0627\u0644\u0627\u0633\u062a\u062f\u0627\u0645\u0629',c:'#19b8a6',desc:'\u062d\u0644\u0648\u0644 \u0627\u0644\u0645\u064a\u0627\u0647 \u0648\u0627\u0644\u0628\u064a\u0626\u0629 \u0648\u0627\u0644\u0632\u0631\u0627\u0639\u0629 \u0644\u0645\u0648\u0627\u062c\u0647\u0629 \u062a\u062d\u062f\u064a\u0627\u062a \u0627\u0644\u0645\u0646\u0627\u062e \u0648\u062a\u0623\u0645\u064a\u0646 \u0627\u0644\u0645\u0648\u0627\u0631\u062f.',
       subs:[['\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0645\u064a\u0627\u0647','\u0627\u0644\u062a\u062d\u0644\u064a\u0629 \u0648\u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629 \u0648\u0643\u0641\u0627\u0621\u0629 \u0627\u0644\u0627\u0633\u062a\u0647\u0644\u0627\u0643 \u0644\u0645\u0648\u0627\u062c\u0647\u0629 \u062a\u062d\u062f\u064a \u0634\u062d \u0627\u0644\u0645\u064a\u0627\u0647.'],['\u0627\u0644\u0628\u064a\u0626\u0629 \u0648\u0627\u0644\u0645\u0646\u0627\u062e','\u0627\u0644\u0631\u0635\u062f \u0627\u0644\u0628\u064a\u0626\u064a \u0648\u0627\u0644\u0646\u0645\u0630\u062c\u0629 \u0627\u0644\u0645\u0646\u0627\u062e\u064a\u0629 \u0648\u062d\u0644\u0648\u0644 \u062e\u0641\u0636 \u0627\u0644\u0627\u0646\u0628\u0639\u0627\u062b\u0627\u062a.'],['\u0627\u0644\u0632\u0631\u0627\u0639\u0629 \u0648\u0627\u0644\u0623\u0645\u0646 \u0627\u0644\u063a\u0630\u0627\u0626\u064a','\u0627\u0644\u0632\u0631\u0627\u0639\u0629 \u0627\u0644\u0630\u0643\u064a\u0629 \u0648\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u0645\u0633\u062a\u062f\u0627\u0645 \u0641\u064a \u0627\u0644\u0628\u064a\u0626\u0627\u062a \u0627\u0644\u0642\u0627\u062d\u0644\u0629.']],
       impact:['\u062d\u0644\u0648\u0644 \u0648\u0637\u0646\u064a\u0629 \u0644\u062a\u062d\u062f\u064a\u0627\u062a \u0627\u0644\u0645\u064a\u0627\u0647 \u0648\u0627\u0644\u063a\u0630\u0627\u0621','\u0631\u0635\u062f \u0648\u0628\u064a\u0627\u0646\u0627\u062a \u0628\u064a\u0626\u064a\u0629 \u062f\u0642\u064a\u0642\u0629','\u062f\u0639\u0645 \u0645\u0633\u062a\u0647\u062f\u0641\u0627\u062a \u0627\u0644\u0627\u0633\u062a\u062f\u0627\u0645\u0629 \u0641\u064a \u0631\u0624\u064a\u0629 2030'],
       art:'<svg viewBox="0 0 100 100" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M50 10C38 30 26 44 26 60a24 24 0 0 0 48 0c0-16-12-30-24-50z"/><path d="M38 62a12 12 0 0 0 12 12"/></svg>'},
      {n:'03',name:'\u0627\u0644\u0637\u0627\u0642\u0629 \u0648\u0627\u0644\u0635\u0646\u0627\u0639\u0629',c:'#e8b93e',desc:'\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0637\u0627\u0642\u0629 \u0627\u0644\u0646\u0638\u064a\u0641\u0629 \u0648\u0627\u0644\u062a\u0635\u0646\u064a\u0639 \u0627\u0644\u0645\u062a\u0642\u062f\u0645 \u0644\u062a\u0646\u0648\u064a\u0639 \u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f \u0627\u0644\u0648\u0637\u0646\u064a.',
       subs:[['\u0627\u0644\u0637\u0627\u0642\u0629 \u0627\u0644\u0645\u062a\u062c\u062f\u062f\u0629 \u0648\u0627\u0644\u062a\u062e\u0632\u064a\u0646','\u0627\u0644\u062e\u0644\u0627\u064a\u0627 \u0627\u0644\u0634\u0645\u0633\u064a\u0629 \u0648\u062a\u062e\u0632\u064a\u0646 \u0627\u0644\u0637\u0627\u0642\u0629 \u0648\u0627\u0644\u0645\u0648\u0627\u062f \u0627\u0644\u0645\u062a\u0642\u062f\u0645\u0629 \u0644\u0644\u0637\u0627\u0642\u0629 \u0627\u0644\u0646\u0638\u064a\u0641\u0629.'],['\u0627\u0644\u062a\u0635\u0646\u064a\u0639 \u0627\u0644\u0645\u062a\u0642\u062f\u0645','\u0627\u0644\u0631\u0648\u0628\u0648\u062a\u0627\u062a \u0648\u0627\u0644\u0623\u062a\u0645\u062a\u0629 \u0648\u0627\u0644\u062a\u0635\u0646\u064a\u0639 \u0627\u0644\u0631\u0642\u0645\u064a \u0644\u0631\u0641\u0639 \u062a\u0646\u0627\u0641\u0633\u064a\u0629 \u0627\u0644\u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0648\u0637\u0646\u064a\u0629.'],['\u0627\u0644\u0645\u0648\u0627\u062f \u0627\u0644\u0645\u062a\u0642\u062f\u0645\u0629','\u0645\u0648\u0627\u062f \u062c\u062f\u064a\u062f\u0629 \u0644\u0642\u0637\u0627\u0639\u0627\u062a \u0627\u0644\u0637\u064a\u0631\u0627\u0646 \u0648\u0627\u0644\u0628\u0646\u0627\u0621 \u0648\u0627\u0644\u0635\u0646\u0627\u0639\u0627\u062a \u0627\u0644\u062f\u0642\u064a\u0642\u0629.']],
       impact:['\u062a\u0642\u0646\u064a\u0627\u062a \u0645\u0648\u0637\u0651\u0646\u0629 \u0644\u0644\u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629','\u0643\u0641\u0627\u0621\u0629 \u0623\u0639\u0644\u0649 \u0644\u0644\u0637\u0627\u0642\u0629','\u0645\u0646\u062a\u062c\u0627\u062a \u0648\u0637\u0646\u064a\u0629 \u0630\u0627\u062a \u0642\u064a\u0645\u0629 \u0645\u0636\u0627\u0641\u0629'],
       art:'<svg viewBox="0 0 100 100" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M55 8 25 56h20l-6 36 34-52H51z"/></svg>'},
      {n:'04',name:'\u0627\u0642\u062a\u0635\u0627\u062f\u064a\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u0642\u0628\u0644',c:'#2f7ff0',desc:'\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0648\u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0639\u0645\u064a\u0642\u0629 \u0648\u0628\u0646\u0627\u0621 \u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f \u0627\u0644\u0645\u0639\u0631\u0641\u064a.',
       subs:[['\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0648\u0627\u0644\u062d\u0648\u0633\u0628\u0629','\u0646\u0645\u0627\u0630\u062c \u0648\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0648\u0627\u0644\u062d\u0648\u0633\u0628\u0629 \u0627\u0644\u0645\u062a\u0642\u062f\u0645\u0629.'],['\u0627\u0644\u0641\u0636\u0627\u0621 \u0648\u0627\u0644\u0627\u062a\u0635\u0627\u0644\u0627\u062a','\u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0641\u0636\u0627\u0626\u064a\u0629 \u0648\u0627\u062a\u0635\u0627\u0644\u0627\u062a \u0627\u0644\u062c\u064a\u0644 \u0627\u0644\u0642\u0627\u062f\u0645 \u0648\u0623\u0634\u0628\u0627\u0647 \u0627\u0644\u0645\u0648\u0635\u0644\u0627\u062a.'],['\u0631\u064a\u0627\u062f\u0629 \u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0639\u0645\u064a\u0642\u0629','\u0627\u062d\u062a\u0636\u0627\u0646 \u0648\u062a\u0633\u0631\u064a\u0639 \u0627\u0644\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0646\u0627\u0634\u0626\u0629 \u0639\u0628\u0631 \u0648\u0627\u062d\u0627\u062a \u0627\u0644\u0627\u0628\u062a\u0643\u0627\u0631 \u0648\u0628\u0631\u0627\u0645\u062c\u0647\u0627.']],
       impact:['\u062a\u0642\u0646\u064a\u0627\u062a \u0639\u0645\u064a\u0642\u0629 \u0633\u0639\u0648\u062f\u064a\u0629 \u0627\u0644\u0645\u0646\u0634\u0623','\u0634\u0631\u0643\u0627\u062a \u0646\u0627\u0634\u0626\u0629 \u0645\u0646 \u0645\u062e\u0631\u062c\u0627\u062a \u0627\u0644\u0628\u062d\u062b','\u0627\u0642\u062a\u0635\u0627\u062f \u0645\u0639\u0631\u0641\u064a \u062a\u0646\u0627\u0641\u0633\u064a \u0639\u0627\u0644\u0645\u064a\u064b\u0627'],
       art:'<svg viewBox="0 0 100 100" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="30" y="30" width="40" height="40" rx="6"/><rect x="42" y="42" width="16" height="16" rx="3"/><path d="M40 30V16M60 30V16M40 84V70M60 84V70M30 40H16M30 60H16M84 40H70M84 60H70"/></svg>'},
      {n:'05',name:'\u0631\u0623\u0633 \u0627\u0644\u0645\u0627\u0644 \u0627\u0644\u0628\u0634\u0631\u064a',c:'#8b5cf6',desc:'\u0627\u0633\u062a\u0642\u0637\u0627\u0628 \u0627\u0644\u0643\u0641\u0627\u0621\u0627\u062a \u0648\u062a\u0646\u0645\u064a\u0629 \u0627\u0644\u0639\u0642\u0648\u0644 \u0627\u0644\u062a\u064a \u062a\u0642\u0648\u062f \u0627\u0644\u0628\u062d\u062b \u0648\u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u0644\u0627\u0628\u062a\u0643\u0627\u0631.',
       subs:[['\u0627\u0633\u062a\u0642\u0637\u0627\u0628 \u0627\u0644\u0643\u0641\u0627\u0621\u0627\u062a','\u062c\u0630\u0628 \u0623\u0641\u0636\u0644 \u0627\u0644\u0639\u0642\u0648\u0644 \u0645\u062d\u0644\u064a\u064b\u0627 \u0648\u0639\u0627\u0644\u0645\u064a\u064b\u0627 \u0644\u0645\u0646\u0638\u0648\u0645\u0629 \u0627\u0644\u0628\u062d\u062b \u0648\u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u0644\u0627\u0628\u062a\u0643\u0627\u0631.'],['\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0628\u0627\u062d\u062b\u064a\u0646 \u0648\u0627\u0644\u0642\u064a\u0627\u062f\u0627\u062a','\u0628\u0631\u0627\u0645\u062c \u062a\u0623\u0647\u064a\u0644 \u0648\u0632\u0645\u0627\u0644\u0627\u062a \u0648\u062a\u062f\u0631\u064a\u0628 \u0645\u062a\u0642\u062f\u0645 \u0644\u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0627\u062a \u0627\u0644\u0639\u0644\u0645\u064a\u0629.'],['\u0628\u064a\u0626\u0629 \u0639\u0645\u0644 \u0645\u064f\u0645\u0643\u0650\u0651\u0646\u0629','\u062b\u0642\u0627\u0641\u0629 \u0645\u062d\u0641\u0632\u0629 \u062a\u0633\u062a\u0628\u0642\u064a \u0627\u0644\u0645\u0648\u0627\u0647\u0628 \u0648\u062a\u062d\u0648\u0651\u0644 \u0627\u0644\u0623\u0641\u0643\u0627\u0631 \u0625\u0644\u0649 \u0623\u062b\u0631 \u0645\u0644\u0645\u0648\u0633.']],
       impact:['\u0643\u0641\u0627\u0621\u0627\u062a \u0648\u0637\u0646\u064a\u0629 \u0628\u0645\u0639\u0627\u064a\u064a\u0631 \u0639\u0627\u0644\u0645\u064a\u0629','\u0645\u0633\u0627\u0631\u0627\u062a \u0645\u0647\u0646\u064a\u0629 \u0628\u062d\u062b\u064a\u0629 \u0648\u0627\u0636\u062d\u0629','\u062b\u0642\u0627\u0641\u0629 \u0627\u0628\u062a\u0643\u0627\u0631 \u062c\u0627\u0630\u0628\u0629 \u0644\u0644\u0645\u0648\u0627\u0647\u0628'],
       art:'<svg viewBox="0 0 100 100" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="38" cy="34" r="12"/><path d="M14 84c2-16 11-24 24-24s22 8 24 24"/><circle cx="72" cy="40" r="9"/><path d="M64 84c1-11 6-18 16-19 5 0 9 2 12 5"/></svg>'}
    ].map(s=>`
    <section class="rd-sector" style="--sc:${s.c};">
      <div class="wm">${s.n}</div>
      <div class="rd-wrap rd-sec-grid">
        <div class="rd-sec-head rd-rev">
          <span class="rd-kicker">\u0642\u0637\u0627\u0639 ${s.n}</span>
          <h2>${s.name}</h2>
          <p>${s.desc}</p>
          ${s.subs.map(x=>`<div class="rd-sub"><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join('')}
          <div class="rd-impact"><h4>\u0627\u0644\u0623\u062b\u0631 \u0627\u0644\u0645\u0633\u062a\u0647\u062f\u0641</h4>${s.impact.map(o=>`<div>${o}</div>`).join('')}</div>
        </div>
        <div class="rd-sec-art rd-rev">${s.art}</div>
      </div>
    </section>`).join('')}

    <section class="lslide li-news-slide">
      <div class="li-news">
        <div class="li-news-head">
          <div><span class="rd-kicker">\u0622\u062e\u0631 \u0623\u062e\u0628\u0627\u0631 \u0627\u0644\u0645\u062f\u064a\u0646\u0629</span>
          <h2>\u0645\u0646 \u0645\u062e\u062a\u0628\u0631\u0627\u062a \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0648\u0648\u0627\u062d\u0627\u062a\u0647\u0627</h2></div>
          <a href="https://www.linkedin.com/company/kacst---employment" target="_blank" rel="noopener">\u062a\u0627\u0628\u0639\u0646\u0627 \u0639\u0644\u0649 LinkedIn \u2190</a>
        </div>
        <p class="li-news-sub">\u0623\u062d\u062f\u062b \u0627\u0644\u0625\u0646\u062c\u0627\u0632\u0627\u062a \u0648\u0627\u0644\u0628\u0631\u0627\u0621\u0627\u062a \u0648\u0627\u0644\u0628\u0631\u0627\u0645\u062c \u0645\u0646 \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0644\u0643 \u0639\u0628\u062f\u0627\u0644\u0639\u0632\u064a\u0632 \u0644\u0644\u0639\u0644\u0648\u0645 \u0648\u0627\u0644\u062a\u0642\u0646\u064a\u0629.</p>
        <div class="li-news-scroll" id="liNews">
          <figure class="li-news-card" tabindex="0" data-limg="/intro/news-innovations-ar.jpg">
            <img src="/intro/news-innovations-ar.jpg" alt="\u0627\u0628\u062a\u0643\u0627\u0631\u0627\u062a \u0634\u0647\u0631 \u064a\u0648\u0644\u064a\u0648 2026" loading="lazy">
            <figcaption>\u0627\u0628\u062a\u0643\u0627\u0631\u0627\u062a \u0634\u0647\u0631 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0666: \u0628\u0631\u0627\u0621\u0627\u062a \u0627\u062e\u062a\u0631\u0627\u0639 \u0648\u0648\u0631\u0634 \u0639\u0645\u0644 \u0648\u0625\u0646\u062c\u0627\u0632\u0627\u062a \u0628\u062d\u062b\u064a\u0629</figcaption>
          </figure>
          <figure class="li-news-card" tabindex="0" data-limg="/intro/news-isef-champions.jpg">
            <img src="/intro/news-isef-champions.jpg" alt="\u0623\u0628\u0637\u0627\u0644 \u0627\u0644\u064a\u0648\u0645 \u0645\u0628\u062a\u0643\u0631\u0648 \u0627\u0644\u0645\u0633\u062a\u0642\u0628\u0644" loading="lazy">
            <figcaption>\u0627\u0644\u0627\u062d\u062a\u0641\u0627\u0621 \u0628\u0623\u0628\u0637\u0627\u0644 \u0627\u0644\u0645\u0646\u062a\u062e\u0628 \u0627\u0644\u0633\u0639\u0648\u062f\u064a \u0644\u0644\u0639\u0644\u0648\u0645 \u0648\u0627\u0644\u0647\u0646\u062f\u0633\u0629 \u0628\u0639\u062f \u0662\u0664 \u062c\u0627\u0626\u0632\u0629 \u062f\u0648\u0644\u064a\u0629 \u0641\u064a \u0622\u064a\u0633\u0641 \u0662\u0660\u0662\u0666</figcaption>
          </figure>
          <figure class="li-news-card" tabindex="0" data-limg="/intro/news-omar-yaghi.jpg">
            <img src="/intro/news-omar-yaghi.jpg" alt="\u0644\u0642\u0627\u0621 \u0627\u0644\u0628\u0631\u0648\u0641\u064a\u0633\u0648\u0631 \u0639\u0645\u0631 \u064a\u0627\u063a\u064a" loading="lazy">
            <figcaption>\u0627\u0644\u0628\u0631\u0648\u0641\u064a\u0633\u0648\u0631 \u0639\u0645\u0631 \u064a\u0627\u063a\u064a \u064a\u0634\u0627\u0631\u0643 \u0631\u062d\u0644\u062a\u0647 \u0627\u0644\u0639\u0644\u0645\u064a\u0629 \u0644\u0637\u0644\u0628\u0629 \u0628\u0631\u0646\u0627\u0645\u062c \u0645\u0648\u0647\u0628\u0629 \u0627\u0644\u0625\u062b\u0631\u0627\u0626\u064a \u0627\u0644\u0628\u062d\u062b\u064a</figcaption>
          </figure>
          <figure class="li-news-card" tabindex="0" data-limg="/intro/news-future-researcher.jpg">
            <img src="/intro/news-future-researcher.jpg" alt="\u062c\u0627\u0626\u0632\u0629 \u0628\u0627\u062d\u062b \u0627\u0644\u0645\u0633\u062a\u0642\u0628\u0644" loading="lazy">
            <figcaption>\u0661\u0660 \u0645\u0634\u0631\u0648\u0639\u0627\u062a \u0628\u062d\u062b\u064a\u0629 \u062a\u0641\u0648\u0632 \u0628\u062c\u0627\u0626\u0632\u0629 \u0628\u0627\u062d\u062b \u0627\u0644\u0645\u0633\u062a\u0642\u0628\u0644 \u0641\u064a \u0628\u0631\u0646\u0627\u0645\u062c \u0645\u0648\u0647\u0628\u0629 \u0627\u0644\u0625\u062b\u0631\u0627\u0626\u064a \u0662\u0660\u0662\u0666</figcaption>
          </figure>
          <figure class="li-news-card" tabindex="0" data-limg="/intro/news-skill-to-impact.jpg">
            <img src="/intro/news-skill-to-impact.jpg" alt="\u0643\u0627\u0643\u0633\u062a \u0645\u0646 \u0627\u0644\u0645\u0647\u0627\u0631\u0629 \u0625\u0644\u0649 \u0627\u0644\u0623\u062b\u0631" loading="lazy">
            <figcaption>\u0645\u0646 \u0627\u0644\u0645\u0647\u0627\u0631\u0629 \u0625\u0644\u0649 \u0627\u0644\u0623\u062b\u0631: \u062a\u0645\u0643\u064a\u0646 \u0627\u0644\u0634\u0628\u0627\u0628 \u0641\u064a \u0627\u0644\u0628\u062d\u062b \u0648\u0627\u0644\u0627\u0628\u062a\u0643\u0627\u0631 \u0648\u0631\u064a\u0627\u062f\u0629 \u0627\u0644\u0623\u0639\u0645\u0627\u0644</figcaption>
          </figure>
          <figure class="li-news-card" tabindex="0" data-limg="/intro/news-innovations-en.jpg">
            <img src="/intro/news-innovations-en.jpg" alt="Innovations of the Month \u2014 July 2026" loading="lazy">
            <figcaption>Innovations of the Month \u2014 July 2026</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <div class="li-lightbox" id="liLightbox" role="dialog" aria-modal="true" aria-label="\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631\u0629">
      <button id="liLbClose" aria-label="\u0625\u063a\u0644\u0627\u0642">\u2715</button>
      <img id="liLbImg" src="" alt="">
    </div>

    <section class="rd-cta">
      <h2 class="rd-rev">\u0645\u0643\u0627\u0646 \u0639\u0642\u0644\u0643 \u0647\u0646\u0627<span class="dot">.</span></h2>
      <p class="rd-rev">\u0623\u0631\u0633\u0644 \u0633\u064a\u0631\u062a\u0643 \u0627\u0644\u0630\u0627\u062a\u064a\u0629 \u0645\u0628\u0627\u0634\u0631\u0629 \u0644\u0641\u0631\u064a\u0642 \u0627\u0633\u062a\u0642\u0637\u0627\u0628 \u0627\u0644\u0643\u0641\u0627\u0621\u0627\u062a.</p>
      <button class="btn btn-primary rd-btn-lg" id="landingApply">\u0642\u062f\u0651\u0645 \u0627\u0644\u0622\u0646</button>
      <span class="rd-staff" id="landingSignIn">\u0645\u0646 \u0645\u0646\u0633\u0648\u0628\u064a \u0643\u0627\u0643\u0633\u062a\u061f \u0633\u062c\u0651\u0644 \u0627\u0644\u062f\u062e\u0648\u0644</span>

      <div class="landing-login" id="landingLogin">
        <div class="modal" style="max-width:none;text-align:center;">
          <div class="field" style="text-align:right;"><label>\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645</label><input type="text" id="loginUser" autocomplete="username" style="direction:ltr;text-align:left;"></div>
          <div class="field" style="text-align:right;"><label>\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631</label><input type="password" id="loginPass" autocomplete="current-password" style="direction:ltr;text-align:left;"></div>
          <div class="field" id="tfaField" style="display:none;text-align:right;">
            <label>\u0631\u0645\u0632 \u0627\u0644\u0645\u0635\u0627\u062f\u0642\u0629 \u0627\u0644\u062b\u0646\u0627\u0626\u064a\u0629 (\u0645\u0646 \u062a\u0637\u0628\u064a\u0642 Authenticator)</label>
            <input type="text" id="loginTotp" inputmode="numeric" autocomplete="one-time-code" maxlength="6" style="direction:ltr;text-align:center;letter-spacing:6px;font-size:18px;">
          </div>
          <div id="loginErr" style="color:var(--rd-rose);font-size:12px;min-height:18px;margin:4px 0 10px;"></div>
          <button class="btn btn-primary" id="loginBtn" style="width:100%;justify-content:center;">\u062f\u062e\u0648\u0644</button>
          <div style="margin-top:14px;"><span id="forgotLink" style="font-size:12px;color:var(--rd-mut);cursor:pointer;text-decoration:underline;">\u0646\u0633\u064a\u062a \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061f</span></div>
        </div>
      </div>
    </section>
    <div class="rd-foot">
      <span>\u00a9 \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0644\u0643 \u0639\u0628\u062f\u0627\u0644\u0639\u0632\u064a\u0632 \u0644\u0644\u0639\u0644\u0648\u0645 \u0648\u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u2014 \u0643\u0627\u0643\u0633\u062a</span>
      <span class="mono">KACST \u00b7 TALENT ACQUISITION</span>
    </div>`;
  document.body.appendChild(ov);

  document.getElementById('landingApply').onclick = ()=>{ location.href = '/?apply=1'; };
  document.getElementById('navApply').onclick = ()=>{ location.href = '/?apply=1'; };
  document.getElementById('navSignIn').onclick = ()=>{ document.getElementById('landingSignIn').click(); };
  // ---- Redesign wiring (video hero, explore, timeline, reveals, lightbox) ----
  document.getElementById('liHeroApply').onclick = ()=>{ location.href = '/?apply=1'; };
  const rdExplore = document.getElementById('rdExplore');
  if(rdExplore) rdExplore.onclick = ()=>{ const s=document.getElementById('rdSectors'); if(s) s.scrollIntoView({behavior:'smooth'}); };
  const liVideo = document.getElementById('liVideo');
  const liSound = document.getElementById('liSound');
  if(liSound && liVideo){
    liSound.onclick = ()=>{
      liVideo.muted = !liVideo.muted;
      liSound.textContent = liVideo.muted ? '\ud83d\udd07' : '\ud83d\udd0a';
      liSound.setAttribute('aria-label', liVideo.muted ? '\u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0635\u0648\u062a' : '\u0643\u062a\u0645 \u0627\u0644\u0635\u0648\u062a');
      if(!liVideo.muted) liVideo.play();
    };
  }
  const rdReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(liVideo && rdReduced){ liVideo.removeAttribute('autoplay'); liVideo.pause(); }
  // ---- Storyline engine: one rAF ticker drives chapters, photos, beam, and reveals ----
  const rdTl = document.getElementById('rdTimeline');
  const rdRevEls = Array.from(ov.querySelectorAll('.rd-rev'));
  if(rdReduced){
    rdRevEls.forEach(el=>el.classList.add('in'));
    if(rdTl) rdTl.querySelectorAll('.rd-ch').forEach(c=>{ c.style.opacity=1; c.classList.add('on'); });
  } else {
    const chs = rdTl ? Array.from(rdTl.querySelectorAll('.rd-ch')) : [];
    const photos = rdTl ? Array.from(rdTl.querySelectorAll('.rd-tl-photo')) : [];
    const dots = rdTl ? Array.from(rdTl.querySelectorAll('.rd-tl-dots .d')) : [];
    const beamFill = document.getElementById('rdBeamFill');
    const N = chs.length || 1;
    // clickable milestones
    dots.forEach(d=>{ d.onclick = ()=>{
      const i = +d.dataset.d;
      const total = rdTl.offsetHeight - window.innerHeight;
      ov.scrollTo({ top: rdTl.offsetTop + ((i + 0.5) / N) * total, behavior: 'smooth' });
    };});
    let rdLastY = -1;
    const rdFrame = ()=>{
      const y = ov.scrollTop;
      if(y !== rdLastY){
        rdLastY = y;
        const vh = window.innerHeight;
        // reveals
        for(const el of rdRevEls){
          if(el.classList.contains('in')) continue;
          const r = el.getBoundingClientRect();
          if(r.top < vh * 0.88 && r.bottom > 0) el.classList.add('in');
        }
        // timeline
        if(rdTl){
          const r = rdTl.getBoundingClientRect();
          const total = r.height - vh;
          const prog = Math.min(1, Math.max(0, -r.top / Math.max(1,total)));
          const pf = prog * N;                      // 0..N
          const idx = Math.min(N-1, Math.floor(pf));
          for(let i=0;i<N;i++){
            const d = pf - 0.5 - i;                 // 0 when chapter centered
            const v = Math.max(0, 1 - Math.abs(d) * 1.5);
            chs[i].style.opacity = v;
            chs[i].style.transform = `translateY(calc(-50% + ${(-d*46).toFixed(1)}px))`;
            chs[i].classList.toggle('on', i===idx);
            if(photos[i]) photos[i].style.opacity = (v * 0.35).toFixed(3);
          }
          if(beamFill) beamFill.style.height = (prog*100).toFixed(2) + '%';
          dots.forEach((dd,i)=>dd.classList.toggle('on', i<=idx));
        }
      }
      requestAnimationFrame(rdFrame);
    };
    requestAnimationFrame(rdFrame);
  }
  const liLb = document.getElementById('liLightbox');
  const liLbImg = document.getElementById('liLbImg');
  const liCloseLb = ()=>{ liLb.classList.remove('open'); liLbImg.src = ''; };
  document.getElementById('liNews').addEventListener('click', (e)=>{
    const c = e.target.closest('.li-news-card');
    if(c){ liLbImg.src = c.dataset.limg; liLbImg.alt = c.querySelector('img').alt; liLb.classList.add('open'); }
  });
  document.getElementById('liNews').addEventListener('keydown', (e)=>{
    if(e.key === 'Enter' || e.key === ' '){
      const c = e.target.closest('.li-news-card');
      if(c){ e.preventDefault(); liLbImg.src = c.dataset.limg; liLbImg.alt = c.querySelector('img').alt; liLb.classList.add('open'); }
    }
  });
  document.getElementById('liLbClose').onclick = liCloseLb;
  liLb.addEventListener('click', (e)=>{ if(e.target === liLb) liCloseLb(); });
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape' && liLb.classList.contains('open')) liCloseLb(); });
  const doLogin = async ()=>{
    const btn = document.getElementById('loginBtn');
    btn.disabled = true; btn.textContent = '\u062c\u0627\u0631\u064d \u0627\u0644\u062f\u062e\u0648\u0644\u2026';
    try{
      const r = await api.login({
        username: document.getElementById('loginUser').value.trim(),
        password: document.getElementById('loginPass').value,
        totpCode: (document.getElementById('loginTotp')?.value || '').trim()
      });
      if(r && r.twoFactorRequired){
        // Password accepted \u2014 now the authenticator code.
        document.getElementById('tfaField').style.display = '';
        const errEl = document.getElementById('loginErr');
        errEl.style.color = 'var(--muted)';
        errEl.textContent = '\u0623\u062f\u062e\u0644 \u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0645\u0643\u0648\u0651\u0646 \u0645\u0646 6 \u0623\u0631\u0642\u0627\u0645 \u0645\u0646 \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u0645\u0635\u0627\u062f\u0642\u0629.';
        btn.disabled = false; btn.textContent = '\u062a\u0623\u0643\u064a\u062f \u0627\u0644\u0631\u0645\u0632';
        setTimeout(()=>{ const t=document.getElementById('loginTotp'); if(t) t.focus(); }, 50);
        return;
      }
      CURRENT_USER = r;
      try{ sessionStorage.setItem('tad_alive','1'); }catch(e){}
      ov.remove();
      boot();
    }catch(e){
      const errEl = document.getElementById('loginErr');
      errEl.style.color = 'var(--rose)';
      errEl.textContent = e.message;
      btn.disabled = false; btn.textContent = '\u062f\u062e\u0648\u0644';
    }
  };
  document.getElementById('landingSignIn').onclick = ()=>{
    const card = document.getElementById('landingLogin');
    card.classList.add('open');
    card.scrollIntoView({behavior:'smooth', block:'center'});
    setTimeout(()=>{ const u=document.getElementById('loginUser'); if(u) u.focus(); }, 250);
  };
  document.getElementById('loginBtn').onclick = doLogin;
  ov.querySelectorAll('#landingLogin input').forEach(i=> i.onkeydown = e=>{ if(e.key==='Enter') doLogin(); });
  document.getElementById('forgotLink').onclick = async ()=>{
    const un = (document.getElementById('loginUser').value || '').trim()
      || (prompt('\u0627\u0643\u062a\u0628 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0644\u0625\u0631\u0633\u0627\u0644 \u0631\u0627\u0628\u0637 \u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u062a\u0639\u064a\u064a\u0646 \u0625\u0644\u0649 \u0628\u0631\u064a\u062f\u0647 \u0627\u0644\u0645\u0633\u062c\u0644:') || '').trim();
    if(!un) return;
    const errEl = document.getElementById('loginErr');
    errEl.style.color = 'var(--muted)';
    errEl.textContent = '\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644\u2026';
    try{
      const r = await api.forgotPassword({ username: un });
      errEl.style.color = 'var(--green)';
      errEl.textContent = r.message || '\u062a\u0645 \u0627\u0644\u0625\u0631\u0633\u0627\u0644 \u2014 \u062a\u062d\u0642\u0642 \u0645\u0646 \u0628\u0631\u064a\u062f\u0643.';
    }catch(e){
      errEl.style.color = 'var(--rose)';
      errEl.textContent = e.message;
    }
  };
}

// ---------------------------------------------------------
// PUBLIC APPLY PAGE \u2014 no login; submissions land in the DB.
// ---------------------------------------------------------
async function showApplyPage(){
  const brandImg2 = document.querySelector('.brand img');
  const ov = document.createElement('div');
  ov.className = 'landing';
  ov.innerHTML = `
    <div class="landing-nav">
      <div class="nb">
        ${brandImg2 ? `<img src="${brandImg2.src}" alt="KACST">` : ''}
        <div class="nt">\u0625\u062f\u0627\u0631\u0629 \u0627\u0633\u062a\u0642\u0637\u0627\u0628 \u0627\u0644\u0643\u0641\u0627\u0621\u0627\u062a<small>\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0644\u0643 \u0639\u0628\u062f\u0627\u0644\u0639\u0632\u064a\u0632 \u0644\u0644\u0639\u0644\u0648\u0645 \u0648\u0627\u0644\u062a\u0642\u0646\u064a\u0629</small></div>
      </div>
      <div class="na"><button class="btn btn-sm btn-ghost" onclick="location.href='/'">\u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629</button></div>
    </div>
    <div class="landing-inner" style="max-width:620px;">
      <div class="landing-hero" style="padding:10px 0 18px;">
        <span class="rd-join-kicker">/ JOIN KACST</span>
        <h1>\u0627\u0646\u0636\u0645 \u0625\u0644\u0649 <span class="g">\u0643\u0627\u0643\u0633\u062a</span>.</h1>
        <div class="tag">\u0639\u0631\u0651\u0641\u0646\u0627 \u0628\u0646\u0641\u0633\u0643 \u0648\u0623\u0631\u0641\u0642 \u0633\u064a\u0631\u062a\u0643 \u0627\u0644\u0630\u0627\u062a\u064a\u0629 \u2014 \u064a\u0642\u0631\u0624\u0647\u0627 \u0627\u0644\u0646\u0638\u0627\u0645 \u0648\u064a\u0639\u0628\u0651\u0626 \u0628\u064a\u0627\u0646\u0627\u062a\u0643 \u062a\u0644\u0642\u0627\u0626\u064a\u064b\u0627.</div>
      </div>

      <div class="ap-progress"><div class="ap-bar" id="apBar"></div></div>
      <div class="ap-steps">
        <span class="ap-step active" id="apDot1">\u0661 \u00b7 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0634\u062e\u0635\u064a\u0629</span>
        <span class="ap-step" id="apDot2">\u0662 \u00b7 \u0627\u0644\u062a\u0639\u0644\u064a\u0645 \u0648\u0627\u0644\u0633\u064a\u0631\u0629 \u0627\u0644\u0630\u0627\u062a\u064a\u0629</span>
      </div>

      <div class="modal" style="max-width:none;" id="applyCard">
        <div id="apStep1">
          <div class="field">
            <label>\u0627\u0644\u0633\u064a\u0631\u0629 \u0627\u0644\u0630\u0627\u062a\u064a\u0629 (PDF \u0623\u0648 DOCX) * \u2014 \u0627\u0631\u0641\u0639\u0647\u0627 \u0623\u0648\u0644\u064b\u0627 \u0644\u064a\u0642\u0631\u0623\u0647\u0627 \u0627\u0644\u0646\u0638\u0627\u0645 \u0648\u064a\u0639\u0628\u0651\u0626 \u0628\u064a\u0627\u0646\u0627\u062a\u0643 \u062a\u0644\u0642\u0627\u0626\u064a\u064b\u0627</label>
            <input type="file" id="apFile" accept=".pdf,.docx,.txt">
            <div id="apParseStatus" style="font-size:11.5px;color:var(--l-muted);margin-top:6px;min-height:16px;"></div>
          </div>
          <div class="field"><label>\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 *</label><input type="text" id="apName"></div>
          <div class="field-row">
            <div class="field"><label>\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0645\u064a\u0644\u0627\u062f</label><input type="date" id="apDob" style="direction:ltr;text-align:right;"></div>
            <div class="field"><label>${t('m_candcity')}</label><input type="text" id="apCity" placeholder="\u0627\u0644\u0631\u064a\u0627\u0636"></div>
          </div>
          <div class="field"><label>\u0627\u0644\u0639\u0646\u0648\u0627\u0646</label><input type="text" id="apAddress" placeholder="\u0627\u0644\u062d\u064a\u060c \u0627\u0644\u0634\u0627\u0631\u0639\u2026"></div>
          <div class="field-row">
            <div class="field"><label>\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a *</label><input type="email" id="apEmail" style="direction:ltr;text-align:left;"></div>
            <div class="field"><label>\u0631\u0642\u0645 \u0627\u0644\u062c\u0648\u0627\u0644</label><input type="tel" id="apPhone" style="direction:ltr;text-align:left;" placeholder="05xxxxxxxx"></div>
          </div>
          <div id="apErr1" style="color:var(--rose);font-size:12px;min-height:18px;"></div>
          <div class="modal-actions" style="border-top:none;padding-top:4px;">
            <button class="btn btn-primary" id="apNext" style="flex:1;justify-content:center;">\u0627\u0644\u062a\u0627\u0644\u064a \u2190</button>
          </div>
        </div>

        <div id="apStep2" style="display:none;">
          <div class="field-row">
            <div class="field"><label>${t('m_spec')}</label><input type="text" id="apSpec" placeholder="\u0645\u062b\u0627\u0644: \u0639\u0644\u0648\u0645 \u062d\u0627\u0633\u0628\u060c \u0647\u0646\u062f\u0633\u0629 \u0635\u0646\u0627\u0639\u064a\u0629\u2026"></div>
            <div class="field"><label>${t('m_degree')}</label>
              <select id="apDegree">
                <option value="">\u2014 \u0627\u062e\u062a\u0631 \u2014</option>
                <option>\u062b\u0627\u0646\u0648\u064a\u0629 \u0639\u0627\u0645\u0629</option><option>\u062f\u0628\u0644\u0648\u0645</option><option>\u0628\u0643\u0627\u0644\u0648\u0631\u064a\u0648\u0633</option>
                <option>\u0645\u0627\u062c\u0633\u062a\u064a\u0631</option><option>\u062f\u0643\u062a\u0648\u0631\u0627\u0647</option><option>\u0623\u062e\u0631\u0649</option>
              </select>
            </div>
          </div>
          <div class="field-row">
            <div class="field"><label>\u0627\u0644\u0631\u0627\u062a\u0628 \u0627\u0644\u062d\u0627\u0644\u064a (\u0631\u064a\u0627\u0644 \u0633\u0639\u0648\u062f\u064a)</label>
              <select id="apSalary">
                <option value="">\u2014 \u0627\u062e\u062a\u0631 \u2014</option>
                <option>1000 \u2013 5000</option>
                <option>5000 \u2013 10000</option>
                <option>10000 \u2013 15000</option>
                <option>15000 \u2013 20000</option>
                <option>20000 \u2013 30000</option>
                <option>30000 \u2013 45000</option>
                <option>45000 \u2013 60000</option>
                <option>\u0623\u0643\u062b\u0631 \u0645\u0646 60000</option>
                <option>\u0623\u0641\u0636\u0651\u0644 \u0639\u062f\u0645 \u0627\u0644\u0625\u0641\u0635\u0627\u062d</option>
              </select>
            </div>
            <div class="field"><label>\u0641\u062a\u0631\u0629 \u0627\u0644\u0625\u0634\u0639\u0627\u0631 (\u0645\u062f\u0629 \u0627\u0644\u062a\u0633\u0644\u064a\u0645 \u0641\u064a \u0639\u0645\u0644\u0643 \u0627\u0644\u062d\u0627\u0644\u064a)</label>
              <select id="apNotice">
                <option value="">\u2014 \u0627\u062e\u062a\u0631 \u2014</option>
                <option>\u0645\u062a\u0627\u062d \u0641\u0648\u0631\u064b\u0627</option>
                <option>\u0623\u0633\u0628\u0648\u0639\u0627\u0646</option>
                <option>\u0634\u0647\u0631</option>
                <option>\u0634\u0647\u0631\u0627\u0646</option>
                <option>\u062b\u0644\u0627\u062b\u0629 \u0623\u0634\u0647\u0631</option>
                <option>\u0623\u0643\u062b\u0631 \u0645\u0646 \u062b\u0644\u0627\u062b\u0629 \u0623\u0634\u0647\u0631</option>
              </select>
            </div>
          </div>

          <div id="apErr2" style="color:var(--rose);font-size:12px;min-height:18px;"></div>
          <div class="modal-actions" style="border-top:none;padding-top:4px;">
            <button class="btn btn-primary" id="apSubmit" style="flex:1;justify-content:center;">\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0637\u0644\u0628</button>
            <button class="btn btn-ghost" id="apPrev">\u2192 \u0627\u0644\u0633\u0627\u0628\u0642</button>
          </div>
        </div>
      </div>
      <div class="landing-foot">\u062a\u064f\u062d\u0641\u0638 \u0637\u0644\u0628\u0627\u062a \u0627\u0644\u062a\u0642\u062f\u064a\u0645 \u0645\u0628\u0627\u0634\u0631\u0629 \u0644\u062f\u0649 \u0641\u0631\u064a\u0642 \u0627\u0633\u062a\u0642\u0637\u0627\u0628 \u0627\u0644\u0643\u0641\u0627\u0621\u0627\u062a\u060c \u0648\u064a\u064f\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u0645\u0631\u0634\u062d\u064a\u0646 \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u064a\u0646.</div>
    </div>`;
  document.body.appendChild(ov);

  const bar = document.getElementById('apBar');
  const goStep = (n)=>{
    document.getElementById('apStep1').style.display = n===1?'':'none';
    document.getElementById('apStep2').style.display = n===2?'':'none';
    document.getElementById('apDot1').classList.toggle('active', n===1);
    document.getElementById('apDot2').classList.toggle('active', n===2);
    bar.style.width = n===1 ? '50%' : '100%';
    const card = document.getElementById('applyCard');
    card.style.animation='none'; void card.offsetWidth; card.style.animation='';
  };
  bar.style.width='50%';

  // ATS reads the CV the moment it's uploaded and fills the form on
  // the applicant's behalf \u2014 only fields they haven't typed into.
  document.getElementById('apFile').onchange = async (e)=>{
    const f = e.target.files[0];
    const st = document.getElementById('apParseStatus');
    if(!f) return;
    st.style.color = 'var(--l-muted)';
    st.textContent = '\u062c\u0627\u0631\u064d \u0642\u0631\u0627\u0621\u0629 \u0633\u064a\u0631\u062a\u0643\u2026';
    try{
      const text = await extractResumeText(f);
      if(!text || !text.trim()) throw new Error('\u062a\u0639\u0630\u0651\u0631\u062a \u0642\u0631\u0627\u0621\u0629 \u0646\u0635 \u0627\u0644\u0645\u0644\u0641 \u2014 \u0627\u0645\u0644\u0623 \u0627\u0644\u062d\u0642\u0648\u0644 \u064a\u062f\u0648\u064a\u064b\u0627');
      window.__apParsed = text;
      const fill = (id, val)=>{ const el = document.getElementById(id); if(el && val && !el.value.trim()) el.value = val; };
      fill('apName', guessNameFromText(text));
      fill('apEmail', guessEmailFromText(text));
      fill('apPhone', guessPhoneFromText(text));
      const degSel = document.getElementById('apDegree');
      if(degSel && !degSel.value) degSel.value = guessDegreeFromText(text);
      fill('apSpec', guessSpecializationFromText(text));
      fill('apCity', guessCityFromText(text));
      st.style.color = 'var(--green)';
      st.textContent = '\u2713 \u0642\u0631\u0623 \u0627\u0644\u0646\u0638\u0627\u0645 \u0633\u064a\u0631\u062a\u0643 \u0648\u0639\u0628\u0651\u0623 \u0645\u0627 \u0627\u0633\u062a\u0637\u0627\u0639 \u0645\u0646 \u0627\u0644\u062d\u0642\u0648\u0644 \u2014 \u0631\u0627\u062c\u0639\u0647\u0627 \u0648\u0623\u0643\u0645\u0644 \u0627\u0644\u0646\u0627\u0642\u0635.';
    }catch(err){
      st.style.color = 'var(--rose)';
      st.textContent = '\u2717 ' + err.message;
    }
  };

  document.getElementById('apNext').onclick = ()=>{
    const err = document.getElementById('apErr1');
    const name = document.getElementById('apName').value.trim();
    const email = document.getElementById('apEmail').value.trim();
    if(name.length < 3){ err.textContent = '\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 \u0645\u0637\u0644\u0648\u0628.'; return; }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ err.textContent = '\u0628\u0631\u064a\u062f \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0635\u062d\u064a\u062d \u0645\u0637\u0644\u0648\u0628.'; return; }
    err.textContent=''; goStep(2);
  };
  document.getElementById('apPrev').onclick = ()=>goStep(1);

  document.getElementById('apSubmit').onclick = async ()=>{
    const err = document.getElementById('apErr2');
    const btn = document.getElementById('apSubmit');
    const f = document.getElementById('apFile').files[0];
    if(!f){ err.textContent = '\u0625\u0631\u0641\u0627\u0642 \u0627\u0644\u0633\u064a\u0631\u0629 \u0627\u0644\u0630\u0627\u062a\u064a\u0629 \u0645\u0637\u0644\u0648\u0628 \u2014 \u0627\u0631\u062c\u0639 \u0644\u0644\u062e\u0637\u0648\u0629 \u0627\u0644\u0623\u0648\u0644\u0649 \u0648\u0627\u0631\u0641\u0639\u0647\u0627.'; return; }
    if(f.size > 10*1024*1024){ err.textContent = '\u062d\u062c\u0645 \u0627\u0644\u0645\u0644\u0641 \u064a\u062a\u062c\u0627\u0648\u0632 10MB.'; return; }
    btn.disabled = true; btn.textContent = '\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644\u2026'; err.textContent = '';
    const payload = {
      name: document.getElementById('apName').value.trim(),
      email: document.getElementById('apEmail').value.trim(),
      phone: document.getElementById('apPhone').value.trim(),
      dateOfBirth: document.getElementById('apDob').value,
      city: document.getElementById('apCity').value.trim(),
      address: document.getElementById('apAddress').value.trim(),
      specialization: document.getElementById('apSpec').value.trim(),
      degree: document.getElementById('apDegree').value,
      currentSalary: document.getElementById('apSalary').value,
      noticePeriod: document.getElementById('apNotice').value
    };
    try{
      payload.fileBase64 = await fileToBase64(f);
      payload.resumeFileName = f.name;
      const ext = f.name.split('.').pop().toLowerCase();
      payload.resumeFileType = ext;
      payload.mimeType = MIME_BY_EXT[ext] || 'application/octet-stream';
      // ATS reads the r\u00e9sum\u00e9 right here: extract text, then harvest
      // skills / experience / current title with the same parser the
      // internal bulk-import uses.
      try{
        const txt = window.__apParsed || await extractResumeText(f);
        if(txt && txt.trim()){
          payload.resumeText = txt;
          payload.skills = guessSkillsFromText(txt);
          payload.experienceYears = guessExperienceYears(txt);
          payload.currentTitle = guessJobTitleFromText(txt);
        }
      }catch(e){ /* text extraction is best-effort */ }
      await apiFetch('/api/public/apply', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload)});
      document.getElementById('applyCard').innerHTML = `
        <div style="text-align:center;padding:30px 6px;">
          <div class="ap-check">\u2713</div>
          <div class="display" style="font-size:22px;color:var(--l-ink);margin:14px 0 8px;">\u062a\u0645 \u0627\u0633\u062a\u0644\u0627\u0645 \u0637\u0644\u0628\u0643 \u0628\u0646\u062c\u0627\u062d</div>
          <div style="font-size:13.5px;color:var(--l-muted);line-height:1.9;">\u0634\u0643\u0631\u064b\u0627 ${esc(payload.name)} \u2014 \u0642\u0631\u0623 \u0627\u0644\u0646\u0638\u0627\u0645 \u0633\u064a\u0631\u062a\u0643 \u0627\u0644\u0630\u0627\u062a\u064a\u0629 \u0648\u0623\u0636\u0627\u0641\u0647\u0627 \u0644\u0642\u0627\u0639\u062f\u0629 \u0627\u0644\u0643\u0641\u0627\u0621\u0627\u062a\u060c<br>\u0648\u0633\u064a\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0627\u0644\u0641\u0631\u064a\u0642 \u0625\u0646 \u0643\u0627\u0646 \u0645\u0644\u0641\u0643 \u0645\u0646\u0627\u0633\u0628\u064b\u0627.</div>
          <div style="margin-top:20px;"><button class="btn btn-primary" onclick="location.href='/'">\u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629</button></div>
        </div>`;
      document.getElementById('apBar').style.width='100%';
    }catch(e){
      err.textContent = e.message;
      btn.disabled = false; btn.textContent = '\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0637\u0644\u0628';
    }
  };
}

function openChangePassword(){
  openModal(`
    <div class="modal-head"><h2>\u062a\u063a\u064a\u064a\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631</h2><span class="xbtn" onclick="closeModal()">\u00d7</span></div>
    <div class="field"><label>\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062d\u0627\u0644\u064a\u0629</label><input type="password" id="cpCur" autocomplete="current-password" style="direction:ltr;text-align:left;"></div>
    <div class="field"><label>\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 (8 \u0623\u062d\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644)</label><input type="password" id="cpNew" autocomplete="new-password" style="direction:ltr;text-align:left;"></div>
    <div class="field"><label>\u062a\u0623\u0643\u064a\u062f \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062c\u062f\u064a\u062f\u0629</label><input type="password" id="cpNew2" autocomplete="new-password" style="direction:ltr;text-align:left;"></div>
    <div id="cpErr" style="color:var(--rose);font-size:12px;min-height:18px;"></div>
    <div class="modal-actions"><button class="btn btn-primary" id="cpSave">\u062d\u0641\u0638</button>
    <button class="btn btn-ghost" onclick="closeModal()">\u0625\u0644\u063a\u0627\u0621</button></div>`);
  document.getElementById('cpSave').onclick = async ()=>{
    const cur = document.getElementById('cpCur').value;
    const nw = document.getElementById('cpNew').value;
    const nw2 = document.getElementById('cpNew2').value;
    const err = document.getElementById('cpErr');
    if(nw.length < 8){ err.textContent = '\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 \u064a\u062c\u0628 \u0623\u0644\u0627 \u062a\u0642\u0644 \u0639\u0646 8 \u0623\u062d\u0631\u0641.'; return; }
    if(nw !== nw2){ err.textContent = '\u0643\u0644\u0645\u062a\u0627 \u0627\u0644\u0645\u0631\u0648\u0631 \u063a\u064a\u0631 \u0645\u062a\u0637\u0627\u0628\u0642\u062a\u064a\u0646.'; return; }
    try{
      await api.changePassword({ currentPassword: cur, newPassword: nw });
      closeModal();
      alert('\u062a\u0645 \u062a\u063a\u064a\u064a\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0628\u0646\u062c\u0627\u062d.');
    }catch(e){ err.textContent = e.message; }
  };
}

function applyTheme(t){
  try{ localStorage.setItem('tad_theme', t); }catch(e){}
  if(t === 'dark' || t === 'light') document.documentElement.setAttribute('data-theme', t);
  else document.documentElement.removeAttribute('data-theme');
}
function currentTheme(){
  try{ return localStorage.getItem('tad_theme') || 'aurora'; }catch(e){ return 'aurora'; }
}

async function openEnable2FA(){
  let setup;
  try{ setup = await api.tfaSetup(); }
  catch(e){ alert(e.message); return; }
  openModal(`
    <div class="modal-head"><h2>\u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u0645\u0635\u0627\u062f\u0642\u0629 \u0627\u0644\u062b\u0646\u0627\u0626\u064a\u0629</h2><span class="xbtn" onclick="closeModal()">\u00d7</span></div>
    <div style="font-size:13px;line-height:2;margin-bottom:14px;">
      \u0661 \u2014 \u0627\u0641\u062a\u062d \u062a\u0637\u0628\u064a\u0642 \u0645\u0635\u0627\u062f\u0642\u0629 \u0639\u0644\u0649 \u062c\u0648\u0627\u0644\u0643 (Google Authenticator \u0623\u0648 Microsoft Authenticator)<br>
      \u0662 \u2014 \u0627\u062e\u062a\u0631 \u00ab\u0625\u0636\u0627\u0641\u0629 \u062d\u0633\u0627\u0628\u00bb \u062b\u0645 \u00ab\u0645\u0633\u062d \u0631\u0645\u0632 QR\u00bb \u0648\u0648\u062c\u0651\u0647 \u0627\u0644\u0643\u0627\u0645\u064a\u0631\u0627 \u0644\u0644\u0631\u0645\u0632:
    </div>
    <div id="tfaQrWrap" style="display:flex;justify-content:center;margin-bottom:12px;">
      <div id="tfaQr" style="background:#ffffff;padding:12px;border-radius:10px;line-height:0;"></div>
    </div>
    <details style="margin:0 0 16px;">
      <summary style="cursor:pointer;font-size:11.5px;color:var(--muted);">\u062a\u0639\u0630\u0651\u0631 \u0627\u0644\u0645\u0633\u062d\u061f \u0623\u062f\u062e\u0644 \u0627\u0644\u0645\u0641\u062a\u0627\u062d \u064a\u062f\u0648\u064a\u064b\u0627</summary>
      <div class="mono" style="background:rgba(8,26,44,0.5);border:1px solid var(--line);border-radius:var(--radius-sm);padding:14px;text-align:center;font-size:15px;letter-spacing:2px;user-select:all;direction:ltr;margin-top:8px;">${esc(setup.secret)}</div>
      <div style="font-size:11.5px;color:var(--muted);margin-top:6px;">\u0623\u0648 \u0645\u0646 \u0627\u0644\u062c\u0648\u0627\u0644 \u0627\u0641\u062a\u062d: <a href="${esc(setup.otpauth)}" style="color:var(--teal);">\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u0645\u0635\u0627\u062f\u0642\u0629</a></div>
    </details>
    <div class="field"><label>\u0663 \u2014 \u0623\u062f\u062e\u0644 \u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0638\u0627\u0647\u0631 \u0641\u064a \u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u0622\u0646 \u0644\u0644\u062a\u0623\u0643\u064a\u062f</label>
      <input type="text" id="tfaCode" inputmode="numeric" maxlength="6" style="direction:ltr;text-align:center;letter-spacing:6px;font-size:18px;"></div>
    <div id="tfaErr" style="color:var(--rose);font-size:12px;min-height:18px;"></div>
    <div class="modal-actions">
      <button class="btn btn-primary" id="tfaConfirm">\u062a\u0623\u0643\u064a\u062f \u0648\u062a\u0641\u0639\u064a\u0644</button>
      <button class="btn btn-ghost" onclick="closeModal()">\u0625\u0644\u063a\u0627\u0621</button>
    </div>`);
  try{
    if(typeof QRCode !== 'undefined'){
      new QRCode(document.getElementById('tfaQr'), {
        text: setup.otpauth, width: 176, height: 176,
        correctLevel: QRCode.CorrectLevel.M
      });
    } else {
      document.getElementById('tfaQrWrap').innerHTML =
        '<div style="font-size:12px;color:var(--muted);">\u062a\u0639\u0630\u0651\u0631 \u062a\u0648\u0644\u064a\u062f \u0631\u0645\u0632 QR \u2014 \u0627\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u064a\u062f\u0648\u064a \u0623\u062f\u0646\u0627\u0647.</div>';
    }
  }catch(e){}
  document.getElementById('tfaConfirm').onclick = async ()=>{
    try{
      await api.tfaVerify({ code: document.getElementById('tfaCode').value.trim() });
      CURRENT_USER.totpEnabled = true;
      closeModal();
      alert('\u062a\u0645 \u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u0645\u0635\u0627\u062f\u0642\u0629 \u0627\u0644\u062b\u0646\u0627\u0626\u064a\u0629 \u2014 \u0645\u0646 \u0627\u0644\u0622\u0646 \u0633\u064a\u064f\u0637\u0644\u0628 \u0631\u0645\u0632 \u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u0645\u0639 \u0643\u0644 \u062a\u0633\u062c\u064a\u0644 \u062f\u062e\u0648\u0644.');
    }catch(e){ document.getElementById('tfaErr').textContent = e.message; }
  };
}

async function openDisable2FA(){
  openModal(`
    <div class="modal-head"><h2>\u062a\u0639\u0637\u064a\u0644 \u0627\u0644\u0645\u0635\u0627\u062f\u0642\u0629 \u0627\u0644\u062b\u0646\u0627\u0626\u064a\u0629</h2><span class="xbtn" onclick="closeModal()">\u00d7</span></div>
    <div class="field"><label>\u0623\u062f\u062e\u0644 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631\u0643 \u0644\u0644\u062a\u0623\u0643\u064a\u062f</label>
      <input type="password" id="tfaPw" autocomplete="current-password" style="direction:ltr;text-align:left;"></div>
    <div id="tfaErr" style="color:var(--rose);font-size:12px;min-height:18px;"></div>
    <div class="modal-actions">
      <button class="btn btn-danger" id="tfaOff">\u062a\u0639\u0637\u064a\u0644</button>
      <button class="btn btn-ghost" onclick="closeModal()">\u0625\u0644\u063a\u0627\u0621</button>
    </div>`);
  document.getElementById('tfaOff').onclick = async ()=>{
    try{
      await api.tfaDisable({ password: document.getElementById('tfaPw').value });
      CURRENT_USER.totpEnabled = false;
      closeModal();
      alert('\u062a\u0645 \u062a\u0639\u0637\u064a\u0644 \u0627\u0644\u0645\u0635\u0627\u062f\u0642\u0629 \u0627\u0644\u062b\u0646\u0627\u0626\u064a\u0629.');
    }catch(e){ document.getElementById('tfaErr').textContent = e.message; }
  };
}

async function doLogout(){
  try{ sessionStorage.removeItem('tad_alive'); }catch(e){}
  try{ await api.logout(); }catch(e){}
  location.reload();
}

/* ---------------------------------------------------------
   VIEW: AUDIT LOG
--------------------------------------------------------- */
async function viewAudit(){
  const rows = await api.audit({ limit: 150 });
  return `
  <div class="page-head">
    <div><h1>\u0633\u062c\u0644 \u0627\u0644\u062a\u062f\u0642\u064a\u0642</h1><div class="sub">\u0643\u0644 \u062a\u063a\u064a\u064a\u0631 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u0634\u062d\u064a\u0646 \u0648\u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0648\u0627\u0644\u062a\u0642\u064a\u064a\u0645\u0627\u062a \u2014 \u0645\u0646 \u0642\u0627\u0645 \u0628\u0647 \u0648\u0645\u062a\u0649. \u064a\u0633\u062c\u0644 \u062a\u0644\u0642\u0627\u0626\u064a\u064b\u0627 \u0648\u0644\u0627 \u064a\u0645\u0643\u0646 \u062a\u0639\u062f\u064a\u0644\u0647 \u0645\u0646 \u0627\u0644\u0648\u0627\u062c\u0647\u0629.</div></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <span class="btn btn-ghost" style="cursor:default;">\u0623\u0646\u062a: ${esc(CURRENT_USER ? CURRENT_USER.displayName : '')}</span>
      <button class="btn btn-ghost" id="btnChangePw">\u062a\u063a\u064a\u064a\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631</button>
      <button class="btn btn-danger" id="btnLogout">\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c</button>
    </div>
  </div>
  ${rows.length ? `<table><thead><tr><th>\u0627\u0644\u0648\u0642\u062a</th><th>\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645</th><th>\u0627\u0644\u0625\u062c\u0631\u0627\u0621</th><th>\u0627\u0644\u0645\u0631\u0634\u062d</th><th>\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644</th></tr></thead><tbody>
    ${rows.map(r=>`<tr>
      <td class="mono" style="font-size:11px;color:var(--muted);white-space:nowrap">${new Date(r.at).toLocaleString('ar-EG')}</td>
      <td><strong>${esc(r.actor)}</strong></td>
      <td><span class="chip ar">${esc(r.action)}</span></td>
      <td>${r.candidateName ? (r.candidateId ? `<span class="rowlink" data-cand="${r.candidateId}" style="cursor:pointer"><strong>${esc(r.candidateName)}</strong></span>` : esc(r.candidateName)) : '\u2014'}</td>
      <td style="color:var(--muted);font-size:12px;">${esc(r.details||'\u2014')}</td>
    </tr>`).join('')}
  </tbody></table>` : emptyState('\u0644\u0627 \u062a\u0648\u062c\u062f \u062a\u063a\u064a\u064a\u0631\u0627\u062a \u0645\u0633\u062c\u0644\u0629 \u0628\u0639\u062f', '\u0623\u064a \u0625\u0636\u0627\u0641\u0629 \u0623\u0648 \u062a\u0639\u062f\u064a\u0644 \u0623\u0648 \u0646\u0642\u0644 \u0645\u0631\u062d\u0644\u0629 \u0633\u064a\u0638\u0647\u0631 \u0647\u0646\u0627 \u0641\u0648\u0631 \u062d\u062f\u0648\u062b\u0647.')}
  `;
}

/* ---------------------------------------------------------
   MODALS
--------------------------------------------------------- */
function openModal(html){
  document.getElementById('modalRoot').innerHTML = html;
  document.getElementById('overlay').classList.add('open');
}
function closeModal(){
  document.getElementById('overlay').classList.remove('open');
}
document.getElementById('overlay').addEventListener('click', e=>{
  if(e.target.id==='overlay') closeModal();
});

function jobOptions(selectedId){
  return `<option value="">\u2014 \u0628\u062f\u0648\u0646 \u2014</option>` + DB.jobs.map(j=>`<option value="${j.id}" ${selectedId===j.id?'selected':''}>${esc(j.title)}</option>`).join('');
}

function openAddCandidate(editId, presetJobId){
  const editing = editId ? DB.candidates.find(c=>c.id===editId) : null;
  const presetJob = (!editing && presetJobId) ? DB.jobs.find(j=>j.id===presetJobId) : null;
  let pendingFile = null;
  openModal(`
    <div class="modal-head"><h2>${editing?t('edit_cand_h'):t('add_cand_h')}</h2><span class="xbtn" id="mClose">&times;</span></div>
    ${presetJob ? `<div style="background:var(--panel-2);border:1px solid var(--line);border-radius:var(--radius);padding:10px 14px;font-size:12.5px;margin-bottom:14px;">\u0633\u064a\u064f\u0636\u0627\u0641 \u0647\u0630\u0627 \u0627\u0644\u0645\u0631\u0634\u062d \u0645\u0628\u0627\u0634\u0631\u0629 \u0625\u0644\u0649: <strong>${esc(presetJob.title)}</strong></div>` : ''}
    <div class="field">
      <label>${t('m_uploadcv')}</label>
      <input type="file" id="fResumeFile" accept=".pdf,.docx,.txt">
      <div id="fUploadStatus" class="mono" style="font-size:11px;color:var(--muted);margin-top:6px;direction:rtl;font-family:'Tajawal',sans-serif;"></div>
    </div>
    <div class="field"><label>${t('m_fullname')}</label><input type="text" id="fName" value="${editing?esc(editing.name):''}"></div>
    <div class="field-row">
      <div class="field"><label>${t('m_email')}</label><input type="email" id="fEmail" value="${editing?esc(editing.email||''):''}"></div>
      <div class="field"><label>${t('m_phone')}</label><input type="tel" id="fPhone" value="${editing?esc(editing.phone||''):''}"></div>
    </div>
    <div class="field-row">
      <div class="field"><label>${t('m_source')}</label>
        <select id="fSource">
          ${(()=>{
            const SOURCES = ['','\u0644\u064a\u0646\u0643\u062f\u0625\u0646','\u0645\u0646\u0635\u0629 \u0647\u062f\u0641','\u0645\u0646\u0635\u0629 \u062c\u062f\u0627\u0631\u0627\u062a','\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u062a\u0648\u0638\u064a\u0641','\u062a\u0631\u0634\u064a\u062d \u062f\u0627\u062e\u0644\u064a','\u0645\u0639\u0631\u0636 \u062a\u0648\u0638\u064a\u0641','\u0627\u0644\u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u0645\u0628\u0627\u0634\u0631','\u0623\u062e\u0631\u0649'];
            const cur = editing ? (editing.source||'') : '';
            const opts = SOURCES.includes(cur) ? SOURCES : SOURCES.concat([cur]);
            return opts.map(s=>`<option value="${esc(s)}" ${cur===s?'selected':''}>${s===''?'\u2014 \u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0635\u062f\u0631 \u2014':esc(s)}</option>`).join('');
          })()}
        </select>
      </div>
      <div class="field"><label>${t('m_expyears')}</label><input type="number" id="fExp" min="0" value="${editing?editing.experienceYears||0:0}"></div>
    </div>
    <div class="field"><label>${t('m_curtitle')}</label><input type="text" id="fTitle" placeholder="\u0645\u062b\u0627\u0644: \u0645\u0647\u0646\u062f\u0633 \u0628\u0631\u0645\u062c\u064a\u0627\u062a \u0623\u0648\u0644" value="${editing?esc(editing.currentTitle||''):''}"></div>
    <div class="field"><label>${t('m_appliedfor')}</label><select id="fJob" ${presetJob?'disabled':''}>${jobOptions(editing?editing.appliedFor:(presetJob?presetJob.id:null))}</select></div>
    <div class="field-row">
      <div class="field"><label>${t('m_spec')}</label><input type="text" id="fSpec" value="${editing?esc(editing.specialization||''):''}"></div>
      <div class="field"><label>${t('m_degree')}</label>
        <select id="fDegree">
          ${(()=>{
            const DEGS=['','\u062b\u0627\u0646\u0648\u064a\u0629 \u0639\u0627\u0645\u0629','\u062f\u0628\u0644\u0648\u0645','\u0628\u0643\u0627\u0644\u0648\u0631\u064a\u0648\u0633','\u0645\u0627\u062c\u0633\u062a\u064a\u0631','\u062f\u0643\u062a\u0648\u0631\u0627\u0647','\u0623\u062e\u0631\u0649'];
            const cur = editing ? (editing.degree||'') : '';
            const opts = DEGS.includes(cur) ? DEGS : DEGS.concat([cur]);
            return opts.map(d=>`<option value="${esc(d)}" ${cur===d?'selected':''}>${d===''?'\u2014 \u0627\u062e\u062a\u0631 \u2014':esc(d)}</option>`).join('');
          })()}
        </select>
      </div>
      <div class="field"><label>${t('m_candcity')}</label><input type="text" id="fCity" value="${editing?esc(editing.city||''):''}"></div>
    </div>
    <div class="field"><label>${t('m_skills')}</label><input type="text" id="fSkills" placeholder="javascript, react, leadership" value="${editing?esc(editing.skills.join(', ')):''}"></div>
    <textarea id="fResume" style="display:none;">${editing?esc(editing.resumeText||''):''}</textarea>
    <div class="modal-actions">
      <button class="btn btn-ghost" id="mCancel">\u0625\u0644\u063a\u0627\u0621</button>
      <button class="btn btn-primary" id="mSave">${editing?t('save_changes'):t('save_cand')}</button>
    </div>
  `);
  document.getElementById('mClose').onclick = closeModal;
  document.getElementById('mCancel').onclick = closeModal;

  document.getElementById('fResumeFile').onchange = async (e)=>{
    const file = e.target.files[0];
    if(!file) return;
    const status = document.getElementById('fUploadStatus');
    status.style.color = 'var(--muted)';
    status.textContent = '\u062c\u0627\u0631\u064d \u0642\u0631\u0627\u0621\u0629 ' + file.name + '\u2026';
    try{
      const text = await extractResumeText(file);
      pendingFile = file;
      document.getElementById('fResume').value = text;
      const nameField = document.getElementById('fName');
      if(!nameField.value.trim()){
        nameField.value = guessNameFromText(text) || guessNameFromFilename(file.name);
      }
      const emailField = document.getElementById('fEmail');
      if(!emailField.value.trim()){
        emailField.value = guessEmailFromText(text);
      }
      const phoneField = document.getElementById('fPhone');
      if(!phoneField.value.trim()){
        phoneField.value = guessPhoneFromText(text);
      }
      const specField = document.getElementById('fSpec');
      if(specField && !specField.value.trim()) specField.value = guessSpecializationFromText(text);
      const degField = document.getElementById('fDegree');
      if(degField && !degField.value) degField.value = guessDegreeFromText(text);
      const cityField = document.getElementById('fCity');
      if(cityField && !cityField.value.trim()) cityField.value = guessCityFromText(text);
      const titleField = document.getElementById('fTitle');
      if(!titleField.value.trim()){
        titleField.value = guessJobTitleFromText(text);
      }
      const skillsField = document.getElementById('fSkills');
      if(!skillsField.value.trim()){
        skillsField.value = guessSkillsFromText(text).join(', ');
      }
      const expField = document.getElementById('fExp');
      if(!Number(expField.value)){
        expField.value = guessExperienceYears(text);
      }
      status.textContent = '\u2713 \u062a\u0645 \u0627\u0633\u062a\u062e\u0631\u0627\u062c ' + text.length.toLocaleString() + ' \u062d\u0631\u0641\u064b\u0627 \u0645\u0646 ' + file.name + '. \u0631\u0627\u062c\u0639 \u0627\u0644\u062d\u0642\u0648\u0644 \u0623\u062f\u0646\u0627\u0647 \u2014 \u0642\u062f \u062a\u062d\u062a\u0627\u062c \u0628\u0639\u0636\u0647\u0627 \u0644\u062a\u0639\u062f\u064a\u0644 \u064a\u062f\u0648\u064a.';
    }catch(err){
      status.textContent = '\u2717 ' + err.message;
      status.style.color = 'var(--rose)';
    }
  };

  document.getElementById('mSave').onclick = async ()=>{
    const name = document.getElementById('fName').value.trim();
    if(!name){ alert('\u0627\u0644\u0627\u0633\u0645 \u0645\u0637\u0644\u0648\u0628.'); return; }
    const payload = {
      name,
      email: document.getElementById('fEmail').value.trim(),
      phone: document.getElementById('fPhone').value.trim(),
      currentTitle: document.getElementById('fTitle').value.trim(),
      source: document.getElementById('fSource').value,
      experienceYears: Number(document.getElementById('fExp').value)||0,
      appliedFor: presetJob ? presetJob.id : (document.getElementById('fJob').value || null),
      skills: document.getElementById('fSkills').value.split(',').map(s=>s.trim()).filter(Boolean),
      resumeText: document.getElementById('fResume').value.trim(),
      specialization: document.getElementById('fSpec').value.trim(),
      degree: document.getElementById('fDegree').value,
      city: document.getElementById('fCity').value.trim(),
    };
    // Attach the original file (base64) so the server can store it
    // alongside the record in a single transaction.
    if(pendingFile){
      const ext = pendingFile.name.split('.').pop().toLowerCase();
      payload.fileBase64 = await fileToBase64(pendingFile);
      payload.resumeFileName = pendingFile.name;
      payload.resumeFileType = ext;
      payload.mimeType = MIME_BY_EXT[ext] || 'application/octet-stream';
    }
    await mutate(()=> editing
      ? api.updateCandidate(editing.id, payload)
      : api.createCandidate(payload));
    closeModal(); render();
  };
}

async function openBulkImport(presetJobId){
  const presetJob = presetJobId ? DB.jobs.find(j=>j.id===presetJobId) : null;
  openModal(`
    <div class="modal-head"><h2>${presetJob ? '\u0627\u0633\u062a\u064a\u0631\u0627\u062f \u0633\u064a\u0631 \u0630\u0627\u062a\u064a\u0629 \u2014 '+esc(presetJob.title) : '\u0627\u0633\u062a\u064a\u0631\u0627\u062f \u0627\u0644\u0633\u064a\u0631 \u0627\u0644\u0630\u0627\u062a\u064a\u0629'}</h2><span class="xbtn" id="mClose">&times;</span></div>
    ${presetJob
      ? `<div style="background:var(--panel-2);border:1px solid var(--line);border-radius:var(--radius);padding:10px 14px;font-size:12.5px;margin-bottom:14px;">\u0643\u0644 \u0645\u0631\u0634\u062d \u062a\u0633\u062a\u0648\u0631\u062f\u0647 \u0647\u0646\u0627 \u0633\u064a\u064f\u0636\u0627\u0641 \u0645\u0628\u0627\u0634\u0631\u0629 \u0625\u0644\u0649: <strong>${esc(presetJob.title)}</strong> \u2014 \u062f\u0648\u0646 \u0627\u0644\u062d\u0627\u062c\u0629 \u0644\u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0648\u0638\u064a\u0641\u0629 \u064a\u062f\u0648\u064a\u064b\u0627.</div>`
      : `<div style="background:var(--panel-2);border:1px solid var(--line);border-radius:var(--radius);padding:10px 14px;font-size:12.5px;margin-bottom:14px;">\u0627\u0633\u062a\u064a\u0631\u0627\u062f \u0639\u0627\u0645 \u062f\u0648\u0646 \u062a\u062d\u062f\u064a\u062f \u0648\u0638\u064a\u0641\u0629 \u2014 \u064a\u0645\u0643\u0646\u0643 \u0631\u0628\u0637 \u0643\u0644 \u0645\u0631\u0634\u062d \u0628\u0648\u0638\u064a\u0641\u0629 \u0644\u0627\u062d\u0642\u064b\u0627 \u0645\u0646 \u062e\u0644\u0627\u0644 "\u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a". \u0644\u0631\u0628\u0637 \u062f\u0641\u0639\u0629 \u0643\u0627\u0645\u0644\u0629 \u0628\u0648\u0638\u064a\u0641\u0629 \u0645\u0639\u064a\u0646\u0629 \u0645\u0628\u0627\u0634\u0631\u0629\u060c \u0627\u0633\u062a\u0648\u0631\u062f \u0645\u0646 \u0635\u0641\u062d\u0629 \u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u0634\u0627\u063a\u0631\u0629 \u0628\u062f\u0644\u064b\u0627 \u0645\u0646 \u0630\u0644\u0643.</div>`
    }
    <div class="field">
      <label>\u0627\u062e\u062a\u0631 \u0639\u062f\u0629 \u0645\u0644\u0641\u0627\u062a \u0633\u064a\u0631 \u0630\u0627\u062a\u064a\u0629 (PDF \u0623\u0648 DOCX \u0623\u0648 TXT)</label>
      <input type="file" id="fBulkFiles" accept=".pdf,.docx,.txt" multiple>
    </div>
    <div id="bulkStatus" style="font-size:12.5px;color:var(--muted);margin-top:10px;line-height:1.8;"></div>
    <div class="modal-actions">
      <button class="btn btn-ghost" id="mCancel">\u0625\u063a\u0644\u0627\u0642</button>
    </div>
  `);
  document.getElementById('mClose').onclick = ()=>{ closeModal(); render(); };
  document.getElementById('mCancel').onclick = ()=>{ closeModal(); render(); };
  document.getElementById('fBulkFiles').onchange = async (e)=>{
    const files = Array.from(e.target.files);
    const status = document.getElementById('bulkStatus');
    status.innerHTML = '';
    let ok = 0, failed = 0;
    for(const file of files){
      const line = document.createElement('div');
      line.textContent = '\u062c\u0627\u0631\u064d \u0642\u0631\u0627\u0621\u0629 ' + file.name + '\u2026';
      status.appendChild(line);
      try{
        const text = await extractResumeText(file);
        const fileExt = file.name.split('.').pop().toLowerCase();
        const guessedName = guessNameFromText(text) || guessNameFromFilename(file.name);
        // Each r\u00e9sum\u00e9 is posted individually, so one bad file can't
        // fail the whole batch.
        await api.createCandidate({
          name: guessedName,
          email: guessEmailFromText(text),
          phone: guessPhoneFromText(text),
          currentTitle: guessJobTitleFromText(text),
          specialization: guessSpecializationFromText(text),
          degree: guessDegreeFromText(text),
          city: guessCityFromText(text),
          source: presetJob ? ('\u0627\u0633\u062a\u064a\u0631\u0627\u062f \u0644\u0648\u0638\u064a\u0641\u0629: ' + presetJob.title) : '\u0627\u0633\u062a\u064a\u0631\u0627\u062f \u0633\u064a\u0631\u0629 \u0630\u0627\u062a\u064a\u0629',
          experienceYears: guessExperienceYears(text),
          appliedFor: presetJob ? presetJob.id : null,
          skills: guessSkillsFromText(text),
          resumeText: text,
          fileBase64: await fileToBase64(file),
          resumeFileName: file.name,
          resumeFileType: fileExt,
          mimeType: MIME_BY_EXT[fileExt] || 'application/octet-stream'
        });
        line.textContent = '\u2713 ' + file.name + ' \u2190 \u0623\u0636\u064a\u0641 \u0628\u0627\u0633\u0645 "' + guessedName + '"' + (presetJob ? ' \u2014 \u0627\u0644\u0648\u0638\u064a\u0641\u0629: ' + presetJob.title : '');
        line.style.color = '#5fb87a';
        ok++;
      }catch(err){
        line.textContent = '\u2717 ' + file.name + ' \u2014 ' + err.message;
        line.style.color = 'var(--rose)';
        failed++;
      }
    }
    const summary = document.createElement('div');
    summary.style.marginTop='10px'; summary.style.fontWeight='700';
    summary.textContent = presetJob
      ? `\u062a\u0645 \u2014 \u0623\u064f\u0636\u064a\u0641 ${ok} \u0645\u0631\u0634\u062d\u064b\u0627 \u0625\u0644\u0649 "${presetJob.title}"${failed?`\u060c \u0648\u0641\u0634\u0644 ${failed}`:''}. \u0631\u0627\u062c\u0639 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0645\u0633\u062a\u062e\u0631\u062c\u0629 \u062a\u0644\u0642\u0627\u0626\u064a\u064b\u0627 \u0644\u0643\u0644 \u0645\u0631\u0634\u062d \u0644\u0644\u062a\u0623\u0643\u062f \u0645\u0646 \u062f\u0642\u062a\u0647\u0627.`
      : `\u062a\u0645 \u2014 \u0623\u064f\u0636\u064a\u0641 ${ok}${failed?`\u060c \u0648\u0641\u0634\u0644 ${failed}`:''}. \u0631\u0627\u062c\u0639 \u0643\u0644 \u0645\u0631\u0634\u062d \u0644\u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0648\u0638\u064a\u0641\u0629 \u0648\u0627\u0644\u062a\u0623\u0643\u062f \u0645\u0646 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0645\u0633\u062a\u062e\u0631\u062c\u0629 \u062a\u0644\u0642\u0627\u0626\u064a\u064b\u0627.`;
    status.appendChild(summary);
  };
}

async function deleteJob(jobId){
  const job = DB.jobs.find(j=>j.id===jobId);
  if(!job) return;
  const linked = job.candidateCount || 0;
  const msg = linked>0
    ? `\u0647\u0630\u0647 \u0627\u0644\u0648\u0638\u064a\u0641\u0629 ("${job.title}") \u0645\u0631\u062a\u0628\u0637\u0629 \u062d\u0627\u0644\u064a\u064b\u0627 \u0628\u0640 ${linked} \u0645\u0631\u0634\u062d. \u062d\u0630\u0641\u0647\u0627 \u0633\u064a\u064f\u0644\u063a\u064a \u0631\u0628\u0637\u0647\u0645 \u0628\u0647\u0627 \u0641\u0642\u0637 (\u062a\u0628\u0642\u0649 \u0628\u064a\u0627\u0646\u0627\u062a\u0647\u0645 \u0648\u0633\u064a\u0631\u0647\u0645 \u0627\u0644\u0630\u0627\u062a\u064a\u0629 \u0643\u0645\u0627 \u0647\u064a). \u0647\u0644 \u062a\u0631\u064a\u062f \u0627\u0644\u0645\u062a\u0627\u0628\u0639\u0629\u061f`
    : `\u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641 \u0648\u0638\u064a\u0641\u0629 "${job.title}"\u061f \u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0644\u062a\u0631\u0627\u062c\u0639 \u0639\u0646 \u0647\u0630\u0627 \u0627\u0644\u0625\u062c\u0631\u0627\u0621.`;
  if(!confirm(msg)) return;
  // The DB nulls out applied_for on linked candidates automatically
  // (ON DELETE SET NULL), so their records survive.
  await mutate(()=>api.deleteJob(jobId));
  if(dashboardJobFilter===jobId) dashboardJobFilter = '\u0627\u0644\u0643\u0644';
  if(candFilterJob===jobId) candFilterJob = '\u0627\u0644\u0643\u0644';
  if(pipelineJobFilter===jobId) pipelineJobFilter = '\u0627\u0644\u0643\u0644';
  if(assessJobFilter===jobId) assessJobFilter = '\u0627\u0644\u0643\u0644';
  await refreshJobs();
  render();
}

function openAddJob(preset){
  // preset = clone source (or null). The modal is "live": as you type,
  // the database answers back \u2014 match counts, skill suggestions, and
  // a quality meter \u2014 all inside the existing design language.
  const p = preset || {};
  const SAL_RANGES = ['1000 \u2013 5000','5000 \u2013 10000','10000 \u2013 15000','15000 \u2013 20000','20000 \u2013 30000','30000 \u2013 45000','45000 \u2013 60000','\u0623\u0643\u062b\u0631 \u0645\u0646 60000'];
  const DEGS = ['','\u062b\u0627\u0646\u0648\u064a\u0629 \u0639\u0627\u0645\u0629','\u062f\u0628\u0644\u0648\u0645','\u0628\u0643\u0627\u0644\u0648\u0631\u064a\u0648\u0633','\u0645\u0627\u062c\u0633\u062a\u064a\u0631','\u062f\u0643\u062a\u0648\u0631\u0627\u0647'];
  openModal(`
    <div class="modal-head"><h2>${p.title?t('clone_job_h'):t('add_job_h')}</h2><span class="xbtn" id="mClose">&times;</span></div>

    <div class="field"><label>${t('m_title')}</label><input type="text" id="jTitle" value="${esc(p.title||'')}"></div>
    <div class="field-row">
      <div class="field"><label>${t('m_dept')}</label><input type="text" id="jDept" value="${esc(p.department||'')}"></div>
      <div class="field"><label>${t('m_seniority')}</label>
        <select id="jSeniority">${['\u0645\u0628\u062a\u062f\u0626','\u0645\u062a\u0648\u0633\u0637','\u0643\u0628\u064a\u0631','\u0642\u064a\u0627\u062f\u064a'].map(s=>`<option ${(p.seniority||'\u0645\u062a\u0648\u0633\u0637')===s?'selected':''}>${s}</option>`).join('')}</select>
      </div>
    </div>
    <div class="field-row">
      <div class="field"><label>${t('m_headcount')}</label><input type="number" id="jHeadcount" min="1" value="${p.headcount||1}"></div>
      <div class="field"><label>${t('m_postdate')}</label><input type="date" id="jPostDate" value="${esc(p.postDate||'')}"></div>
      <div class="field"><label>${t('m_closing')}</label><input type="date" id="jClosing" value="${esc(p.closingDate||'')}"></div>
    </div>
    <div class="field-row">
      <div class="field"><label>${t('m_reqdegree')}</label>
        <select id="jDegree">${DEGS.map(d=>`<option value="${d}" ${(p.requiredDegree||'')===d?'selected':''}>${d===''?'\u2014 \u063a\u064a\u0631 \u0645\u062d\u062f\u062f \u2014':d}</option>`).join('')}</select>
      </div>
      <div class="field"><label>${t('m_expfrom')}</label><input type="number" id="jMinExp" min="0" max="40" value="${p.minExperience||''}" placeholder="0"></div>
      <div class="field"><label>${t('m_expto')}</label><input type="number" id="jMaxExp" min="0" max="45" value="${p.maxExperience||''}" placeholder="\u2014"></div>
    </div>
    <div class="field-row">
      <div class="field"><label>${t('m_city')}</label><input type="text" id="jCity" value="${esc(p.city||'')}" placeholder="\u0627\u0644\u0631\u064a\u0627\u0636"></div>
      <div class="field"><label>${t('m_salary')}</label>
        <select id="jSalary"><option value="">\u2014 \u063a\u064a\u0631 \u0645\u062d\u062f\u062f \u2014</option>${SAL_RANGES.map(r=>`<option ${(p.salaryRange||'')===r?'selected':''}>${r}</option>`).join('')}</select>
      </div>
    </div>
    <div class="field">
      <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
        <input type="checkbox" id="jApproved" ${p.approved===false?'':'checked'} style="width:auto;">
        <span>${t('m_approved')}</span>
      </label>
    </div>

    <div class="field"><label>${t('m_reqskills')}</label><input type="text" id="jReq" value="${esc((p.requiredSkills||[]).join(', '))}" placeholder="python, sql, \u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a"></div>
    <div class="field"><label>${t('m_niceskills')}</label><input type="text" id="jNice" value="${esc((p.niceSkills||[]).join(', '))}" placeholder="tableau, \u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 (\u0645\u062a\u0642\u062f\u0645)"></div>

    <div class="skillbank">
      <div class="sb-head">
        <strong>\u0628\u0646\u0643 \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a</strong>
        <span class="sb-target">
          \u0623\u0636\u0641 \u0625\u0644\u0649:
          <label><input type="radio" name="sbTarget" value="req" checked style="width:auto;"> \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629</label>
          <label><input type="radio" name="sbTarget" value="nice" style="width:auto;"> \u0627\u0644\u0645\u0641\u0636\u0644\u0629</label>
        </span>
      </div>
      <div class="sb-cats" id="sbCats">
        ${Object.keys(SKILL_LIBRARY).map((c,i)=>`<span class="chip sb-cat ${i===0?'on':''}" data-sbcat="${esc(c)}">${esc(c)}</span>`).join('')}
      </div>
      <div class="sb-skills" id="sbSkills"></div>
      <div class="sb-suggested" id="sbSuggested" style="display:none;">
        <div style="font-size:11px;color:var(--teal);font-weight:800;margin-bottom:6px;">\u0645\u0642\u062a\u0631\u062d\u0629 \u0645\u0646 \u0645\u0631\u0634\u062d\u064a \u0642\u0627\u0639\u062f\u062a\u0643 \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u0645\u0649:</div>
        <div id="sbSuggestedChips"></div>
      </div>
    </div>

    <div class="field"><label>${t('m_desc')}</label><textarea id="jDesc" rows="4" style="direction:rtl;text-align:right;">${esc(p.description||'')}</textarea></div>

    <div class="qmeter">
      <div class="qm-top"><span>\u062c\u0648\u062f\u0629 \u0627\u0644\u0648\u0638\u064a\u0641\u0629</span><span id="qmPct">0%</span></div>
      <div class="qm-bar"><div class="qm-fill" id="qmFill"></div></div>
      <div class="qm-hints" id="qmHints"></div>
    </div>

    <div class="jlive" id="jLive">
      <span style="color:var(--muted);">\u0627\u0628\u062f\u0623 \u0628\u0643\u062a\u0627\u0628\u0629 \u0627\u0644\u0645\u0633\u0645\u0649 \u0648\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u2014 \u0648\u0633\u062a\u0631\u0649 \u0641\u0648\u0631\u064b\u0627 \u0643\u0645 \u0645\u0631\u0634\u062d\u064b\u0627 \u0641\u064a \u0642\u0627\u0639\u062f\u062a\u0643 \u064a\u0637\u0627\u0628\u0642 \u0647\u0630\u0647 \u0627\u0644\u0648\u0638\u064a\u0641\u0629.</span>
    </div>

    <div style="margin:10px 0 4px;">
      <span class="btn btn-sm btn-ghost" id="jPreviewQs">\u0645\u0639\u0627\u064a\u0646\u0629 \u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0645\u0642\u0627\u0628\u0644\u0629 \u0627\u0644\u0645\u062a\u0648\u0642\u0639\u0629</span>
      <div id="jQsList" style="display:none;margin-top:10px;font-size:12.5px;line-height:2;color:var(--muted);"></div>
    </div>

    <div class="modal-actions">
      <button class="btn btn-ghost" id="mCancel">\u0625\u0644\u063a\u0627\u0621</button>
      <button class="btn btn-primary" id="mSave">${t('save_job')}</button>
    </div>
  `);
  document.getElementById('mClose').onclick = closeModal;
  document.getElementById('mCancel').onclick = closeModal;

  const val = id => document.getElementById(id).value;
  const skillsOf = id => val(id).split(',').map(s=>s.trim().toLowerCase()).filter(Boolean);
  const draft = () => ({
    title: val('jTitle').trim(), department: val('jDept').trim(),
    description: val('jDesc').trim(),
    requiredSkills: skillsOf('jReq'), niceSkills: skillsOf('jNice'),
    requiredDegree: val('jDegree'), minExperience: Number(val('jMinExp'))||0
  });

  // ---- skill bank ----
  const renderBankCat = (cat)=>{
    const have = new Set(skillsOf('jReq').concat(skillsOf('jNice')));
    document.getElementById('sbSkills').innerHTML = (SKILL_LIBRARY[cat]||[])
      .map(s=>`<span class="chip sb-skill ${have.has(s.toLowerCase())?'on':''}" data-sbskill="${esc(s)}">${esc(s)}</span>`).join('');
  };
  let currentCat = Object.keys(SKILL_LIBRARY)[0];
  renderBankCat(currentCat);
  document.getElementById('sbCats').addEventListener('click', (e)=>{
    const c = e.target.closest('[data-sbcat]'); if(!c) return;
    currentCat = c.dataset.sbcat;
    document.querySelectorAll('.sb-cat').forEach(x=>x.classList.toggle('on', x===c));
    renderBankCat(currentCat);
  });
  const toggleSkill = (skill)=>{
    const target = document.querySelector('input[name="sbTarget"]:checked').value==='req' ? 'jReq' : 'jNice';
    const other = target==='jReq' ? 'jNice' : 'jReq';
    const low = skill.toLowerCase();
    const rm = (id)=>{ const arr = skillsOf(id).filter(s=>s!==low);
      document.getElementById(id).value = arr.join(', '); return arr; };
    if(skillsOf('jReq').includes(low) || skillsOf('jNice').includes(low)){
      rm('jReq'); rm('jNice');           // second click removes it
    } else {
      rm(other);
      const arr = skillsOf(target); arr.push(low);
      document.getElementById(target).value = arr.join(', ');
    }
    renderBankCat(currentCat); refresh();
  };
  document.getElementById('sbSkills').addEventListener('click', (e)=>{
    const s = e.target.closest('[data-sbskill]'); if(s) toggleSkill(s.dataset.sbskill);
  });
  document.getElementById('sbSuggestedChips').addEventListener('click', (e)=>{
    const s = e.target.closest('[data-sbskill]'); if(s) toggleSkill(s.dataset.sbskill);
  });

  // ---- quality meter (local, instant) ----
  const meter = ()=>{
    const d = draft();
    const checks = [
      [15, !!d.title, '\u0627\u0643\u062a\u0628 \u0627\u0644\u0645\u0633\u0645\u0649 \u0627\u0644\u0648\u0638\u064a\u0641\u064a'],
      [20, d.description.length >= 200, '\u0623\u0637\u0644 \u0627\u0644\u0648\u0635\u0641 \u2014 200 \u062d\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 (\u062d\u0627\u0644\u064a\u064b\u0627 ' + d.description.length + ')'],
      [20, d.requiredSkills.length >= 3, '\u062d\u062f\u062f 3 \u0645\u0647\u0627\u0631\u0627\u062a \u0645\u0637\u0644\u0648\u0628\u0629 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644'],
      [10, d.niceSkills.length >= 1, '\u0623\u0636\u0641 \u0645\u0647\u0627\u0631\u0629 \u0645\u0641\u0636\u0644\u0629 \u0648\u0627\u062d\u062f\u0629 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644'],
      [10, !!d.requiredDegree, '\u062d\u062f\u062f \u0627\u0644\u0645\u0624\u0647\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628'],
      [10, d.minExperience > 0, '\u062d\u062f\u062f \u0627\u0644\u062d\u062f \u0627\u0644\u0623\u062f\u0646\u0649 \u0644\u0633\u0646\u0648\u0627\u062a \u0627\u0644\u062e\u0628\u0631\u0629'],
      [8, !!val('jSalary'), '\u062d\u062f\u062f \u0646\u0637\u0627\u0642 \u0627\u0644\u0631\u0627\u062a\u0628'],
      [7, !!val('jClosing'), '\u062d\u062f\u062f \u062a\u0627\u0631\u064a\u062e \u0625\u063a\u0644\u0627\u0642 \u0627\u0644\u062a\u0642\u062f\u064a\u0645']
    ];
    let pct = 0; const hints = [];
    checks.forEach(([w, ok, hint])=>{ if(ok) pct += w; else hints.push(hint); });
    document.getElementById('qmPct').textContent = pct + '%';
    document.getElementById('qmFill').style.width = pct + '%';
    document.getElementById('qmFill').style.background =
      pct >= 80 ? 'var(--green)' : pct >= 50 ? '#d4a24c' : '#8fa3b3';
    document.getElementById('qmHints').innerHTML =
      hints.slice(0,3).map(x=>`<span>\u2022 ${esc(x)}</span>`).join('');
  };

  // ---- live database preview (debounced) ----
  let previewTimer = null;
  const preview = async ()=>{
    const d = draft();
    if(!d.title && !d.description && !d.requiredSkills.length) return;
    try{
      const r = await api.jobPreview(d);
      const live = document.getElementById('jLive');
      if(!live) return;
      live.innerHTML = `
        <div style="font-weight:800;color:var(--teal);">\u064a\u0637\u0627\u0628\u0642 \u0627\u0644\u0622\u0646 ${r.count} \u0645\u0646 ${r.total} \u0645\u0631\u0634\u062d\u064b\u0627 \u0641\u064a \u0642\u0627\u0639\u062f\u062a\u0643 (40%+)</div>
        ${r.top.length ? `<div style="margin-top:4px;font-size:12px;color:var(--muted);">\u0627\u0644\u0623\u0641\u0636\u0644: ${r.top.map(t=>esc(t.name)+' <strong style="color:var(--text);">'+t.pct+'%</strong>').join(' \u00b7 ')}</div>` : ''}`;
      const sug = document.getElementById('sbSuggested');
      if(r.suggestedSkills.length){
        sug.style.display = '';
        const have = new Set(skillsOf('jReq').concat(skillsOf('jNice')));
        document.getElementById('sbSuggestedChips').innerHTML =
          r.suggestedSkills.map(s=>`<span class="chip sb-skill ${have.has(s.toLowerCase())?'on':''}" data-sbskill="${esc(s)}">${esc(s)}</span>`).join('');
      } else { sug.style.display = 'none'; }
    }catch(e){}
  };
  const refresh = ()=>{
    meter();
    clearTimeout(previewTimer);
    previewTimer = setTimeout(preview, 600);
  };
  ['jTitle','jDept','jDesc','jReq','jNice','jDegree','jMinExp','jSalary','jClosing'].forEach(id=>{
    const el = document.getElementById(id);
    el.addEventListener('input', refresh);
    el.addEventListener('change', refresh);
  });
  meter();
  if(p.title) refresh();   // clones preview immediately

  // ---- interview questions preview ----
  document.getElementById('jPreviewQs').onclick = ()=>{
    const box = document.getElementById('jQsList');
    const d = draft();
    box.innerHTML = genQuestions({requiredSkills:d.requiredSkills, niceSkills:d.niceSkills})
      .map((q,i)=>`<div>${i+1}. ${esc(q)}</div>`).join('');
    box.style.display = box.style.display === 'none' ? '' : 'none';
  };

  document.getElementById('mSave').onclick = async ()=>{
    const title = val('jTitle').trim();
    if(!title){ alert('\u0627\u0644\u0645\u0633\u0645\u0649 \u0627\u0644\u0648\u0638\u064a\u0641\u064a \u0645\u0637\u0644\u0648\u0628.'); return; }
    const j = {
      title,
      department: val('jDept').trim(),
      seniority: val('jSeniority'),
      headcount: Math.max(1, Number(val('jHeadcount'))||1),
      postDate: val('jPostDate') || null,
      approved: document.getElementById('jApproved').checked,
      requiredSkills: skillsOf('jReq'),
      niceSkills: skillsOf('jNice'),
      description: val('jDesc').trim(),
      requiredDegree: val('jDegree') || null,
      minExperience: Number(val('jMinExp')) || null,
      maxExperience: Number(val('jMaxExp')) || null,
      city: val('jCity').trim() || null,
      salaryRange: val('jSalary') || null,
      closingDate: val('jClosing') || null
    };
    await mutate(()=>api.createJob(j));
    await refreshJobs();
    closeModal(); render();
  };
}

async function openAddAssessment(presetCandId){
  // Candidate list respects the assessments job filter: with a job
  // selected, only the candidates YOU assigned to that job appear.
  let candList = [];
  if(presetCandId){
    try{ const c = await api.candidate(presetCandId); candList = [c]; }catch(e){}
  }else if(assessJobFilter!=='\u0627\u0644\u0643\u0644'){
    // Same canonical set as the pipeline and smart match: candidates
    // linked to the job PLUS anyone matching its JD at 40% or more.
    try{
      const data = await api.jobMatches(assessJobFilter);
      candList = data.matches;
    }catch(e){}
  }else{
    try{
      const page = await api.candidates({ limit: 200 });
      candList = page.candidates;
    }catch(e){}
  }
  if(!candList.length){
    alert(assessJobFilter!=='\u0627\u0644\u0643\u0644'
      ? '\u0644\u0627 \u064a\u0648\u062c\u062f \u0645\u0631\u0634\u062d\u0648\u0646 \u0644\u0647\u0630\u0647 \u0627\u0644\u0648\u0638\u064a\u0641\u0629 \u0628\u0639\u062f \u2014 \u0644\u0627 \u0645\u0631\u062a\u0628\u0637\u0648\u0646 \u0628\u0647\u0627 \u0648\u0644\u0627 \u0645\u0637\u0627\u0628\u0642\u0648\u0646 \u0645\u0639\u0647\u0627 \u0628\u0646\u0633\u0628\u0629 40% \u0641\u0623\u0639\u0644\u0649.'
      : '\u0644\u0627 \u064a\u0648\u062c\u062f \u0645\u0631\u0634\u062d\u0648\u0646 \u0628\u0639\u062f.');
    return;
  }
  const jobNote = (!presetCandId && assessJobFilter!=='\u0627\u0644\u0643\u0644')
    ? (DB.jobs.find(j=>j.id===assessJobFilter)||{}).title : null;
  openModal(`
    <div class="modal-head"><h2>\u062a\u0633\u062c\u064a\u0644 \u062a\u0642\u064a\u064a\u0645</h2><span class="xbtn" id="mClose">&times;</span></div>
    ${jobNote ? `<div style="background:var(--panel-2);border:1px solid var(--line);border-radius:var(--radius-sm);padding:10px 14px;font-size:12.5px;margin-bottom:14px;">\u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u062a\u0639\u0631\u0636 \u0645\u0631\u0634\u062d\u064a \u0648\u0638\u064a\u0641\u0629 <strong>${esc(jobNote)}</strong>: \u0627\u0644\u0645\u0631\u062a\u0628\u0637\u064a\u0646 \u0628\u0647\u0627 \u0648\u0627\u0644\u0645\u0637\u0627\u0628\u0642\u064a\u0646 \u0645\u0639\u0647\u0627 (40%+)</div>` : ''}
    <div class="field"><label>\u0627\u0644\u0645\u0631\u0634\u062d</label>
      <select id="aCand" ${presetCandId?'disabled':''}>${candList.map(c=>`<option value="${c.id}" ${presetCandId===c.id?'selected':''}>${esc(c.name)}</option>`).join('')}</select>
    </div>
    <div class="field-row">
      <div class="field"><label>\u0646\u0648\u0639 \u0627\u0644\u062a\u0642\u064a\u064a\u0645</label><input type="text" id="aType" placeholder="\u0627\u062e\u062a\u0628\u0627\u0631 \u062a\u0642\u0646\u064a\u060c \u0645\u0642\u0627\u0628\u0644\u0629 \u0644\u062c\u0646\u0629\u2026"></div>
      <div class="field"><label>\u0627\u0644\u062f\u0631\u062c\u0629 (\u0645\u0646 ${ASSESSMENT_MAX}) \u2014 \u062a\u064f\u062f\u062e\u0644 \u064a\u062f\u0648\u064a\u064b\u0627</label><input type="number" id="aScore" min="0" max="${ASSESSMENT_MAX}" value="0"></div>
    </div>
    <div class="field">
      <label>\u0645\u0644\u0641 \u0627\u0644\u062a\u0642\u064a\u064a\u0645 (PDF \u0623\u0648 DOCX) \u2014 \u064a\u064f\u062d\u0641\u0638 \u0643\u0645\u0627 \u0647\u0648</label>
      <input type="file" id="aFile" accept=".pdf,.docx,.txt,.xlsx">
    </div>
    <div id="aErr" style="color:var(--rose);font-size:12px;min-height:18px;"></div>
    <div class="modal-actions">
      <button class="btn btn-ghost" id="mCancel">\u0625\u0644\u063a\u0627\u0621</button>
      <button class="btn btn-primary" id="mSave">\u062d\u0641\u0638 \u0627\u0644\u062a\u0642\u064a\u064a\u0645</button>
    </div>
  `);
  document.getElementById('mClose').onclick = closeModal;
  document.getElementById('mCancel').onclick = closeModal;

  document.getElementById('mSave').onclick = async ()=>{
    const candId = document.getElementById('aCand').value;
    const err = document.getElementById('aErr');
    if(!candId){ err.textContent = '\u0627\u062e\u062a\u0631 \u0645\u0631\u0634\u062d\u064b\u0627 \u0623\u0648\u0644\u064b\u0627.'; return; }
    const payload = {
      candidateId: candId,
      type: document.getElementById('aType').value.trim() || '\u062a\u0642\u064a\u064a\u0645',
      score: Math.max(0, Math.min(ASSESSMENT_MAX, Number(document.getElementById('aScore').value)||0))
    };
    const f = document.getElementById('aFile').files[0];
    if(f){
      if(f.size > 10*1024*1024){ err.textContent = '\u062d\u062c\u0645 \u0627\u0644\u0645\u0644\u0641 \u064a\u062a\u062c\u0627\u0648\u0632 10MB.'; return; }
      payload.fileBase64 = await fileToBase64(f);
      payload.fileName = f.name;
      payload.mimeType = MIME_BY_EXT[f.name.split('.').pop().toLowerCase()] || 'application/octet-stream';
    }
    await mutate(()=>api.createAssessment(payload));
    closeModal(); render();
  };
}

async function openDetail(candId){
  // Fetch the full record \u2014 the list view only carries summary fields,
  // not stage history or the assessment list.
  let c, auditRows = [];
  try{
    [c, auditRows] = await Promise.all([
      api.candidate(candId),
      api.audit({ candidateId: candId, limit: 30 }).catch(()=>[])
    ]);
  }catch(e){
    alert('\u062a\u0639\u0630\u0651\u0631 \u062a\u062d\u0645\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0631\u0634\u062d: ' + e.message);
    return;
  }
  const job = DB.jobs.find(j=>j.id===c.appliedFor);
  const r = compositeRank(c);
  const qgen = genCandidateQuestions(c);
  const questions = qgen.questions;
  const assessments = c.assessments || [];

  openModal(`
    <div class="modal-head">
      <div class="detail-header" style="margin-bottom:0;">
        <div>
          <h2>${esc(c.name)}</h2>
          ${c.currentTitle ? `<div class="role" style="margin-top:2px;">${esc(c.currentTitle)}</div>` : ''}
          <div class="role">${job?esc(job.title):'\u0644\u0627 \u062a\u0648\u062c\u062f \u0648\u0638\u064a\u0641\u0629 \u0645\u0631\u062a\u0628\u0637\u0629'} \u00b7 ${esc(c.email||'\u0644\u0627 \u064a\u0648\u062c\u062f \u0628\u0631\u064a\u062f \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a')}${c.phone?' \u00b7 '+esc(c.phone):''}</div>
          <div class="detail-tags">
            <span class="stagepill" style="background:${STAGE_COLOR[c.stage]}">${tStage(c.stage)}</span>
            <span class="chip ar">${c.experienceYears||0} \u0633\u0646\u0629 \u062e\u0628\u0631\u0629</span>
            <span class="chip ar">\u0627\u0644\u062a\u0631\u062a\u064a\u0628 \u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a ${r.composite}</span>
          </div>
        </div>
      </div>
      <span class="xbtn" id="mClose">&times;</span>
    </div>

    <div class="detail-section">
      <h3>\u0627\u0644\u0645\u0631\u062d\u0644\u0629</h3>
      <div class="stagesel" id="stageSelector">
        ${REGULAR_STAGES.map(s=>`<span data-setstage="${s}" class="${c.stage===s?'active':''}" style="${c.stage===s?`background:${STAGE_COLOR[s]};border-color:${STAGE_COLOR[s]}`:''}">${s}</span>`).join('')}
      </div>
      <div style="margin-top:8px;font-size:11.5px;color:var(--muted);">\u0622\u062e\u0631 \u062a\u063a\u064a\u064a\u0631 \u0644\u0644\u0645\u0631\u062d\u0644\u0629: ${stageSinceLabel(c)}</div>
    </div>

    <div class="detail-section">
      <h3>\u0645\u0646\u0627\u0633\u0628 \u0644\u0634\u0627\u063a\u0631 \u0622\u062e\u0631</h3>
      <div style="font-size:12px;color:var(--muted);margin-bottom:10px;">\u0625\u0646 \u0644\u0645 \u064a\u0643\u0646 \u0647\u0630\u0627 \u0627\u0644\u0645\u0631\u0634\u062d \u0627\u0644\u062e\u064a\u0627\u0631 \u0627\u0644\u0623\u0648\u0644 \u0644\u0648\u0638\u064a\u0641\u062a\u0647 \u0627\u0644\u062d\u0627\u0644\u064a\u0629\u060c \u0636\u0639\u0647 \u0641\u064a \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631 \u0644\u0646\u0631\u062c\u0639 \u0644\u0647 \u0644\u0627\u062d\u0642\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u062d\u0627\u062c\u0629.</div>
      <div class="stagesel" id="altToggle" style="margin-bottom:10px;">
        <span data-altval="yes" class="${c.stage===ALT_STAGE?'active':''}" style="${c.stage===ALT_STAGE?`background:${STAGE_COLOR[ALT_STAGE]};border-color:${STAGE_COLOR[ALT_STAGE]}`:''}">\u0646\u0639\u0645</span>
        <span data-altval="no" class="${c.stage!==ALT_STAGE?'active':''}" style="${c.stage!==ALT_STAGE?'background:#5fb87a;border-color:#5fb87a':''}">\u0644\u0627</span>
      </div>
      <label style="display:block;font-size:11.5px;color:var(--muted);margin-bottom:6px;">\u0627\u0644\u0648\u0638\u064a\u0641\u0629 \u0627\u0644\u0645\u0642\u062a\u0631\u062d\u0629 \u0644\u0647 (\u0627\u062e\u062a\u064a\u0627\u0631\u064a \u2014 \u064a\u0645\u0643\u0646 \u062a\u062d\u062f\u064a\u062f\u0647\u0627 \u0627\u0644\u0622\u0646 \u0623\u0648 \u0644\u0627\u062d\u0642\u064b\u0627)</label>
      <select id="altJobSelect">
        <option value="">\u2014 \u0628\u062f\u0648\u0646 \u2014</option>
        ${DB.jobs.filter(j=>j.id!==c.appliedFor).map(j=>`<option value="${j.id}" ${c.alternativeJobId===j.id?'selected':''}>${esc(j.title)}</option>`).join('')}
      </select>
    </div>

    <div class="detail-section" style="${(c.dateOfBirth||c.specialization||c.degree||c.city||c.address||c.currentSalary||c.noticePeriod)?'':'display:none;'}">
      <h3>\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u062a\u0642\u062f\u0645</h3>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:8px;font-size:13px;">
        ${c.dateOfBirth?`<div><span style="color:var(--muted);font-size:11px;display:block;">\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0645\u064a\u0644\u0627\u062f</span>${esc(c.dateOfBirth)}</div>`:''}
        ${c.specialization?`<div><span style="color:var(--muted);font-size:11px;display:block;">\u0627\u0644\u062a\u062e\u0635\u0635</span>${esc(c.specialization)}</div>`:''}
        ${c.degree?`<div><span style="color:var(--muted);font-size:11px;display:block;">\u0627\u0644\u062f\u0631\u062c\u0629 \u0627\u0644\u0639\u0644\u0645\u064a\u0629</span>${esc(c.degree)}</div>`:''}
        ${c.city?`<div><span style="color:var(--muted);font-size:11px;display:block;">\u0627\u0644\u0645\u062f\u064a\u0646\u0629</span>${esc(c.city)}</div>`:''}
        ${c.address?`<div><span style="color:var(--muted);font-size:11px;display:block;">\u0627\u0644\u0639\u0646\u0648\u0627\u0646</span>${esc(c.address)}</div>`:''}
        ${c.currentSalary?`<div><span style="color:var(--muted);font-size:11px;display:block;">\u0627\u0644\u0631\u0627\u062a\u0628 \u0627\u0644\u062d\u0627\u0644\u064a</span>${esc(c.currentSalary)}</div>`:''}
        ${c.noticePeriod?`<div><span style="color:var(--muted);font-size:11px;display:block;">\u0641\u062a\u0631\u0629 \u0627\u0644\u0625\u0634\u0639\u0627\u0631</span>${esc(c.noticePeriod)}</div>`:''}
      </div>
    </div>
    <div class="detail-section">
      <h3>\u0645\u0644\u062e\u0635 \u0627\u0644\u0645\u0631\u0634\u062d \u0627\u0644\u0630\u0643\u064a</h3>
      <div class="resume-box" style="font-family:'Tajawal',sans-serif;font-size:13px;line-height:1.9;direction:rtl;text-align:right;white-space:pre-wrap;">${esc(c.aiSummary && c.aiSummary.trim() ? c.aiSummary : summarize(c))}</div>
    </div>

    <div class="detail-section">
      <h3>\u0633\u062c\u0644 \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u0645\u0631\u0634\u062d</h3>
      ${auditRows.length ? auditRows.map(r=>`
        <div class="assess-row">
          <span><strong>${esc(r.actor)}</strong> \u2014 ${esc(r.action)}${r.details?': '+esc(r.details):''}</span>
          <span class="mono" style="font-size:10.5px;color:var(--muted)">${new Date(r.at).toLocaleString('ar-EG')}</span>
        </div>`).join('') : '<div style="color:var(--muted);font-size:12px;">\u0644\u0627 \u062a\u0648\u062c\u062f \u062a\u063a\u064a\u064a\u0631\u0627\u062a \u0645\u0633\u062c\u0644\u0629 \u0628\u0639\u062f.</div>'}
    </div>
    <div class="detail-section">
      <h3>\u0623\u0633\u0626\u0644\u0629 \u0645\u0642\u0627\u0628\u0644\u0629 \u0645\u0642\u062a\u0631\u062d\u0629</h3>
      <div style="font-size:11.5px;color:var(--muted);margin-bottom:10px;">
        \u0645\u0648\u0644\u0651\u062f\u0629 \u062d\u0633\u0628 ${qgen.field ? `\u0645\u062c\u0627\u0644\u0647 (<strong style="color:var(--teal);">${esc(qgen.field)}</strong>) \u0648` : ''}\u0645\u0633\u062a\u0648\u0627\u0647
        (<strong style="color:var(--teal);">${qgen.level}</strong>${qgen.yrs?` \u2014 ${qgen.yrs} \u0633\u0646\u0629 \u062e\u0628\u0631\u0629`:''})${c.appliedFor?' \u0648\u0648\u0638\u064a\u0641\u062a\u0647 \u0627\u0644\u0645\u0631\u062a\u0628\u0637\u0629':''}.
      </div>
      <div class="qlist">${questions.map(q=>`<div class="qitem">${esc(q)}</div>`).join('')}</div>
    </div>

    <div class="detail-section">
      <h3>\u0633\u062c\u0644 \u0627\u0644\u062a\u0642\u064a\u064a\u0645\u0627\u062a ${assessments.length?`<span style="color:${assessments.length<3?'var(--rose)':'var(--muted)'};font-weight:400;font-size:12px;">(${assessments.length}${assessments.length<3?' \u2014 \u0623\u0642\u0644 \u0645\u0646 3 \u0645\u0648\u0635\u0649 \u0628\u0647\u0627':''})</span>`:''}</h3>
      ${assessments.length ? assessments.map(a=>`
        <div class="assess-row">
          <span>${esc(a.type)} \u2014 ${new Date(a.date).toLocaleDateString('ar-EG')}</span>
          <span style="display:flex;align-items:center;gap:10px;">
            ${a.hasFile?`<span class="btn btn-sm btn-ghost" data-dlassess="${a.id}">\u062a\u0646\u0632\u064a\u0644 \u0627\u0644\u062a\u0642\u064a\u064a\u0645</span>`:''}
            <span class="btn btn-sm btn-danger" data-delassess="${a.id}" data-candref="${c.id}">\u062d\u0630\u0641</span>
            <span class="scoreband" style="color:${assessmentScoreColor(a.score)}">${a.score}/${ASSESSMENT_MAX}</span>
          </span>
        </div>`).join('') : '<div style="color:var(--muted);font-size:12.5px;">\u0644\u0627 \u062a\u0648\u062c\u062f \u062a\u0642\u064a\u064a\u0645\u0627\u062a \u0645\u0633\u062c\u0644\u0629 \u0628\u0639\u062f.</div>'}
    </div>

    <div class="modal-actions">
      <button class="btn btn-ghost" id="mLogAssessment">${t('add_assessment')}</button>
      <button class="btn btn-danger" id="mDelete">\u062d\u0630\u0641 \u0627\u0644\u0645\u0631\u0634\u062d</button>
      <button class="btn btn-ghost" id="mEdit">\u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a</button>
      <button class="btn btn-ghost" id="mExport">\u062a\u0646\u0632\u064a\u0644 \u0627\u0644\u0633\u064a\u0631\u0629 \u0627\u0644\u0630\u0627\u062a\u064a\u0629</button>
      <button class="btn btn-ghost" id="mCancel">\u0625\u063a\u0644\u0627\u0642</button>
    </div>
  `);
  document.getElementById('mClose').onclick = closeModal;
  document.getElementById('mCancel').onclick = closeModal;
  document.getElementById('mEdit').onclick = ()=>{ closeModal(); openAddCandidate(c.id); };
  document.getElementById('mLogAssessment').onclick = ()=>{ closeModal(); openAddAssessment(c.id); };
  document.getElementById('mExport').onclick = ()=>{
    downloadCandidateCV(c);
  };
  document.getElementById('mDelete').onclick = async ()=>{
    if(confirm('\u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u0645\u0631\u0634\u062d\u061f \u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0644\u062a\u0631\u0627\u062c\u0639 \u0639\u0646 \u0647\u0630\u0627 \u0627\u0644\u0625\u062c\u0631\u0627\u0621.')){
      // Assessments, stage history and the r\u00e9sum\u00e9 file cascade in the DB.
      await mutate(()=>api.deleteCandidate(c.id));
      closeModal(); render();
    }
  };
  document.querySelectorAll('#stageSelector span').forEach(el=>{
    el.onclick = async ()=>{
      await mutate(()=>api.setStage(c.id, el.dataset.setstage));
      closeModal(); render();
    };
  });
  document.querySelectorAll('#altToggle span').forEach(el=>{
    el.onclick = async ()=>{
      // "No" restores whatever stage the candidate was in before.
      const target = el.dataset.altval==='yes' ? ALT_STAGE : (c.previousStage || '\u0627\u0644\u0641\u0631\u0632');
      await mutate(()=>api.setStage(c.id, target));
      closeModal(); render();
    };
  });
  document.getElementById('altJobSelect').onchange = async (e)=>{
    await mutate(()=>api.setAltJob(c.id, e.target.value || null));
    closeModal(); render();
  };
}

/* ---------------------------------------------------------
   HELPERS + WIRE-UP
--------------------------------------------------------- */
function esc(str){
  return String(str==null?'':str).replace(/[&<>"']/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

function attachViewHandlers(){
  document.querySelectorAll('[data-cand]').forEach(el=>{
    el.addEventListener('click', ()=> openDetail(el.dataset.cand));
  });
  const addCand = document.getElementById('btnAddCandidate');
  if(addCand) addCand.onclick = ()=>openAddCandidate();
  const importCand = document.getElementById('btnImportCandidates');
  if(importCand) importCand.onclick = ()=>openBulkImport();
  const addJob = document.getElementById('btnAddJob');
  if(addJob) addJob.onclick = openAddJob;
  const chPw = document.getElementById('btnChangePw');
  if(chPw) chPw.onclick = openChangePassword;
  const lg = document.getElementById('btnLogout');
  if(lg) lg.onclick = doLogout;
  const addUser = document.getElementById('btnAddUser');
  if(addUser) addUser.onclick = openAddUser;
  document.querySelectorAll('[data-deluser]').forEach(el=>{
    el.onclick = async ()=>{
      if(!confirm('\u062d\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u061f \u0644\u0646 \u064a\u062a\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u062f\u062e\u0648\u0644 \u0628\u0639\u062f\u0647\u0627.')) return;
      await mutate(()=>api.deleteUser(el.dataset.deluser));
      render();
    };
  });
  const addAssess = document.getElementById('btnAddAssessment');
  if(addAssess) addAssess.onclick = ()=>openAddAssessment();
  const assessFilter = document.getElementById('assessJobFilter');
  if(assessFilter) assessFilter.onchange = ()=>{ assessJobFilter = assessFilter.value; render(); };
  const pipelineFilter = document.getElementById('pipelineJobFilter');
  if(pipelineFilter) pipelineFilter.onchange = ()=>{ pipelineJobFilter = pipelineFilter.value; render(); };
  document.querySelectorAll('[data-uploadjob]').forEach(el=>{
    el.onclick = ()=> openBulkImport(el.dataset.uploadjob);
  });
  document.querySelectorAll('[data-addonejob]').forEach(el=>{
    el.onclick = ()=> openAddCandidate(null, el.dataset.addonejob);
  });
  document.querySelectorAll('[data-settab]').forEach(el=>{
    el.onclick = ()=>{ settingsTab = el.dataset.settab; render(); };
  });
  document.querySelectorAll('[data-clonejob]').forEach(el=>{
    el.onclick = ()=>{
      const j = DB.jobs.find(x=>x.id===el.dataset.clonejob);
      if(j) openAddJob({...j, title: j.title + (LANG==='ar'?' (\u0646\u0633\u062e\u0629)':' (Copy)'), id: undefined});
    };
  });
  document.querySelectorAll('[data-deljob]').forEach(el=>{
    el.onclick = ()=> deleteJob(el.dataset.deljob);
  });

  const searchInput = document.getElementById('candSearchInput');
  if(searchInput){
    // Debounced so typing doesn't fire a query per keystroke.
    searchInput.oninput = ()=>{
      clearTimeout(candSearchTimer);
      candSearchTimer = setTimeout(()=>{
        candSearch = searchInput.value; candOffset = 0; renderCandidatesOnly();
      }, 300);
    };
  }
  const stageFilter = document.getElementById('candStageFilter');
  if(stageFilter) stageFilter.onchange = ()=>{ candFilterStage = stageFilter.value; candOffset = 0; renderCandidatesOnly(); };
  const jobFilter = document.getElementById('candJobFilter');
  if(jobFilter) jobFilter.onchange = ()=>{ candFilterJob = jobFilter.value; candOffset = 0; renderCandidatesOnly(); };
  const clearMatch = document.getElementById('btnClearMatch');
  if(clearMatch) clearMatch.onclick = ()=>{ candFilterJob = '\u0627\u0644\u0643\u0644'; renderCandidatesOnly(); };
  const prevBtn = document.getElementById('candPrev');
  if(prevBtn) prevBtn.onclick = ()=>{ if(candOffset>0){ candOffset -= CAND_PAGE_SIZE; renderCandidatesOnly(); } };
  const nextBtn = document.getElementById('candNext');
  if(nextBtn) nextBtn.onclick = ()=>{ if(candOffset+CAND_PAGE_SIZE < DB.candidateTotal){ candOffset += CAND_PAGE_SIZE; renderCandidatesOnly(); } };
  const dashJobFilter = document.getElementById('dashboardJobFilter');
  if(dashJobFilter) dashJobFilter.onchange = ()=>{ dashboardJobFilter = dashJobFilter.value; render(); };
  const targetedInput = document.getElementById('totalJobsTargetedInput');
  if(targetedInput) targetedInput.onchange = async ()=>{
    const v = Math.max(0, Number(targetedInput.value)||0);
    await mutate(()=>api.saveSettings({totalJobsTargeted:v}));
    await refreshSettings();
    render();
  };

  // [data-delassess] is handled by the global click delegation below,
  // so the delete works both here and inside the detail modal.
  document.querySelectorAll('[data-downloadcv]').forEach(el=>{
    el.onclick = (e)=>{
      e.stopPropagation();
      const cand = DB.candidates.find(c=>c.id===el.dataset.downloadcv);
      if(cand) downloadCandidateCV(cand);
    };
  });

  attachDragHandlers();
}

async function renderCandidatesOnly(){
  const main = document.getElementById('main');
  const focusWasSearch = document.activeElement && document.activeElement.id==='candSearchInput';
  main.innerHTML = (candFilterJob!=='\u0627\u0644\u0643\u0644') ? await viewCandidatesMatches() : await viewCandidates();
  renderNav();
  attachViewHandlers();
  if(focusWasSearch){
    const inp = document.getElementById('candSearchInput');
    if(inp){ inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); }
  }
}

function showResetForm(token){
  let ov = document.getElementById('loginOverlay');
  if(ov) ov.remove();
  ov = document.createElement('div');
  ov.id = 'loginOverlay';
  ov.style.cssText = 'position:fixed;inset:0;z-index:200;display:flex;align-items:center;justify-content:center;background:var(--bg);';
  ov.innerHTML = `
    <div class="modal" style="max-width:400px;text-align:center;">
      <div class="display" style="font-size:20px;margin-bottom:16px;">\u062a\u0639\u064a\u064a\u0646 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 \u062c\u062f\u064a\u062f\u0629</div>
      <div class="field" style="text-align:right;"><label>\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 (8 \u0623\u062d\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644)</label><input type="password" id="rpNew" autocomplete="new-password" style="direction:ltr;text-align:left;"></div>
      <div class="field" style="text-align:right;"><label>\u062a\u0623\u0643\u064a\u062f \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631</label><input type="password" id="rpNew2" autocomplete="new-password" style="direction:ltr;text-align:left;"></div>
      <div id="rpErr" style="color:var(--rose);font-size:12px;min-height:18px;margin:4px 0 10px;"></div>
      <button class="btn btn-primary" id="rpBtn" style="width:100%;justify-content:center;">\u062d\u0641\u0638 \u0648\u0627\u0644\u062f\u062e\u0648\u0644</button>
    </div>`;
  document.body.appendChild(ov);
  document.getElementById('rpBtn').onclick = async ()=>{
    const nw = document.getElementById('rpNew').value;
    const nw2 = document.getElementById('rpNew2').value;
    const err = document.getElementById('rpErr');
    if(nw.length < 8){ err.textContent = '\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u064a\u062c\u0628 \u0623\u0644\u0627 \u062a\u0642\u0644 \u0639\u0646 8 \u0623\u062d\u0631\u0641.'; return; }
    if(nw !== nw2){ err.textContent = '\u0643\u0644\u0645\u062a\u0627 \u0627\u0644\u0645\u0631\u0648\u0631 \u063a\u064a\u0631 \u0645\u062a\u0637\u0627\u0628\u0642\u062a\u064a\u0646.'; return; }
    try{
      await api.resetPassword({ token, newPassword: nw });
      alert('\u062a\u0645 \u062a\u063a\u064a\u064a\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u2014 \u0633\u062c\u0651\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0627\u0644\u0622\u0646.');
      history.replaceState(null, '', '/');
      location.reload();
    }catch(e){ err.textContent = e.message; }
  };
}

document.addEventListener('click', (e)=>{
  const lg = e.target.closest && e.target.closest('[data-setlang]');
  if(lg){ applyLang(lg.dataset.setlang); render(); return; }
  const th = e.target.closest && e.target.closest('[data-settheme]');
  if(th){
    applyTheme(th.dataset.settheme);
    document.querySelectorAll('[data-settheme]').forEach(b=>{
      b.className = 'btn btn-sm ' + (b.dataset.settheme===th.dataset.settheme ? 'btn-primary' : 'btn-ghost');
    });
    return;
  }
  const da = e.target.closest && e.target.closest('[data-delassess]');
  if(da){
    if(!confirm('\u062d\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u062a\u0642\u064a\u064a\u0645 \u0646\u0647\u0627\u0626\u064a\u064b\u0627\u061f \u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0644\u062a\u0631\u0627\u062c\u0639.')) return;
    mutate(()=>api.deleteAssessment(da.dataset.delassess)).then(()=>{
      if(da.dataset.candref) openDetail(da.dataset.candref);
      render();
    }).catch(()=>{});
    return;
  }
  const dl = e.target.closest && e.target.closest('[data-dlassess]');
  if(dl){ window.open('/api/assessments/' + encodeURIComponent(dl.dataset.dlassess) + '/file', '_blank'); return; }
  const foot = e.target.closest && e.target.closest('#sidebarFoot');
  if(foot && CURRENT_USER){
    openModal(`
      <div class="modal-head"><h2>${esc(CURRENT_USER.displayName)}</h2><span class="xbtn" onclick="closeModal()">\u00d7</span></div>
      <div style="font-size:12px;color:var(--muted);margin-bottom:16px;">\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645: <span class="mono">${esc(CURRENT_USER.username)}</span></div>
      <div style="font-size:12.5px;margin-bottom:14px;">
        <div style="margin-bottom:8px;">\u0645\u0638\u0647\u0631 \u0627\u0644\u0645\u0646\u0635\u0629:</div>
        <div style="display:flex;gap:8px;">
          ${[['aurora','\u0623\u0648\u0631\u0648\u0631\u0627'],['dark','\u062f\u0627\u0643\u0646'],['light','\u0641\u0627\u062a\u062d']].map(([v,label])=>
            `<button class="btn btn-sm ${currentTheme()===v?'btn-primary':'btn-ghost'}" data-settheme="${v}">${label}</button>`).join('')}
        </div>
      </div>
      <div style="font-size:12.5px;margin-bottom:16px;">
        \u0627\u0644\u0645\u0635\u0627\u062f\u0642\u0629 \u0627\u0644\u062b\u0646\u0627\u0626\u064a\u0629:
        ${CURRENT_USER.totpEnabled
          ? '<span style="color:var(--green);font-weight:800;">\u0645\u0641\u0639\u0651\u0644\u0629 \u2713</span>'
          : '<span style="color:var(--muted);">\u063a\u064a\u0631 \u0645\u0641\u0639\u0651\u0644\u0629</span>'}
      </div>
      <div class="modal-actions" style="border-top:none;padding-top:0;">
        <button class="btn btn-primary" onclick="closeModal();openChangePassword()">\u062a\u063a\u064a\u064a\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631</button>
        ${CURRENT_USER.totpEnabled
          ? '<button class="btn btn-ghost" onclick="closeModal();openDisable2FA()">\u062a\u0639\u0637\u064a\u0644 \u0627\u0644\u0645\u0635\u0627\u062f\u0642\u0629 \u0627\u0644\u062b\u0646\u0627\u0626\u064a\u0629</button>'
          : '<button class="btn btn-ghost" onclick="closeModal();openEnable2FA()">\u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u0645\u0635\u0627\u062f\u0642\u0629 \u0627\u0644\u062b\u0646\u0627\u0626\u064a\u0629</button>'}
        <button class="btn btn-danger" onclick="doLogout()">\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c</button>
      </div>`);
  }
});

async function boot(){
  const qs = new URLSearchParams(location.search);
  const resetToken = qs.get('reset');
  if(resetToken){ showResetForm(resetToken); return; }
  if(qs.get('apply')){ showApplyPage(); return; }
  let alive = false;
  try{ alive = sessionStorage.getItem('tad_alive') === '1'; }catch(e){}
  if(!alive){
    // New tab or reopened browser: destroy any surviving session and
    // require a fresh login.
    try{ await api.logout(); }catch(e){}
    showLogin();
    return;
  }
  document.getElementById('main').innerHTML = `<div class="empty" style="margin-top:80px;"><div class="display">\u062c\u0627\u0631\u064d \u0627\u0644\u0627\u062a\u0635\u0627\u0644\u2026</div></div>`;
  try{
    CURRENT_USER = await api.me();
  }catch(e){
    showLogin();
    return;
  }
  try{
    // Only jobs and settings are small enough to hold in full.
    // Candidates, assessments and KPIs are fetched per view.
    DB = { jobs: [], candidates: [], candidateTotal: 0, settings: {totalJobsTargeted:0} };
    await Promise.all([refreshJobs(), refreshSettings()]);
  }catch(e){
    console.error('Startup failed', e);
    document.getElementById('main').innerHTML = `<div class="empty" style="margin-top:80px;">
      <div class="display">\u062a\u0639\u0630\u0651\u0631 \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0628\u0627\u0644\u062e\u0627\u062f\u0645</div>
      <div>${esc(e.message)}</div>
      <div style="margin-top:14px;"><button class="btn btn-primary" onclick="boot()">\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629</button></div>
    </div>`;
    return;
  }
  render();
}
boot();
</script>
</body>
</html>
