import { Component, OnInit, Input, TemplateRef, ContentChild, ViewChild } from '@angular/core';
import { TableField } from '_shared/models/table/table-field/table-field.model'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() fields: TableField
  @Input() data: any
  @Input() __actions: TemplateRef<HTMLElement>;
  
  constructor() { }

  ngOnInit(): void {
  }

  onGetFieldName(row: any, entity: string, index: number): any
  {
    const field = this.fields[index]
    
    if (!field) {
      return ''
    }

    const value = row[field[entity]]

    return value
  }

}
