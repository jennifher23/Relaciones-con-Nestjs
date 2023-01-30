import { Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, JoinColumn, 
    ManyToOne, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn } from "typeorm";
import { SenesytEntity } from './senesyt.model';

@Entity('SenesytIn',{schema:'institutosSen'})

export class Institutos{
    //columnas de la entidad 
    @PrimaryGeneratedColumn('NameInsitutes')
    id:string;
    @CreateDateColumn({
        //objeto
        name:'create_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    
    createAT:Date;//atributo

    @UpdateDateColumn({
        name:'update_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    updateAt:Date;

    @DeleteDateColumn({
        name:'delete_at',
        type:'timestamptz',
        nullable:true,
    })

    deleteAt:Date; //el nombre del atributo
    //Relationships
    //paramtrro de entrada =>
    @ManyToOne(() => SenesytEntity, (senesyt) => senesyt.institutos)
    @JoinColumn({name:'instituto_id'})
    senesyt: CategoryEntity;

    @Column('varchar',{
        name:'name',
        unique:true,
        comment: 'Nombre del instituto',
    })
    NameOfInsitute:string;

    @Column('varchar',{
        name:'ubicación',
        unique:true,
        comment:'Ubicación del instituto',
    })
    ubicacion:string;
    
    @Column('varchar',{
        name:'typeofinstitute',
        unique:true,
        comment:'Tipo de institute'
    })
    typeOfInstitute:string;

}