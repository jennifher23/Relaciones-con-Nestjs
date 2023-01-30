import { Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    JoinColumn, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn } from "typeorm";
import { Institutos } from './institutos.model';


@Entity('senesytInstitos',{schema:'institutosSenesy'})
export class SenesytEntity{
    //columnas de la entidad 
    @PrimaryGeneratedColumn('NameIntitute')
    id:string;
    @CreateDateColumn({
        name:'create_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    
    createAT:Date;

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

    deleteAt:Date;
    
    @OneToMany(() => Institutos, (institute) => institute.senesy)
    @JoinColumn({name:'intitute_id'})
    institute: Institutos;
    
    @Column('varchar',{
        name:'distrito',
        comment: 'Nombre de senesyt',
    })
    distrito:string;

    @Column('varchar',{
        name:'ubicación',
        comment:'Ubicación del instituto',
    })
    ubicacion:string;
 
    
    @Column('varchar',{
        name:'numero_senesyt',
        comment:'Numero senesyt'
    })
    
    numberOfSenesyt:string;

}
