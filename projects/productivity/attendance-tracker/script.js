let data = JSON.parse(localStorage.getItem('att_v5')) || {
  subjects: [],
  logs: [],
};

function render() {
  const body = document.getElementById('attendance-body');
  const logBox = document.getElementById('history-log');
  body.innerHTML = '';
  logBox.innerHTML = '';

  data.subjects.forEach((s, i) => {
    const targetPct = s.target || 80;
    const targetDec = targetPct / 100;

    const conducted = s.p + s.a;
    const remaining = s.total - conducted;
    const currentPct =
      conducted === 0 ? 0 : ((s.p / conducted) * 100).toFixed(1);

    const neededTotal = Math.ceil(targetDec * s.total);
    const neededFromRemaining = Math.max(0, neededTotal - s.p);

    // Create main row container
    const tr = document.createElement('tr');

    // Column 1: Subject Name (XSS Safe via textContent)
    const tdName = document.createElement('td');
    const bName = document.createElement('b');
    bName.textContent = s.name;
    tdName.appendChild(bName);
    tr.appendChild(tdName);

    // Column 2: Total Classes Input
    const tdTotal = document.createElement('td');
    const inputTotal = document.createElement('input');
    inputTotal.type = 'number';
    inputTotal.value = s.total;
    inputTotal.style.width = '50px';
    inputTotal.onchange = function () {
      updateTotal(i, this.value);
    };
    tdTotal.appendChild(inputTotal);
    tr.appendChild(tdTotal);

    // Column 3: Present Counter Group
    const tdPresent = document.createElement('td');
    const divPGroup = document.createElement('div');
    divPGroup.className = 'counter-group';

    const btnPDec = document.createElement('button');
    btnPDec.className = 'btn btn-dec';
    btnPDec.textContent = '-';
    btnPDec.onclick = function () {
      update(i, 'p', -1);
    };

    const spanP = document.createElement('span');
    spanP.textContent = s.p;

    const btnPInc = document.createElement('button');
    btnPInc.className = 'btn btn-inc';
    btnPInc.textContent = '+';
    btnPInc.onclick = function () {
      update(i, 'p', 1);
    };

    divPGroup.appendChild(btnPDec);
    divPGroup.appendChild(spanP);
    divPGroup.appendChild(btnPInc);
    tdPresent.appendChild(divPGroup);
    tr.appendChild(tdPresent);

    // Column 4: Absent Counter Group
    const tdAbsent = document.createElement('td');
    const divAGroup = document.createElement('div');
    divAGroup.className = 'counter-group';

    const btnADec = document.createElement('button');
    btnADec.className = 'btn btn-dec';
    btnADec.textContent = '-';
    btnADec.onclick = function () {
      update(i, 'a', -1);
    };

    const spanA = document.createElement('span');
    spanA.textContent = s.a;

    const btnAInc = document.createElement('button');
    btnAInc.className = 'btn btn-inc';
    btnAInc.textContent = '+';
    btnAInc.onclick = function () {
      update(i, 'a', 1);
    };

    divAGroup.appendChild(btnADec);
    divAGroup.appendChild(spanA);
    divAGroup.appendChild(btnAInc);
    tdAbsent.appendChild(divAGroup);
    tr.appendChild(tdAbsent);

    // Column 5: Current Percentage Label
    const tdPct = document.createElement('td');
    tdPct.style.color = parseFloat(currentPct) < targetPct ? 'var(--danger)' : 'var(--success)';
    tdPct.style.fontWeight = 'bold';
    tdPct.textContent = `${currentPct}%`;
    tr.appendChild(tdPct);

    // Column 6: Goal Status (Using innerHTML for inner layout formatting safely since parameters are fixed numbers)
    const tdGoal = document.createElement('td');
    if (neededFromRemaining > remaining) {
      tdGoal.innerHTML = `<span style="color:var(--danger)"><b>Impossible</b><br>Max possible: ${(((s.p + remaining) / s.total) * 100).toFixed(1)}%</span>`;
    } else {
      tdGoal.innerHTML = `Attend <b>${neededFromRemaining}</b> more<br><small>out of ${remaining} left</small>`;
    }
    tr.appendChild(tdGoal);

    // Column 7: Remove Row Action Trigger Button
    const tdRemove = document.createElement('td');
    const btnRemove = document.createElement('button');
    btnRemove.className = 'btn';
    btnRemove.style.color = '#94a3b8';
    btnRemove.style.background = 'transparent';
    btnRemove.innerHTML = '&times;';
    btnRemove.onclick = function () {
      removeSub(i);
    };
    tdRemove.appendChild(btnRemove);
    tr.appendChild(tdRemove);

    body.appendChild(tr);
  });

  // Render Log Items cleanly without innerHTML compilation loops
  data.logs
    .slice(-15)
    .reverse()
    .forEach((log) => {
      const logDiv = document.createElement('div');
      logDiv.className = 'history-item';

      const spanSub = document.createElement('span');
      const bSub = document.createElement('b');
      bSub.textContent = log.sub; // Safe text injection
      spanSub.appendChild(bSub);

      const spanType = document.createElement('span');
      spanType.textContent = log.type;

      logDiv.appendChild(spanSub);
      logDiv.appendChild(spanType);
      logBox.appendChild(logDiv);
    });

  localStorage.setItem('att_v5', JSON.stringify(data));
}

function openModal() {
  document.getElementById('addModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('addModal').style.display = 'none';
  document.getElementById('newSubjectForm').reset();
}

window.onclick = function (event) {
  let modal = document.getElementById('addModal');
  if (event.target === modal) {
    closeModal();
  }
};

function addSubject(event) {
  event.preventDefault();

  const name = document.getElementById('subName').value;
  const total = document.getElementById('subTotal').value;
  const target = document.getElementById('subTarget').value;

  if (name && total && target) {
    data.subjects.push({
      name: name,
      p: 0,
      a: 0,
      total: parseInt(total),
      target: parseFloat(target),
    });
    render();
    closeModal();
  }
}

function updateTotal(i, val) {
  const subject = data.subjects[i];
  const conducted = subject.p + subject.a;

  subject.total = Math.max(parseInt(val) || 1, conducted);

  render();
}

function update(i, field, val) {
  const subject = data.subjects[i];

  if (val === -1 && subject[field] === 0) return;

  const conducted = subject.p + subject.a;

  if (val === 1 && conducted >= subject.total) {
    alert("Total classes limit reached.");
    return;
  }

  subject[field] += val;

  data.logs.push({
    sub: subject.name,
    type: (field === 'p' ? 'P' : 'A') + (val > 0 ? '+' : '-'),
    date: new Date().toLocaleTimeString()
  });

  render();
}

function removeSub(i) {
  if (confirm('Delete?')) {
    data.subjects.splice(i, 1);
    render();
  }
}

render();
