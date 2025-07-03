<style>
    table,th,td{
        border:1px solid black;
        border-collapse:collapse;
    }
</style>

<table>
    <tr>
        <td><b><center>DESCRIPTION</center></b></td>
        <td COLSPAN="5"><b><center>RADIATORS FOR TRANSFORMER</center></b></td>
    </tr>
    <tr>
        <td rowspan="2" colspan="2"><center>Marks & Nos./</center></td>
        <td rowspan="2"><center>No. & Kind of Packing</center></td>
        <td rowspan="2"><center>Description/Specification of Goods</center></td>
        <td><center>Qty in</center></td>
        <td><center>Rate per</center></td>
        <td><center>Amount</center></td>
    </tr>
    <tr>
        <td><center>Nos.</center></td>
        <td><center>Unit(GBP)</center></td>
        <td><center>CIF-GBP</center></td>
    </tr>
    {% for i in doc.items %}
    <tr>
        <td><center>{{i.get_formatted("idx")}}</center></td>
         <td><center>{{i.get_formatted("custom_shipping_marks")}}
         <br>{{i.get_formatted("marks_nos")}}</center></td>
          <td rowspan="3" >
                    <center>{{i.custom_no_of_nos_in_per_pallets}} each packed in wooden {{i.get_formatted("custom_type_of_packing")}} no
                    {{i.custom_pallets_series_no}}
                    
                     
                     <br>
                     <br>
                     <b>
                         {% if doc.custom_delivery_note_table | length > 1 %}
{{i.custom_container_no}} / {{i.get_formatted("custom_shipping_line_seal_no")}}
{% endif %}
                         </b>
                     <br></center>
                    </td>
           <td><center>{{i.get_formatted("description")}}</center></td>
            <td><center>{{i.get_formatted("qty")}}</center></td>
             <td><center>{{i.get_formatted("rate")}}</center></td>
              <td><center>{{i.get_formatted("amount")}}</center></td>
          
    </tr>
    {% endfor %}
    
</table>