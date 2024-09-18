/// <reference types="node" />
/// <reference types="vec3" />
/// <reference types="reinarpg-item" />

import {EventEmitter} from 'events';
import { Vec3 } from 'vec3';
import { Item } from 'reinarpg-item';
import { ChatMessage } from 'prismarine-chat';

declare module 'reinarpg-entity' {
    export interface Effect {
        id: number;
        amplifier: number;
        duration: number;
    }

    export class Entity extends EventEmitter {
        constructor(id: number);
        id: number;
        type: EntityType;
        uuid?: string;
        username?: string;
        mobType?: string;
        displayName?: string;
        entityType?: number;
        kind?: string;
        name?: string;
        objectType?: string;
        count?: number;
        position: Vec3;
        velocity: Vec3;
        yaw: number;
        pitch: number;
        height: number;
        width: number;
        onGround: boolean;
        equipment: Array<Item>;
        get heldItem(): Item;
        metadata: Array<object>;
        isValid: boolean;
        health?: number;
        food?: number;
        foodSaturation?: number;
        elytraFlying?: boolean
        player?: object;
        effects: Effect[];
        setEquipment(index: number, item: Item): void;
        getCustomName(): ChatMessage | null;
        getDroppedItem(): Item | null;
    }

    export type EntityType = 'player' | 'mob' | 'object' | 'global' | 'orb' | 'projectile'| 'hostile' | 'other';
}
