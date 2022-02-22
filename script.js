$(document).ready(function() {

    const specialElementHandlers = {
        '#editor': function(element, renderer) {
            return true;
        }
    };

    $('#downloadBtn').click(function() {
        const doc = new jsPDF(
            // {
            // orientation: "portrait",
            // unit: "pt",
            // format: [612, 792]
        // }
        );

        // doc.fromHTML($('#document').get(0), 15, 15, {
            doc.fromHTML($('#document').html(), 15, 15, {
            'width': 792,
            'elementHandlers': specialElementHandlers
        });
        // const src = document.getElementById('document').innerHTML;

        // const margins = {
        //     top: 10,
        //     bottom: 10,
        //     left: 10,
        //     width: 595
        // };

        // doc.fromHTML(
        //     src,
        //     margins.left,
        //     margins.top, 
        //     {
        //         'width': margins.width,
        //         'elementHandlers': specialElementHandlers
        //     },
        // )

        // doc.output("dataurlnewwindow");
        doc.save('sample-resume.pdf');
    })
})