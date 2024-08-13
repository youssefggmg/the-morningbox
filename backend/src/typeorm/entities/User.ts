import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum UserRole {
    ADMIN = "ADMIN",
    User= "User",
}

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    firstName: string;
    @Column()
    LastName: string;
    @Column()
    UserName: string;
    @Column({ unique: true })
    email: string;
    @Column()
    password: string;
    @Column()
    phonenumber: number;
    @Column()
    address: string;
    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.User
    })
    role: UserRole;
    @CreateDateColumn()
    CreatedAt: Date
}