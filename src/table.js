const tableData = [];

    function createTable() {
      const table = document.getElementById("myTable");
      const columnsInput = document.getElementById("columns");
      const rowsInput = document.getElementById("rows");
      const columns = parseInt(columnsInput.value);
      const rows = parseInt(rowsInput.value);

      // Clear existing table
      while (table.firstChild) {
        table.removeChild(table.firstChild);
      }

      // Create table header
      const headerRow = document.createElement("tr");
      for (let i = 0; i < columns; i++) {
        const th = document.createElement("th");
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("class", "header-input");
        input.setAttribute("placeholder", "Column" + (i + 1));
        th.appendChild(input);
        headerRow.appendChild(th);
      }
      table.appendChild(headerRow);

      // Create table rows
      for (let i = 0; i < rows; i++) {
        const rowData = [];
        const row = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
          const cell = document.createElement("td");
          cell.setAttribute("contenteditable", "true");
          cell.setAttribute("class", "editable-cell");
          cell.addEventListener("input", updateCell);
          rowData.push("");
          row.appendChild(cell);
        }
        table.appendChild(row);
        tableData.push(rowData);
      }
    }

    function updateCell(event) {
      const rowIndex = event.target.parentNode.rowIndex - 1;
      const columnIndex = event.target.cellIndex;
      const value = event.target.textContent.trim();
      updateData(rowIndex, columnIndex, value);
    }

    function updateData(row, col, value) {
      tableData[row][col] = value;
    }

    function deleteRow(row) {
      const table = document.getElementById("myTable");
      table.deleteRow(row);
      tableData.splice(row, 1);
    }

    function updateRow(row) {
      const table = document.getElementById("myTable");
      const rowData = tableData[row];
      const cells = table.rows[row + 1].cells;
      for (let i = 0; i < rowData.length; i++) {
        const value = cells[i].textContent.trim();
        rowData[i] = value;
      }
    }

    function displayData() {
      console.log(tableData);
    }