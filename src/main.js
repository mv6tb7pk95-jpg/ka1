const root = document.querySelector('#app');
const state = { name: '', health: '확인 중', sandbox: '확인 중' };
function el(tag, text, className) { const node=document.createElement(tag); node.textContent=text; if(className) node.className=className; return node; }
const header=el('header','학교 AI · 개발 시제품'); root.append(header);
const main=el('main',''); root.append(main);
main.append(el('h1','학생별 AI 기능 관리'));
main.append(el('p','현재 단계는 화면과 서버 상태 확인입니다. 계정 로그인, AI 대화, GitHub 스킬 설치, 외부 플러그인 연결은 아직 제공하지 않습니다.','notice'));
const section=el('section',''); section.append(el('h2','구현 상태')); main.append(section);
const status=el('ul',''); section.append(status);
function draw(){status.replaceChildren(); for(const [name,value] of [['서버',state.health],['Python 샌드박스',state.sandbox],['학생별 인증','미구현'],['AI 도구 호출','미구현'],['스킬·MCP·서비스 어댑터','미구현']]) status.append(el('li',`${name}: ${value}`));}
draw();
fetch('/api/status').then(async response=>{if(!response.ok) throw Error('서버 오류'); const data=await response.json();state.health=data.server || '확인 불가';state.sandbox=data.sandbox || '제공 안 함';draw();}).catch(()=>{state.health='연결 안 됨 (프런트엔드만 실행 중)';state.sandbox='제공 안 함';draw();});
main.append(el('p','비밀번호, 토큰, API 키를 이 화면이나 채팅에 입력하지 마세요.','warning'));
