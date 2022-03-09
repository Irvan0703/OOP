
class Tabel{
    constructor(input){
      this.input = input;
    }

    generateHeader(columns){
      let open = "<head><tr>";
      let close = "</tr></head>";
      columns.forEach((d) => {
        open += `<th>${d}</th>`;
      });

      return open + close;
    }
    generateData(data){
      let open = "<body>";
      let close = "<body>";

      data.forEach((d) => {
       open += `
          <tr>
            <td>${d[0]}</td>
            <td>${d[1]}</td>
            <td>${d[2]}</td>
            </tr>
         `;
        });
      return open + close;
    }
    render(element){
    let a = this.generateData(this.input.data);
    let b = this.generateHeader(this.input.columns);
    let c = "<table class='table table-hover'>"+b+a+"</table>";
     element.innerHTML = c;
    }

}

const tabel = new Tabel ({
  columns:['Name', 'Email', 'Phone Number'],
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']
  ]
});
tabel.render(document.getElementById("coba"))
;
